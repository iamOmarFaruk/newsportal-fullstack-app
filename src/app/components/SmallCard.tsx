import React from "react";
import Image from "next/image";

interface SmallCardProps {
  title: string;
  category: string;
  imageUrl: string;
  date: string;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, category, imageUrl, date }) => {
  return (
    <article className="flex space-x-4">
      {/* Image */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-width: 96px) 100vw, 96px"
          className="rounded object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <span className="text-xs font-semibold text-red-600 mb-1 block">
          {category}
        </span>
        <h3 className="text-sm font-semibold leading-snug mb-1">
          <a href="#" className="hover:text-red-600 transition-colors">
            {title}
          </a>
        </h3>
        <time className="text-xs text-gray-500">{date}</time>
      </div>
    </article>
  );
};

export default SmallCard;