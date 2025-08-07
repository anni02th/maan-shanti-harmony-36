import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Individual Therapy", href: "#" },
        { name: "Couples Counseling", href: "#" },
        { name: "Family Therapy", href: "#" },
        { name: "Group Sessions", href: "#" },
        { name: "Crisis Support", href: "#" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Mental Health Blog", href: "#" },
        { name: "Self-Help Tools", href: "#" },
        { name: "Meditation Guides", href: "#" },
        { name: "Emergency Resources", href: "#" },
        { name: "Insurance Guide", href: "#" },
      ]
    },
    {
      title: "For Therapists",
      links: [
        { name: "Join Our Team", href: "#" },
        { name: "Therapist Portal", href: "#" },
        { name: "Professional Training", href: "#" },
        { name: "Certification Programs", href: "#" },
        { name: "Refer a Client", href: "#" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Mission", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Contact Us", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-teal-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-teal-primary" />
              </div>
              <span className="text-2xl font-bold font-heading">MaanShanti</span>
            </div>

            {/* Description */}
            <p className="text-white/80 leading-relaxed max-w-md">
              India's leading online mental health platform, connecting you with 
              licensed therapists for personalized, compassionate care. Your journey 
              to mental wellness starts here.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-light" />
                <span className="text-white/80">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-light" />
                <span className="text-white/80">support@maanshanti.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-light" />
                <span className="text-white/80">Mumbai, Delhi, Bangalore</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold font-heading">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Support Banner */}
      <div className="bg-orange-soft text-teal-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-2 md:mb-0">
              <span className="font-semibold">24/7 Crisis Support: </span>
              <span>If you're having thoughts of self-harm, please reach out immediately.</span>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="tel:9152987821" className="font-bold hover:underline">
                📞 91529-87821 (Crisis Line)
              </a>
              <button className="bg-teal-primary text-white px-4 py-2 rounded-lg hover:bg-teal-dark transition-colors duration-300 text-sm font-medium">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-teal-primary/20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © {currentYear} MaanShanti. All rights reserved. Licensed & Certified Mental Health Platform.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;