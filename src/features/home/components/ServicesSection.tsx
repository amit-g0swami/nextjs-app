import { BackGroundDiv } from "@/features/shared/components/BackGroundDiv";
import {
  CpuChipIcon,
  ShieldCheckIcon,
  BoltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

export const ServicesSection = () => {
  return (
    <BackGroundDiv>
      <div className="py-10 sm:py-20" id="services">
        <div
          className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
          id="features"
        >
          <div className="lg:text-center">
            <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              Our Services
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Your satisfaction is our top priority
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              We work closely with you to understand your unique requirements
              and tailor our solutions accordingly.
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <ShieldCheckIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Comprehensive Logistics Solutions
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Our comprehensive logistics solutions cover the entire
                      spectrum of your supply chain needs. Our integrated
                      approach ensures seamless operations and optimized costs.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <CpuChipIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Technology-Driven Solutions
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Unlock the power of real-time visibility and control with
                      our cutting-edge technology. Our systems provide
                      actionable insights, allowing you to monitor, manage, and
                      optimize your supply chain in a way that suits your
                      business goals.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <BoltIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Customized Strategies
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      At Shippivot, we recognize that every business is unique.
                      Our team collaborates closely with you to understand your
                      challenges and design bespoke logistics strategies that
                      align with your objectives.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <CurrencyDollarIcon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">
                      Cost Efficiency
                    </h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Discover cost-effective logistics solutions tailored to
                      your budget. We optimize resources, minimize waste, and
                      drive efficiency to ensure your logistics operations are
                      as cost-effective as possible.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BackGroundDiv>
  );
};
