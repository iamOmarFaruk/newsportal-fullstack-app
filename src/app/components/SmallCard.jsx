import Image from "next/image";

const SmallCard = ({ image, title, category, description }) => {
  return (
    <div className="relative rounded-lg overflow-hidden group bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-44">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="flex items-center mt-4">
          <div className="inline-block h-3 w-1 bg-red-600 mr-2"></div>
          <span className="text-gray-500 text-sm">{category}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
