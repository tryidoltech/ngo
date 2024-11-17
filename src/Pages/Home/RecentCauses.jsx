import React from 'react';

const RecentCauses = () => {
  const causes = [
    {
      title: "Donate for Education",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      raised: "$500",
      goal: "$800",
      imageUrl: "cause1.png",
    },
    {
      title: "Donate for Health",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      raised: "$500",
      goal: "$800",
      imageUrl: "cause2.png",
    },
    {
      title: "Donate for Matrimony",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      raised: "$500",
      goal: "$800",
      imageUrl: "cause3.png",
    },
  ];

  return (
    <div className="py-12 px-24 max-md:px-4">
      <div>
      <h2 className="text-3xl font-semibold text-center mb-2">Recent Causes</h2>
      <div className='w-10 bg-blue-700 h-[2px] ml-[48%] mb-10 rounded-sm'></div>
      </div>
      <p className="text-center text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {causes.map((cause, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={cause.imageUrl} alt={cause.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">{cause.title}</h3>
              <p className="text-gray-600 mb-4">{cause.description}</p>
              <div className="flex justify-between items-center text-sm font-semibold">
                <span>Raised: {cause.raised}</span>
                <span>Goal: {cause.goal}</span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCauses;
