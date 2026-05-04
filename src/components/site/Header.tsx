import { LinkGroup } from '@/components';

export const Header = () => {
  return (
    <header className="border-b border-gray-700 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl space-y-2 p-5">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold">TMDB Explorer</h1>
          <LinkGroup
            options={[
              { label: 'Now Playing', to: '/movies/category/now_playing' },
              { label: 'TV', to: '/tv/category/airing_today' },
              { label: 'Trending', to: '/trending/movies?interval=day' },
              { label: 'Genre', to: '/genre/movies/action' },
            ]}
          />
        </div>
      </div>
    </header>
  );
};
