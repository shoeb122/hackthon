import React from "react";
import FeaturedProductComponent from "@/components/FeaturedProductComponent";
import ChairGallery from "@/components/GalleryComponent";
import LastHome from "@/components/LastHomeComponent";
import Logos from "@/components/logo";
import FurnitureCollection from "@/components/section1";
import TopCategories from "@/components/TopCategoryComponent";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-36 flex flex-col gap-12">
      {/* Furniture Collection Section */}
      <section aria-labelledby="furniture-collection">
        <h2 id="furniture-collection" className="sr-only">
          Furniture Collection
        </h2>
        <FurnitureCollection />
      </section>

      {/* Logos Section */}
      <section aria-labelledby="logos-section">
        <h2 id="logos-section" className="sr-only">
          Partner Logos
        </h2>
        <Logos />
      </section>

      {/* Featured Products */}
      <section className="mt-12" aria-labelledby="featured-products">
        <h2
          id="featured-products"
          className="text-2xl md:text-4xl font-semibold mb-6 text-center"
        >
          Featured Products
        </h2>
        <FeaturedProductComponent />
      </section>

      {/* Top Categories */}
      <section className="mt-12" aria-labelledby="top-categories">
        <h2 id="top-categories" className="sr-only">
          Top Categories
        </h2>
        <TopCategories />
      </section>

      {/* Chair Gallery */}
      <section className="mt-12" aria-labelledby="chair-gallery">
        <h2 id="chair-gallery" className="sr-only">
          Chair Gallery
        </h2>
        <ChairGallery />
      </section>

      {/* Our Products Section */}
      <section className="mt-12" aria-labelledby="our-products">
        <h2
          id="our-products"
          className="text-2xl md:text-4xl font-semibold text-center"
        >
          Our Products
        </h2>
        <LastHome />
      </section>
    </div>
  );
};

export default Home;
