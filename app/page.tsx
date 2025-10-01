import Header from '@/components/Header';
import BlogFeed from '@/components/BlogFeed';
import DarkModeToggle from '@/components/DarkModeToggle';
import HomepageTopAd from '@/components/ads/HomepageTopAd';
import MobileStickyAd from '@/components/ads/MobileStickyAd';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <DarkModeToggle />
      <Header />
      <HomepageTopAd />
      <BlogFeed />
      <MobileStickyAd />
    </main>
  );
}
