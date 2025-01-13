import Image from "next/image";

const Hero = () => {
  const featuredNews = {
    title: "Amazon Shoppers Are Ditching Designer Belts For This Best-Selling",
    category: "Europe",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This is very helpful for generating default content.",
    image: "https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };

  const sideNews = [
    {
      title: "News Magazines Are Becoming Obsolete, Replaced By Gadgets",
      category: "Techno",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Minimalist Designs Are Starting To Be Popular With The Next Generation",
      category: "Architecture",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Tips For Decorating The Interior Of The Living Room",
      category: "Interior",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Online Taxi Users Are Increasing Drastically Ahead Of The New Year",
      category: "Lifestyle",
      image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-5 gap-6">
        {/* Featured News (60%) */}
        <div className="relative col-span-3 rounded-lg overflow-hidden group">
          <Image
            src={featuredNews.image}
            alt={featuredNews.title}
            layout="responsive"
            width={700}
            height={400}
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black/90 transition-all duration-300 p-6 flex flex-col justify-end">
            <h2 className="text-white text-xl lg:text-3xl font-bold group-hover:translate-y-0 transition-all duration-300">
              {featuredNews.title}
            </h2>
            <p className="text-gray-300 mt-2 text-sm group-hover:translate-y-0 transition-all duration-500">
              {featuredNews.description}
            </p>
            <div className="flex items-center mt-4 group-hover:translate-y-0 transition-all duration-500">
              <div className="inline-block h-3 w-1 bg-red-600 mr-2"></div>
              <span className="text-gray-100 text-sm">{featuredNews.category}</span>
            </div>
          </div>
        </div>


        {/* Side News (40%) */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          {sideNews.map((news, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <div className="relative w-full h-44">
                <Image
                  src={news.image}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:from-black/80 transition-all duration-700 p-4 flex flex-col justify-end">
                <h3 className="text-white text-base font-semibold group-hover:translate-y-0 transition-all duration-300">
                  {news.title}
                </h3>
               
                <div className="flex items-center mt-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="inline-block h-3 w-1 bg-red-600 mr-2"></div>
                  <span className="text-gray-100 text-sm">{news.category}</span>
                </div>



              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
