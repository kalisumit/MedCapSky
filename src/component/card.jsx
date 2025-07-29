import React from 'react';  

// Main App component to demonstrate the StatisticCard
export default function Card() {
  return (
    <div className=" flex items-center justify-evenly px-2 font-sans overflow-auto ">
        <div className=" flex items-center  justify-center p-4 font-sans w-[30%] min-w-[130px] ">
        <StatisticCard
            title="Cities"
            value="100+"
            change="+15%"
            changeColor="text-green-400" // Tailwind class for text color
        />
        </div>
        <div className="  flex items-center justify-center px-2 font-sans w-[30%] min-w-[120px]">
        <StatisticCard
            title="Caregiverse"
            value="500+"
            change="+5%"
            changeColor="text-green-400" // Tailwind class for text color
        />
        </div>
        <div className=" flex items-center justify-center px-2 font-sans w-[30%] min-w-[120px]">
        <StatisticCard
            title="Patients"
            value="1000+"
            change="+10%"
            changeColor="text-green-400" // Tailwind class for text color
        />
        </div>
    </div>
  );
}

/**
 * StatisticCard Component
 *
 * A reusable component to display a statistic with a title, value, and a change indicator.
 * The card has a gradient background and rounded corners.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.title - The title of the statistic (e.g., "Cities").
 * @param {string} props.value - The main value of the statistic (e.g., "100+").
 * @param {string} props.change - The change indicator (e.g., "+15%").
 * @param {string} [props.changeColor="text-green-400"] - Tailwind CSS class for the change text color.
 */
function StatisticCard({ title, value, change, changeColor = "text-green-400" }) {
  return (
    <div className="
      relative
      w-full  p-3
      bg-gradient-to-br from-blue-600 to-purple-700
      rounded-2xl shadow-xl
      overflow-hidden
      transform transition-all duration-300 hover:scale-105
      border-b-4 border-purple-900 flex flex-col
      justify-center 
      
    ">
      {/* Background overlay for subtle texture/pattern if desired */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="relative z-10 text-white">
        {/* Title */}
        <h3 className="text-[1rem] md:text-xl font-semibold mb-2 opacity-90">
          {title}
        </h3>

        {/* Value */}
        <p className="text-[1.25rem] md:text-4xl font-bold mb-3">
          {value}
        </p>

        {/* Change Indicator */}
        <p className={`text-lg font-medium ${changeColor}`}>
          {change}
        </p>
      </div>
    </div>
  );
}
