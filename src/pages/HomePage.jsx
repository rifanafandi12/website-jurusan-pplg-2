// src/pages/HomePage.jsx
import VideoHero from '../components/VideoHero';
import HomeIntro from '../components/HomeIntro';
import HomeHighlight from '../components/HomeHighlight';
import MemoryCarousel from '../components/MemoryCarousel';

export default function HomePage() {
  return (
    <>
      <VideoHero />
      <HomeIntro />
      <HomeHighlight />
      <div id="kenangan">
        <MemoryCarousel />
      </div>
    </>
  );
}
