import React from 'react';
import ctaImage from "@/assets/icons/image.png";

interface CallToActionProps {
  className?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({ className }) => {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center bg-[rgba(83,56,158,1)] text-white p-8 rounded-lg max-w-4xl mx-auto ${className || ''}`}>
      <div className="text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-3xl font-bold mb-2">Give us a shot</h2>
        <p className="text-gray-200">Join over 4,000+ startups already growing with Untitled.</p>
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <button className="px-6 py-3 bg-white text-[rgba(83,56,158,1)] rounded-md font-medium">Learn more</button>
          <button className="px-6 py-3 bg-transparent border border-white text-white rounded-md font-medium">Get started</button>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={ctaImage} alt="Call to Action" className="w-full h-auto max-w-sm rounded-lg" />
      </div>
    </div>
  );
};

export default CallToAction;
