import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Map from '@/features/Map';

const businessLocation = { lat: 14.2226546, lng: 120.9736 };

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="w-full bg-bg-light transition-colors duration-300"
      >
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8 py-24">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Section - Contact Info */}
            <div className="w-full lg:w-2/5">
              <h2 className="text-4xl font-bold text-txt-primary mb-4">
                Get in <span className="text-txt-highlight">Touch</span>
              </h2>
              <p className="text-txt-muted mb-8">
                We're always on the lookout to work with new clients. If you're
                interested in working with us, please get in touch in one of the
                following ways.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <LocationOnIcon className="text-txt-highlight mt-1" />
                  <div>
                    <h4 className="font-semibold text-txt-primary mb-1">
                      Address
                    </h4>
                    <p className="text-txt-muted text-sm">
                      4517 State Ave NE, Albuquerque, New York, United States
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <PhoneIcon className="text-txt-highlight mt-1" />
                  <div>
                    <h4 className="font-semibold text-txt-primary mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+15551234567"
                      className="text-txt-muted text-sm hover:text-txt-highlight transition-colors"
                    >
                      (555) 762-5686
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <EmailIcon className="text-txt-highlight mt-1" />
                  <div>
                    <h4 className="font-semibold text-txt-primary mb-1">
                      E-Mail
                    </h4>
                    <a
                      href="mailto:demo@yourwebsite.com"
                      className="text-txt-muted text-sm hover:text-txt-highlight transition-colors"
                    >
                      demo@yourwebsite.com
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <AccessTimeIcon className="text-txt-highlight mt-1" />
                  <div>
                    <h4 className="font-semibold text-txt-primary mb-1">
                      Opening Hours
                    </h4>
                    <div className="text-txt-muted text-sm space-y-1">
                      <p>Mon - Fri: 9am - 6pm</p>
                      <p>Sat - Sun: 9am - 2pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-txt-muted/20">
                <h4 className="font-semibold text-txt-primary mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
                  >
                    <FacebookIcon className="text-txt-highlight group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
                  >
                    <InstagramIcon className="text-txt-highlight group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
                  >
                    <TwitterIcon className="text-txt-highlight group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-txt-highlight/10 hover:bg-txt-highlight flex items-center justify-center transition-colors group"
                  >
                    <LinkedInIcon className="text-txt-highlight group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden shadow-[var(--box-shadow)] z-10">
              <Map
                position={businessLocation}
                markerText="Acme Corp HQ - Manila"
                zoom={19} // Zoom in closer
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
