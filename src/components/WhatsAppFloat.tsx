import whatsappLogo from "@/assets/whatsapp.png";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=35649542427&text=Quisiera+informaci%C3%B3n+sobre+sus+servicios+corporales.&type=phone_number&app_absent=0";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-16 w-16 items-center justify-center transition-transform hover:scale-110"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="h-16 w-16 object-contain drop-shadow-lg"
      />
    </a>
  );
}
