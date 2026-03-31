import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-sans font-bold text-xl mb-4">
            <Stethoscope className="w-6 h-6" />
            MediBook
          </div>
          <p className="font-body text-sm opacity-70 leading-relaxed">Your trusted platform for seamless doctor appointments and modern healthcare management.</p>
        </div>
        <div>
          <h4 className="font-sans font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm opacity-70">
            <li><a href="#features" className="hover:opacity-100 transition-opacity">Features</a></li>
            <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">How It Works</a></li>
            <li><a href="#doctors" className="hover:opacity-100 transition-opacity">Our Doctors</a></li>
            <li><a href="#book" className="hover:opacity-100 transition-opacity">Book Appointment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-bold mb-4">Services</h4>
          <ul className="space-y-2 font-body text-sm opacity-70">
            <li>Online Consultation</li>
            <li>Lab Results</li>
            <li>Prescription Refills</li>
            <li>Health Records</li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans font-bold mb-4">Contact</h4>
          <ul className="space-y-3 font-body text-sm opacity-70">
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@medibook.com</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Health Street, NY</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center font-body text-xs opacity-50">
        © 2026 MediBook. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
