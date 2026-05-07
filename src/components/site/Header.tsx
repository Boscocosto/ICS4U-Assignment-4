import { Link, ButtonGroup, SearchBar } from '@/components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [type, setType] = useState<string>('movie');

  return (
    <header>
      <nav className="flex items-center gap-6 overflow-x-auto bg-gray-800 p-4 whitespace-nowrap">
        <h1 className="text-2xl font-bold text-white">TMDB Explorer</h1>
        <div className="flex items-center gap-4">
          <Link to="/movies/category/now_playing" match={['/movies/category/:category']}>Movies</Link>
          <Link to="/tv/category/airing_today" match={['/tv/category/:category']}>TV</Link>
          <Link to="/trending/movies" match={['/trending/:category']}>Trending</Link>
          <Link to="/genre/movie/action" match={['/genre/:mediaType/:genre']}>Genre</Link>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <SearchBar
            value={query}
            onChange={(query) => {
              setQuery(query);
              navigate(`/search?q=${query}&type=${type}`);
            }}
          />
          <ButtonGroup
            value={type}
            options={[
              { label: "Movies", value: "movie" },
              { label: "TV", value: "tv" },
              { label: "People", value: "person" },
            ]}
            onClick={(newType) => {
              setType(newType);
              navigate(`/search?q=${query}&type=${newType}`);
            }}
          />
        </div>
      </nav>
    </header >
  );
};
