import ContactHero from "@/components/sections/ContactHero";

/**
 * Registration page for AAIS 2025.
 * @returns {JSX.Element} Registration page content
 */
export default function RegisterPage(): JSX.Element {
  return (
    <div className="space-y-4">
      <ContactHero/>
      <h1 className="text-3xl font-bold text-aviationGold">Register</h1>
      <p className="demibold">Registration form placeholder.</p>
    </div>
  );
}
