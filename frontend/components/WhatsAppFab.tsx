const wa = process.env.NEXT_PUBLIC_WHATSAPP ?? "6303896121";

export function WhatsAppFab() {
  const href = `https://wa.me/${wa}?text=${encodeURIComponent(
    "Namaste — I would like to book an astrology consultation."
  )}`;
  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
