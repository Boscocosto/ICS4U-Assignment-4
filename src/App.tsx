import { MainLayout } from '@/MainLayout';
import { CreditsView, ErrorView, HomeView, MovieView, NowPlayingView, ReviewsView, SearchView, TrendingView } from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route element={<MainLayout />}>
                <Route path="/movies" element={<MovieView />}>
                    <Route path="category/now_playing" element={<NowPlayingView />} />
                    <Route path="category/popular" element={<ReviewsView />} />
                    <Route path="category/top_rated" element={<ReviewsView />} />
                    <Route path="category/upcoming" element={<ReviewsView />} />
                </Route>
                <Route path="/tv" element={<MovieView />}>
                    <Route path="category/airing_today" element={<CreditsView />} />
                    <Route path="category/on_the_air" element={<ReviewsView />} />
                    <Route path="category/popular" element={<ReviewsView />} />
                    <Route path="category/top_rated" element={<ReviewsView />} />
                </Route>
                <Route path="/trending" element={<MovieView />}>
                    <Route path="movies" element={<CreditsView />} />
                    <Route path="tv" element={<ReviewsView />} />
                </Route>
                <Route path="/genre" element={<MovieView />}>
                    <Route path="movies" element={<CreditsView />} >
                        <Route path="action" element={<CreditsView />} />
                        <Route path="adventure" element={<ReviewsView />} />
                        <Route path="animation" element={<ReviewsView />} />
                        <Route path="family" element={<ReviewsView />} />
                    </Route>
                    <Route path="tv" element={<ReviewsView />} >
                        <Route path="action" element={<CreditsView />} />
                        <Route path="animation" element={<ReviewsView />} />
                        <Route path="comedy" element={<ReviewsView />} />
                        <Route path="family" element={<ReviewsView />} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<ErrorView />} />
        </Routes>
    );
};