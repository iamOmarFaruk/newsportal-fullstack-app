import React from "react";
import Image from "next/image";

interface Article {
  image: string;
  title: string;
  category: string;
  description?: string;
}

interface CustomizableSectionProps {
  sectionTitle: string;
  articles: Article[];
}

const CustomizableSection: React.FC<CustomizableSectionProps> = ({ sectionTitle, articles }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{sectionTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-semibold text-red-600 mb-1 block">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold mb-2">
                <a href="#" className="hover:text-red-600 transition-colors">
                  {article.title}
                </a>
              </h3>
              {article.description && (
                <p className="text-gray-600 text-sm">{article.description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CustomizableSection;