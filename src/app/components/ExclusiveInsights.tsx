import React from "react";
import Image from "next/image";

interface Article {
  title: string;
  category: string;
  image: string;  // Changed from imageUrl to match page.tsx interface
}

interface ExclusiveInsightsProps {
  sectionTitle: string;
  articles: Article[];
}

const ExclusiveInsights: React.FC<ExclusiveInsightsProps> = ({ sectionTitle, articles }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src={article.image}  // Changed from imageUrl to image
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-semibold text-red-600 mb-2 block">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold mb-2">
                  <a href="#" className="hover:text-red-600 transition-colors">
                    {article.title}
                  </a>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveInsights;