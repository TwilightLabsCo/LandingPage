import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message received",
      description: "Thank you for your inquiry. We'll respond within 24 hours.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 bg-background border-t border-border/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left - Info */}
            <div>
              <span className="text-xs font-medium text-muted-foreground tracking-widest uppercase mb-4 block">
                Contact
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground leading-tight tracking-tight-custom mb-6">
                Let's discuss your objectives
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-12">
                Whether you're exploring investment opportunities, require custom development, 
                or are ready to create new digital assets, we're here to help.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Email</p>
                  <p className="text-foreground font-medium">Business@TwilightLabs.Top</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase mb-2">Location</p>
                  <p className="text-foreground font-medium">Atlanta, GA</p>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-transparent border-border/60 focus:border-primary rounded-md h-12 placeholder:text-muted-foreground/50 ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-2">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-transparent border-border/60 focus:border-primary rounded-md h-12 placeholder:text-muted-foreground/50 ${errors.email ? 'border-destructive' : ''}`}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-2">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-muted-foreground tracking-widest uppercase mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-transparent border-border/60 focus:border-primary rounded-md resize-none placeholder:text-muted-foreground/50 ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-2">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-md h-12 gap-2 font-medium tracking-tight group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
