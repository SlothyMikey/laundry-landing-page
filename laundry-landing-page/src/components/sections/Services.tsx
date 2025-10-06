import localLaundry from '@mui/icons-material/LocalLaundryService';
import dryCleaning from '@mui/icons-material/DryCleaning';
import iron from '@mui/icons-material/Iron';
import selfService from '@mui/icons-material/SelfImprovement';
import removeCircle from '@mui/icons-material/RemoveCircle';
import accessTime from '@mui/icons-material/AccessTime';

export default function Services() {
  const services = [
    {
      icons: localLaundry,
      title: 'Wash & Fold',
      description: 'Convenient washing and folding for everyday clothes.',
    },
    {
      icons: dryCleaning,
      title: 'Dry Cleaning',
      description:
        'Professional dry cleaning for delicate and formal garments.',
    },
    {
      icons: iron,
      title: 'Iron & Press',
      description: 'Expert ironing service for crisp, wrinkle-free clothing.',
    },
    {
      icons: selfService,
      title: 'Self-Service',
      description: 'DIY laundry with our modern machines and facilities.',
    },
    {
      icons: removeCircle,
      title: 'Stain Removal',
      description: 'Specialized treatment for tough stains and spots.',
    },
    {
      icons: accessTime,
      title: 'Express Service',
      description: 'Same-day service for urgent laundry needs.',
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-bg-dark transition-colors duration-300"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 py-24">
        <h2 className="text-4xl text-center font-bold text-txt-primary mb-6">
          What <span className="text-txt-highlight">services</span> do we offer?
        </h2>
        <p className="text-lg text-center text-txt-muted mb-10">
          Learn more about our reliable laundry services designed to save you
          time and effort.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-lg shadow bg-bg-light">
              <div className="mb-4 rounded-full bg-bg-highlight w-12 h-12 flex items-center justify-center">
                <service.icons className="text-white" />
              </div>
              <h3 className="text-xl text-txt-primary font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-txt-muted">{service.description}</p>
            </div>
          ))}
        </div>
        <h3 className="text-lg text-center text-txt-muted font-semibold mt-10">
          And many more...
        </h3>
      </div>
    </section>
  );
}
