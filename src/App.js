import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Challenge1 from './pages/Challenge1/Challenge1';
import Challenge2 from './pages/Challenge2/Challenge2';
import Challenge3 from './pages/Challenge3/Challenge3';
import Challenge4 from './pages/Challenge4/Challenge4';
import Challenge5 from './pages/Challenge5/Challenge5';
import NoPage from './pages/NoPage/NoPage';


const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="challenge1" element={<Challenge1 />} />
                <Route path="challenge2" element={<Challenge2 />} />
                <Route path="challenge3" element={<Challenge3 />} />
                <Route path="challenge4" element={<Challenge4 />} />
                <Route path="challenge5" element={<Challenge5 />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
};


export default App;
