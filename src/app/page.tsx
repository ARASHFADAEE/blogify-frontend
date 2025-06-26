import TrendingNews from './home/TrendingNews';
import HeroSection from './home/HeroSection';
import MainContent from './home/MainContent';
import Newsletter from './home/Newsletter';

const Home = () => (
  <>
    {/* **************** MAIN CONTENT START **************** */}
    <main>
      {/* Trending News Section */}
      <TrendingNews />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Section */}
      <MainContent />
      
      {/* Newsletter Section */}
      <Newsletter />
    </main>
    {/* **************** MAIN CONTENT END **************** */}
  </>
);

export default Home;