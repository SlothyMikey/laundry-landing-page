import PricingCard from '@/features/PricingCard';
import { pricingPlans, additionalServices } from '@/constants/pricingData';

export default function Pricing() {
  return (
    <>
      <section
        id="pricing"
        className="py-16 bg-bg-light transition-colors duration-300"
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
          <h2 className="text-4xl text-center font-bold text-txt-primary mb-6">
            Check <span className="text-txt-highlight">Pricing</span> for every
            service.
          </h2>
          <p className="text-lg text-center text-txt-muted mb-10">
            Choose a plan that fits your laundry needs. No hidden fees, just
            simple and transparent pricing.
          </p>

          {/* Pricing Container */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
            {/* Left Section - Main Pricing Plans */}
            <div className="flex flex-col md:flex-row gap-6 lg:sticky lg:top-24 lg:self-start">
              {pricingPlans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
              ))}
            </div>

            {/* Right Section - Additional Services */}
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              {additionalServices.map((service, index) => (
                <PricingCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
