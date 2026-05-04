import { ButtonGroup, ImageGrid, Pagination } from '@/components';
import { getImageUrl, type ImageCell, type MovieRespsonse, TRENDING_ENDPOINT } from '@/core';
import { useTmdb } from '@/hooks';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const TrendingView = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const mediaType = searchParams.get('type') || 'movies';
  const interval = searchParams.get('interval') || 'day';
  const tmdbType = mediaType === 'movies' ? 'movie' : 'tv';
  const { data } = useTmdb<MovieRespsonse>(`${TRENDING_ENDPOINT}/${tmdbType}/${interval}`, { page, time_window: interval });

  const gridData: ImageCell[] = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.original_title,
  }));

  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <div className="mb-4 flex items-center justify-between flex-wrap gap-4">
        <h1 className="text-3xl font-bold">Trending</h1>
        <div className="flex gap-4">
          <ButtonGroup
            value={mediaType}
            options={[
              { label: 'Movies', value: 'movies' },
              { label: 'TV Shows', value: 'tv' },
            ]}
            onClick={(value) => setSearchParams({ type: value })}
          />
          <ButtonGroup
            value={interval}
            options={[
              { label: 'Today', value: 'day' },
              { label: 'Week', value: 'week' },
            ]}
            onClick={(value) => setSearchParams({ interval: value })}
          />
        </div>
      </div>
      <ImageGrid images={gridData} onClick={(image) => navigate(`/${tmdbType}/${image.id}`)} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
