
import React from "react";

interface PageBannerProps {
  title: string;
}

const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <div className="bg-gray-100 pt-28 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
