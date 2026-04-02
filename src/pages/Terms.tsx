import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "eligibility", title: "Eligibility" },
  { id: "services", title: "Services Provided" },
  { id: "accounts", title: "User Accounts" },
  { id: "consultations", title: "Medical Disclaimer" },
  { id: "prescriptions", title: "Prescriptions & Refills" },
  { id: "payments", title: "Payments & Fees" },
  { id: "privacy", title: "Privacy & Data" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Information" },
];

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Care Connect Pro";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 flex container mx-auto">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r p-6 sticky top-20 h-[calc(100vh-80px)] overflow-y-auto">
          <h2 className="font-bold text-lg mb-6">Terms of Service</h2>
          <ul className="space-y-3 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 md:p-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-12 pb-6 border-b">
            Last updated: April 2, 2026
          </p>

          <section id="intro" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this healthcare platform, you agree to comply
              with these Terms & Conditions. If you do not agree, please do not use
              the service.
            </p>
          </section>

          <section id="eligibility" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Eligibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              You must be at least 18 years old or have parental/guardian consent
              to use this platform.
            </p>
          </section>

          <section id="services" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Services Provided</h2>
            <ul className="space-y-3 list-disc ml-6 text-muted-foreground leading-relaxed">
              <li>Online doctor consultations</li>
              <li>Health records management</li>
              <li>Lab results tracking</li>
              <li>Prescription and refill services</li>
            </ul>
          </section>

          <section id="accounts" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              You are responsible for maintaining the confidentiality of your
              account credentials and all activities under your account.
            </p>
          </section>

          <section id="consultations" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Medical Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              This platform facilitates consultations but does not replace
              in-person medical advice. In emergencies, contact your nearest
              hospital immediately.
            </p>
          </section>

          <section id="prescriptions" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Prescriptions & Refills</h2>
            <p className="text-muted-foreground leading-relaxed">
              Prescriptions are issued at the discretion of licensed doctors.
              Refill approvals depend on medical evaluation and eligibility.
            </p>
          </section>

          <section id="payments" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Payments & Fees</h2>
            <p className="text-muted-foreground leading-relaxed">
              Certain services may require payment. All fees are non-refundable
              unless stated otherwise.
            </p>
          </section>

          <section id="privacy" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Privacy & Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is handled according to our Privacy Policy. By using this
              platform, you consent to data collection and usage practices.
            </p>
          </section>

          <section id="liability" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are not liable for any indirect, incidental, or consequential
              damages arising from the use of this platform.
            </p>
          </section>

          <section id="termination" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </section>

          <section id="changes" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these terms periodically. Continued use of the platform
              constitutes acceptance of updated terms.
            </p>
          </section>

          <section id="contact" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For inquiries, contact <a href="mailto:support@healthcare.com" className="text-primary hover:underline">support@healthcare.com</a>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;