import React from "react";
import SmallCard from "./SmallCard";

interface PopularArticle {
  title: string;
  category: string;
  imageUrl: string;
  date: string;
}

interface MostPopularProps {
  sectionTitle: string;
}

const MostPopular: React.FC<MostPopularProps> = ({ sectionTitle }) => {
  const popularArticles: PopularArticle[] = [
    {
      title: "Global Economic Summit Addresses Climate Change Initiatives",
      category: "Economy",
      imageUrl: "https://images.unsplash.com/photo-1605792657660-596af9009e82",
      date: "October 16, 2023",
    },
    {
      title: "New Breakthrough in Quantum Computing Promises Faster Processing",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
      date: "October 15, 2023",
    },
    {
      title: "Space Tourism Company Announces First Commercial Flight Date",
      category: "Space",
      imageUrl: "https://images.unsplash.com/photo-1516849677043-ef67c9557e16",
      date: "October 14, 2023",
    },
    {
      title: "Revolutionary Healthcare AI System Approved for Clinical Use",
      category: "Health",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      date: "October 13, 2023",
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">{sectionTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularArticles.map((article, index) => (
            <SmallCard
              key={index}
              title={article.title}
              category={article.category}
              imageUrl={article.imageUrl}
              date={article.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostPopular;