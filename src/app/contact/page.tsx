import ContactHelpCenter from "@/components/sections/ContactHelpCenter";
import ContactHero from "@/components/sections/ContactHero";

/**
 * Registration page for AAIS 2025.
 * @returns {JSX.Element} Registration page content
 */
export default function RegisterPage(): JSX.Element {
  return (
    <div className="space-y-4">
      <ContactHero/>
    <ContactHelpCenter/>
    </div>
  );
}
