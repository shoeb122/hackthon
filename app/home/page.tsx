import React from "react";
import FeaturedProductComponent from "@/components/FeaturedProductComponent";
import ChairGallery from "@/components/GalleryComponent";
import LastHome from "@/components/LastHomeComponent";
import Logos from "@/components/logo";
import FurnitureCollection from "@/components/section1";
import TopCategories from "@/components/TopCategoryComponent";

const Home: React.FC = () => {
  return (
    <div className="px-4 md:px-16 lg:px-36 flex flex-col gap-12">
      {/* Furniture Collection Section */}
      <FurnitureCollection />

      {/* Logos Section */}
      <Logos />

      {/* Featured Products */}
      <section className="mt-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 text-center">
          Featured Products
        </h1>
        <FeaturedProductComponent />
      </section>

      {/* Top Categories */}
      <section className="mt-12">
        <TopCategories />
      </section>

      {/* Chair Gallery */}
      <section className="mt-12">
        <ChairGallery />
      </section>

      {/* Our Products Section */}
      <section className="mt-12">
        <h1 className="text-2xl md:text-4xl font-semibold text-center">
          Our Products
        </h1>
        <LastHome />
      </section>
    </div>
  );
};

export default Home;
