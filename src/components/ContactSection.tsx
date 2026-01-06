import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:joeryvandamme@hotmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    joeryvandamme@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground text-sm">Dendermonde, Belgium</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-muted-foreground text-sm">
                I typically respond within 1-2 business days. Looking forward to hearing from you!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8">
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3">
                  <CheckCircle className="text-green-500" size={20} />
                  <p className="text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-center gap-3">
                  <AlertCircle className="text-destructive" size={20} />
                  <p className="text-destructive text-sm">
                    Something went wrong. Please try again or email me directly.
                  </p>
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              <p className="mt-4 text-xs text-muted-foreground text-center">
                * Form powered by Formspree. Replace form ID with your own.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
