import SmallCard from "@/app/components/SmallCard";

const CustomizableSection = ({ sectionTitle, articles }) => {
  return (
    <section className="py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-10 border-l-4 border-red-600 pl-4">
          <h2 className="text-2xl font-bold">{sectionTitle}</h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, molestias.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <SmallCard
              key={index}
              image={article.image}
              title={article.title}
              category={article.category}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomizableSection;
