import Image from "next/image";
import Hero from "@/app/components/Hero";
import CustomizableSection from "@/app/components/CustomizableSection";
import ExclusiveInsights from "@/app/components/ExclusiveInsights";



export default function Home () {
const trendingNews = [
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "5 Tips to Save Money Booking Your Next Hotel Room",
    category: "Europe",
    description: "This is a wider card with supporting text below...",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "How to Improve Your Home Interior Design",
    category: "Interior",
    description: "Discover simple tips to enhance your living space.",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Top 5 Destinations for Budget Travelers",
    category: "Travel",
    description: "Explore beautiful destinations without breaking the bank.",
  },
];

const editorsPicks = [
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Top 10 Gadgets of 2025",
    category: "Tech",
    description: "Stay updated with the latest tech trends.",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Best Travel Destinations for 2025",
    category: "Travel",
    description: "Plan your next adventure with these destinations.",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Top Interior Design Trends of 2025",
    category: "Interior",
    description: "Elevate your living space with these trends.",
  },
];

  

const articles = [
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Exploring the Future of AI",
    category: "Tech",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Top Travel Destinations for 2025",
    category: "Travel",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Design Trends for Modern Homes",
    category: "Interior",
  },
  {
    image:
      "https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "The Rise of Electric Vehicles",
    category: "Auto",
  },
];




  return (
    <>
      <Hero />
      <CustomizableSection
        sectionTitle="Trending News"
        articles={trendingNews}
      />
      <CustomizableSection
        sectionTitle="Editor's Picks"
        articles={editorsPicks}
      />

      <ExclusiveInsights
        sectionTitle="Exclusive Insights"
        articles={articles}
      />
    </>
  );
}
