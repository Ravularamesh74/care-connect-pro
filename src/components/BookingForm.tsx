"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


// ✅ Validation Schema
const bookingSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Enter valid phone number"),
  department: z.string().min(1, "Select department"),
  date: z.string().min(1, "Select date"),
  time: z.string().min(1, "Select time"),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  // ✅ Real API Submission (replace with your backend)
  const onSubmit = async (data: BookingFormData) => {
    try {
      setLoading(true);

      const res = await fetch("/api/book-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      toast({
        title: "✅ Appointment Booked",
        description: "We will contact you shortly.",
      });

      reset();
    } catch (error) {
      toast({
        title: "❌ Error",
        description: "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-24 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="text-4xl font-bold mt-3">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground mt-4">
            Fill out the form and get instant confirmation.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-background border rounded-2xl p-8 shadow-lg space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-5">

            {/* NAME */}
            <div>
              <Input placeholder="Full Name" {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            {/* EMAIL */}
            <div>
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            {/* PHONE */}
            <div>
              <Input type="tel" placeholder="Phone" {...register("phone")} />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            {/* DEPARTMENT */}
            <Controller
              control={control}
              name="department"
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="general">General Medicine</SelectItem>
                    <SelectItem value="ENT">ENT</SelectItem>
                    <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                    <SelectItem value="gynecology">Gynecology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="general">General Medicine</SelectItem>
                    <SelectItem value="ENT">ENT</SelectItem>
                    <SelectItem value="ophthalmology">Ophthalmology</SelectItem>
                    <SelectItem value="gynecology">Gynecology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    
                  </SelectContent>
                </Select>
              )}
            />
            {errors.department && (
              <p className="text-red-500 text-sm">{errors.department.message}</p>
            )}

            {/* DATE */}
            <div>
              <Input type="date" {...register("date")} />
              {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
            </div>

            {/* TIME */}
            <Controller
              control={control}
              name="time"
              render={({ field }) => (
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="09:00">09:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="11:00">11:00 AM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time.message}</p>
            )}
          </div>

          {/* NOTES */}
          <Textarea placeholder="Describe symptoms..." {...register("notes")} />

          {/* BUTTON */}
          <Button
            type="submit"
            className="w-full flex gap-2"
            disabled={loading}
          >
            <CalendarDays className="w-5 h-5" />
            {loading ? "Booking..." : "Request Appointment"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;