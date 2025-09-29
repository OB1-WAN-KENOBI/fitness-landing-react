export type SectionId = "home" | "benefits" | "ourclasses" | "contactus";

export const navLinks: { id: SectionId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "benefits", label: "Benefits" },
  { id: "ourclasses", label: "Ourclasses" },
  { id: "contactus", label: "Contactus" },
];
