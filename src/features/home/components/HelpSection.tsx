const dummyHelpData = [
  {
    title: "Help Topic 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Help Topic 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    title: "Help Topic 3",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export const HelpSection = () => {
  return (
    <div className="bg-gray-300 py-24" id="help">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Help
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dummyHelpData.map((helpTopic, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900">
                {helpTopic.title}
              </h3>
              <p className="mt-4 text-gray-600">{helpTopic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
