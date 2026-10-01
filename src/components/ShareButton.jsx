import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton({ title, text }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        if (err.name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Salin tautan ini:', url);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 text-[12px] font-medium text-ink-500 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-50 transition-colors"
    >
      {copied ? (
        <>
          <Check size={13} strokeWidth={1.5} />
          Tautan disalin
        </>
      ) : (
        <>
          <Share2 size={13} strokeWidth={1.5} />
          Bagikan
        </>
      )}
    </button>
  );
}
