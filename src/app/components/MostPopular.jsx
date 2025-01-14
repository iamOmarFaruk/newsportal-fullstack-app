import Image from "next/image";

const MostPopular = ({ sectionTitle }) => {
  const featuredNews = {
    title: "Amazon Shoppers Are Ditching Designer Belts For This Best-Selling",
    category: "Europe",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  };

  const mostPopular = [
    {
      title: "Why the world would end without political polls",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Meet The Man Who Designed The Ducati Monster",
      image: "https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "2020 Audi R8 Spyder spy shots release",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Lamborghini makes Huracán GT3 racer faster for 2019",
      image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "ZF plans $14 billion autonomous vehicle push, concept van",
      image: "https://images.pexels.com/photos/5025667/pexels-photo-5025667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  return (
    <section className="py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-10 gap-6">
        {/* Featured News (30%) */}
        <div className="relative col-span-4 rounded-lg overflow-hidden group bg-black">
          <div className="relative w-full h-full lg:h-96 ">
            <Image
              src={featuredNews.image}
              alt={featuredNews.title}
              layout="fill" // Ensures the image fills the container
              objectFit="cover" // Keeps the image proportional while covering the entire container
              className="group-hover:scale-110 transition-transform duration-500 bg-black"
            />
          </div>

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


        {/* Most Popular List (70%) */}
        <div className="col-span-6 bg-white p-4 rounded-lg shadow">
          <div className="mb-10 border-l-4 border-red-600 pl-4">
            <h2 className="text-2xl font-bold">{sectionTitle}</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, molestias.
            </p>
          </div>
          <ul className="space-y-4">
            {mostPopular.map((news, index) => (
              <li
                key={index}
                className="flex items-center space-x-4 p-3 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{news.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MostPopular;
