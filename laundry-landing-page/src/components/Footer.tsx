import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Wash & Fold',
    'Dry Cleaning',
    'Ironing Service',
    'Self-Service',
    'Pickup & Delivery',
  ];

  return (
    <footer className="w-full bg-dark-light border-t border-txt-muted/10 transition-colors duration-300 text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LocalLaundryServiceIcon className="text-txt-highlight text-3xl" />
              <h3 className="text-xl font-bold">
                Fresh<span className="text-txt-highlight">Wash</span>
              </h3>
            </div>
            <p className="text-txt-muted text-sm mb-4">
              Your trusted laundry service provider. We ensure your clothes are
              cleaned with care and returned fresh every time.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
              >
                <FacebookIcon className="text-txt-highlight group-hover:text-white transition-colors text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
              >
                <InstagramIcon className="text-txt-highlight group-hover:text-white transition-colors text-xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
              >
                <TwitterIcon className="text-txt-highlight group-hover:text-white transition-colors text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
              >
                <LinkedInIcon className="text-txt-highlight group-hover:text-white transition-colors text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-txt-muted text-sm hover:text-txt-highlight transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-txt-muted text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <LocationOnIcon className="text-txt-highlight text-xl mt-0.5" />
                <p className="text-txt-muted text-sm">
                  4517 State Ave NE, Albuquerque, New York, United States
                </p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="text-txt-highlight text-xl" />
                <a
                  href="tel:+15551234567"
                  className="text-txt-muted text-sm hover:text-txt-highlight transition-colors"
                >
                  (555) 762-5686
                </a>
              </div>
              <div className="flex items-center gap-2">
                <EmailIcon className="text-txt-highlight text-xl" />
                <a
                  href="mailto:demo@yourwebsite.com"
                  className="text-txt-muted text-sm hover:text-txt-highlight transition-colors"
                >
                  demo@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-txt-muted/10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-txt-muted text-sm">
              © {currentYear} FreshWash. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
