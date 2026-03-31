import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Appointment Requested!", description: "We'll confirm your booking shortly via email." });
    }, 1500);
  };

  return (
    <section id="book" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-body font-semibold text-primary tracking-widest uppercase">Get Started</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mt-3">Book Your Appointment</h2>
            <p className="font-body text-muted-foreground mt-4">Fill out the form and we'll get back to you within minutes.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl border border-border p-8 md:p-10 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">Full Name</label>
                <Input placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">Email</label>
                <Input type="email" placeholder="john@email.com" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">Phone</label>
                <Input type="tel" placeholder="+1 (555) 000-0000" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">Department</label>
                <Select required>
                  <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="general">General Medicine</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">Preferred Date</label>
                <Input type="date" required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-body font-medium text-foreground">Preferred Time</label>
                <Select required>
                  <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="15:00">03:00 PM</SelectItem>
                    <SelectItem value="16:00">04:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2 mt-5">
              <label className="text-sm font-body font-medium text-foreground">Symptoms / Notes</label>
              <Textarea placeholder="Briefly describe your symptoms or reason for visit..." rows={3} />
            </div>
            <Button type="submit" size="lg" className="w-full mt-6 gap-2" disabled={loading}>
              <CalendarDays className="w-5 h-5" />
              {loading ? "Submitting..." : "Request Appointment"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
