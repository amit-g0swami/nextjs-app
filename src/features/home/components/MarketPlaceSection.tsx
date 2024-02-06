// export const MarketplaceSection = () => {
//   return (
//     <section className="bg-gray-50 py-24" id="marketplace">
//       <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
//         <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
//           <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
//             We didn't reinvent the wheel
//           </h2>
//           <p className="mb-4">
//             We are strategists, designers and developers. Innovators and problem
//             solvers. Small enough to be simple and quick, but big enough to
//             deliver the scope you want at the pace you need. Small enough to be
//             simple and quick, but big enough to deliver the scope you want at
//             the pace you need.
//           </p>
//           <p>
//             We are strategists, designers and developers. Innovators and problem
//             solvers. Small enough to be simple and quick.
//           </p>
//         </div>
//         <div className="grid grid-cols-2 gap-4 mt-8">
//           <img
//             className="w-full rounded-lg"
//             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
//             alt="office content 1"
//           />
//           <img
//             className="mt-4 w-full lg:mt-10 rounded-lg"
//             src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
//             alt="office content 2"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export const MarketplaceSection = () => {
  return (
    <section
      className="overflow-hidden bg-white py-14 sm:py-24"
      id="marketplace"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                A better workflow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </section>
  );
};
