import { useEffect, useRef, useState } from 'preact/hooks';
import type { MatrixResult } from '../../lib/matrix/types';
import { getArcana } from '../../lib/matrix/interpretations';

export interface ShareResultProps {
  result: MatrixResult;
}

const CARD_SIZE = 1080;

const CORE_ROW: { key: 'A' | 'B' | 'C' | 'D' | 'E'; label: string }[] = [
  { key: 'A', label: 'A' },
  { key: 'B', label: 'B' },
  { key: 'C', label: 'C' },
  { key: 'D', label: 'D' },
  { key: 'E', label: 'E' },
];

async function drawShareCard(canvas: HTMLCanvasElement, result: MatrixResult): Promise<Blob | null> {
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  canvas.width = CARD_SIZE;
  canvas.height = CARD_SIZE;

  if (typeof document !== 'undefined' && 'fonts' in document) {
    await document.fonts.ready;
  }

  const central = getArcana(result.central);
  const displayName = result.input.name?.trim();

  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, CARD_SIZE, CARD_SIZE);
  gradient.addColorStop(0, '#2E1065');
  gradient.addColorStop(1, '#4C1D95');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CARD_SIZE, CARD_SIZE);

  // Gold border
  ctx.strokeStyle = '#C9A227';
  ctx.lineWidth = 6;
  ctx.strokeRect(32, 32, CARD_SIZE - 64, CARD_SIZE - 64);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#E4C558';
  ctx.font = '600 44px Fraunces, serif';
  ctx.fillText('ARCANIA', CARD_SIZE / 2, 140);

  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = '400 32px Inter, sans-serif';
  ctx.fillText(
    displayName ? `La Matriz del Destino de ${displayName}` : 'Mi Matriz del Destino',
    CARD_SIZE / 2,
    195,
  );

  // Central arcana circle
  const circleY = 480;
  const circleRadius = 190;
  ctx.beginPath();
  ctx.arc(CARD_SIZE / 2, circleY, circleRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#C9A227';
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = '700 220px Fraunces, serif';
  ctx.fillText(String(result.central), CARD_SIZE / 2, circleY + 75);

  ctx.font = '600 40px Fraunces, serif';
  ctx.fillStyle = '#E4C558';
  ctx.fillText(central.name, CARD_SIZE / 2, circleY + circleRadius + 70);

  // A–E row
  const rowY = 830;
  const spacing = 170;
  const startX = CARD_SIZE / 2 - spacing * 2;
  CORE_ROW.forEach((item, index) => {
    const x = startX + spacing * index;
    ctx.beginPath();
    ctx.arc(x, rowY, 60, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgba(228,197,88,0.6)';
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 44px Fraunces, serif';
    ctx.fillText(String(result.positions[item.key]), x, rowY + 16);

    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.font = '400 22px Inter, sans-serif';
    ctx.fillText(item.label, x, rowY + 90);
  });

  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = '400 26px Inter, sans-serif';
  ctx.fillText('Calcula la tuya gratis · matrizdeldestino.com', CARD_SIZE / 2, CARD_SIZE - 70);

  return new Promise((resolve) => canvas.toBlob((blob) => resolve(blob), 'image/png'));
}

export default function ShareResult({ result }: ShareResultProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null = null;

    (async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const generatedBlob = await drawShareCard(canvas, result);
      if (cancelled || !generatedBlob) return;
      objectUrl = URL.createObjectURL(generatedBlob);
      setBlob(generatedBlob);
      setPreviewUrl(objectUrl);
    })();

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  const shareText = `¡Descubrí mi Matriz del Destino! Mi arcano central es el ${result.central} — ${getArcana(result.central).name}. Calcula la tuya gratis:`;
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleNativeShare = async () => {
    if (!blob) return;
    const file = new File([blob], 'matriz-del-destino.png', { type: 'image/png' });
    const shareData = { files: [file], title: 'Mi Matriz del Destino', text: shareText };
    if (navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled — nothing to do.
      }
    }
  };

  const handleDownload = () => {
    if (!previewUrl) return;
    const link = document.createElement('a');
    link.href = previewUrl;
    link.download = 'matriz-del-destino.png';
    link.click();
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${pageUrl}`)}`, '_blank', 'noopener,noreferrer');
  };

  const handleX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const canNativeShare = typeof navigator !== 'undefined' && 'share' in navigator && !!blob;

  return (
    <div class="rounded-2xl border border-surface-alt bg-white p-6 shadow-sm sm:p-8">
      <h2 class="font-heading text-xl font-bold text-ink">Comparte tu resultado</h2>
      <canvas ref={canvasRef} class="hidden" aria-hidden="true" />

      {previewUrl ? (
        <img
          src={previewUrl}
          width={CARD_SIZE}
          height={CARD_SIZE}
          alt={`Tarjeta para compartir tu Matriz del Destino, arcano central ${result.central}`}
          class="mx-auto mt-4 aspect-square w-full max-w-xs rounded-xl shadow-md"
        />
      ) : (
        <div class="mx-auto mt-4 aspect-square w-full max-w-xs animate-pulse rounded-xl bg-surface-alt" />
      )}

      <div class="mt-6 flex flex-wrap justify-center gap-3">
        {canNativeShare && (
          <button
            type="button"
            onClick={handleNativeShare}
            class="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent hover:text-ink"
          >
            Compartir
          </button>
        )}
        <button
          type="button"
          onClick={handleWhatsApp}
          class="rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          WhatsApp
        </button>
        <button
          type="button"
          onClick={handleX}
          class="rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          X
        </button>
        <button
          type="button"
          onClick={handleDownload}
          class="rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Descargar imagen
        </button>
        <button
          type="button"
          onClick={handleCopyLink}
          class="rounded-full border-2 border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
        >
          {copied ? '¡Enlace copiado!' : 'Copiar enlace'}
        </button>
      </div>
      <p class="mt-3 text-center text-xs text-ink-muted">
        Para Instagram: descarga la imagen y compártela desde la app — Instagram no permite compartir directamente desde el navegador.
      </p>
    </div>
  );
}
