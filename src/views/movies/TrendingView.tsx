import { ButtonGroup, ImageGrid, Pagination, LinkGroup } from '@/components';
import { getImageUrl, type ImageCell, type MovieRespsonse, TRENDING_ENDPOINT } from '@/core';
import { useTmdb } from '@/hooks';
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export const TrendingView = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const { mediaType } = useParams();
  const interval = searchParams.get('interval') || 'day';
  const movieType = mediaType === 'movies' ? 'movie' : 'tv';
  const { data } = useTmdb<MovieRespsonse>(`${TRENDING_ENDPOINT}/${movieType}/${interval}`, { page }, { movieType, interval, page });

  const gridData: ImageCell[] = (data?.results ?? []).map((result) => ({
    id: result.id,
    imageUrl: getImageUrl(result.poster_path),
    primaryText: result.original_title,
  }));

  useEffect(() => {
    setPage(1);
  }, [movieType, interval]);


  if (!data) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <section className="mx-auto max-w-7xl space-y-5 p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Trending</h1>
        <div className="flex gap-4">
          <LinkGroup
            options={[
              { label: 'Movies', to: `/trending/movies?interval=${interval}` },
              { label: 'TV', to: `/trending/tv?interval=${interval}` },
            ]}
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
      <ImageGrid images={gridData} onClick={(image) => navigate(`/${movieType}/${image.id}`)} />
      <Pagination page={page} maxPages={data.total_pages} onClick={setPage} />
    </section>
  );
};
