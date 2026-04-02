import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "data", title: "Information We Collect" },
  { id: "usage", title: "How We Use Data" },
  { id: "sharing", title: "Data Sharing" },
  { id: "security", title: "Data Security" },
  { id: "rights", title: "User Rights" },
  { id: "cookies", title: "Cookies Policy" },
  { id: "updates", title: "Policy Updates" },
  { id: "contact", title: "Contact Us" },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Care Connect Pro";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 flex container mx-auto">
        {/* Sidebar Navigation */}
        <aside className="hidden md:block w-64 border-r p-6 sticky top-20 h-[calc(100vh-80px)]">
          <h2 className="font-bold text-lg mb-6">Privacy Policy</h2>
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
          
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12 pb-6 border-b">
            Last updated: April 2, 2026
          </p>

          {/* Sections */}
          <section id="intro" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              We value your privacy and are committed to protecting your personal
              and medical information. This policy explains how we collect, use,
              and safeguard your data when using our healthcare platform.
            </p>
          </section>

          <section id="data" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <ul className="space-y-3 list-disc ml-6 text-muted-foreground leading-relaxed">
              <li>Personal details (name, email, phone)</li>
              <li>Health records and medical history</li>
              <li>Lab results and prescriptions</li>
              <li>Consultation data</li>
            </ul>
          </section>

          <section id="usage" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">How We Use Data</h2>
            <ul className="space-y-3 list-disc ml-6 text-muted-foreground leading-relaxed">
              <li>Provide healthcare services</li>
              <li>Improve platform experience</li>
              <li>Enable doctor-patient communication</li>
              <li>Ensure compliance with legal obligations</li>
            </ul>
          </section>

          <section id="sharing" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your data. Information is only shared with authorized
              healthcare professionals and service providers under strict
              confidentiality agreements.
            </p>
          </section>

          <section id="security" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement encryption, secure servers, and access controls to
              protect your information from unauthorized access.
            </p>
          </section>

          <section id="rights" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">User Rights</h2>
            <ul className="space-y-3 list-disc ml-6 text-muted-foreground leading-relaxed">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Delete your account</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section id="cookies" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Cookies Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies to enhance user experience and analyze platform
              performance.
            </p>
          </section>

          <section id="updates" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this policy periodically. Changes will be notified via
              the platform.
            </p>
          </section>

          <section id="contact" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions, contact us at <a href="mailto:support@healthcare.com" className="text-primary hover:underline">support@healthcare.com</a>
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;