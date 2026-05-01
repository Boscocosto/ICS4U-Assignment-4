import { MainLayout } from '@/MainLayout';
import { CreditsView, ErrorView, HomeView, MovieView, NowPlayingView, ReviewsView, GenreView, TrendingView } from '@/views';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route element={<MainLayout />}>
                <Route path="/movies" element={<MovieView />}>
                    <Route path="category/now_playing" element={<NowPlayingView />} />
                    <Route path="category/popular" element={<CreditsView />} />
                    <Route path="category/top_rated" element={<CreditsView />} />
                    <Route path="category/upcoming" element={<CreditsView />} />
                </Route>
                <Route path="/tv" element={<MovieView />}>
                    <Route path="category/airing_today" element={<CreditsView />} />
                    <Route path="category/on_the_air" element={<CreditsView />} />
                    <Route path="category/popular" element={<CreditsView />} />
                    <Route path="category/top_rated" element={<CreditsView />} />
                </Route>
                <Route path="/trending" element={<TrendingView />}>
                    <Route path="movies" element={<CreditsView />} />
                    <Route path="tv" element={<CreditsView />} />
                </Route>
                <Route path="/genre" element={<GenreView />}>
                    <Route path="movies" element={<CreditsView />} >
                        <Route path="action" element={<CreditsView />} />
                        <Route path="adventure" element={<CreditsView />} />
                        <Route path="animation" element={<CreditsView />} />
                        <Route path="family" element={<CreditsView />} />
                    </Route>
                    <Route path="tv" element={<CreditsView />} >
                        <Route path="action" element={<CreditsView />} />
                        <Route path="animation" element={<CreditsView />} />
                        <Route path="comedy" element={<CreditsView />} />
                        <Route path="family" element={<CreditsView />} />
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<ErrorView />} />
        </Routes>
    );
};