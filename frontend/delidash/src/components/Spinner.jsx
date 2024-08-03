import React from 'react';

const Spinner = ({ size , color }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const colorClasses = {
    blue: 'border-blue-600',
    red: 'border-red-600',
    green: 'border-green-600',
    yellow: 'border-yellow-600',
    purple: 'border-purple-600',
    grey :'border-gray-600',
    tomato:"border-[#ea811ff5]"
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`animate-spin rounded-full border-t-2 border-b-2 ${sizeClasses[size]}   ${colorClasses[color]}  `}></div>
    </div>
  );
};

export default Spinner;