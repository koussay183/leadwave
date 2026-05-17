type Props = {
  phone?: string;
  message?: string;
};

export function WhatsAppFab({
  phone = "21627945870",
  message = "Bonjour LeadWave, je suis intéressé(e) par la formation.",
}: Props) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Discuter sur WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full text-white shadow-lg hover:-translate-y-0.5 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      style={{ background: "#25D366" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.5 2 2 6.5 2 12.04c0 1.77.46 3.5 1.35 5.02L2 22l5.07-1.33a10.04 10.04 0 0 0 4.97 1.27h.01c5.54 0 10.04-4.5 10.04-10.04 0-2.68-1.04-5.2-2.98-7.09Zm-7.07 15.43h-.01a8.34 8.34 0 0 1-4.25-1.16l-.31-.18-3.01.79.8-2.93-.2-.31a8.32 8.32 0 0 1-1.27-4.4c0-4.6 3.74-8.34 8.35-8.34a8.29 8.29 0 0 1 5.9 2.45 8.29 8.29 0 0 1 2.45 5.9c0 4.6-3.75 8.34-8.35 8.34Zm4.59-6.25c-.25-.13-1.49-.74-1.72-.82-.23-.08-.4-.13-.57.13-.17.25-.66.82-.81 1-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.3.37-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.5-.42-.43-.57-.44h-.49c-.17 0-.45.06-.68.31-.23.25-.89.87-.89 2.12s.91 2.46 1.04 2.63c.13.17 1.79 2.74 4.34 3.84.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.49-.61 1.7-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
      </svg>
    </a>
  );
}
