import Image from "next/image";

const ExclusiveInsights = ({ sectionTitle, articles }) => {
  return (
    <section className="py-10 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-6 border-l-4 border-red-600 pl-4">
          <h2 className="text-2xl font-bold text-white">{sectionTitle}</h2>
          <p className="text-gray-400 mt-2">
            Discover the latest updates and curated stories in this section.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((news, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <div className="relative w-full h-60">
                <Image
                  src={news.image}
                  alt={news.title}
                  layout="fill"
                  objectFit="cover"
                  className="scale-100 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent group-hover:from-black/95 group-hover:via-black/70 transition-all duration-700 p-4 flex flex-col justify-end">
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

export default ExclusiveInsights;
