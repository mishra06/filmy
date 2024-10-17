import React from 'react'

const ShimmerEffect = () => {
    return (
        <div className="flex h-[80vh] flex-col justify-evenly w-full">
          {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
            <div key={index} className="flex items-center justify-evenly w-full gap-4">
              <div className="w-[20%] bg-gray-200 h-4 rounded animate-pulse"></div>
              <div className="flex gap-2 justify-center items-center w-[60%]">
                <div className="bg-gray-200 h-10 w-10 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-4 w-20 rounded animate-pulse"></div>
              </div>
              <div className="w-[20%] flex gap-2">
                <div className="bg-gray-200 h-4 w-4 rounded animate-pulse"></div>
                <div className="bg-gray-200 h-4 w-10 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      );
}

export default ShimmerEffect
