export const SITE = {
  name: "Malik Law Associates",
  lawyer: "Malik Atif Qasim",
  designation: "Advocate High Court",
  location: "Punjab, Pakistan",
  tagline: "Justice. Integrity. Excellence.",
  email: "atif.qasim6@gmail.com",
  phoneDisplay: "0322-4694065",
  whatsapp: "923224694065",
  address: "Batti Chowk, Ravi Road, Lahore, Punjab, Pakistan",
  mapsUrl: "https://maps.google.com/?q=Batti+Chowk+Ravi+Road+Lahore",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Batti+Chowk+Ravi+Road+Lahore&output=embed",
  facebook:
    "https://www.facebook.com/people/Malik-Law-Associates/100064188425186/",
  copyrightYear: 2024,
} as const;

export const TEAM = [
  {
    name: "Mr. Malik Atif Qasim",
    title: "Advocate High Court",
    specialization:
      "Tax Cases, Criminal Cases, Land & Property, Family Cases",
    phone: "0322-4694065",
    whatsapp: "https://wa.me/923224694065",
  },
  {
    name: "Mr. Malik Karam Ellahi",
    title: "Advocate High Court",
    specialization: "Tax Cases, Criminal Cases, Land & Property",
    phone: "0302-4604844",
    whatsapp: "https://wa.me/923024604844",
  },
  {
    name: "Mr. Arslan",
    title: "Tax Consultant",
    specialization: "Income Tax, Sales Tax, FBR Matters",
    phone: "0324-0012517",
    whatsapp: "https://wa.me/923240012517",
  },
  {
    name: "Mr. Asad",
    title: "Tax Consultant",
    specialization: "Income Tax, Sales Tax, FBR Matters",
    phone: "0323-4827404",
    whatsapp: "https://wa.me/923234827404",
  },
] as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/calculator", label: "Calculator" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${SITE.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function telHref(phone: string) {
  return `tel:+92${phone.replace(/\D/g, "").replace(/^0/, "")}`;
}
