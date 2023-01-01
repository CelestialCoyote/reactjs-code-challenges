import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Page1 from './pages/Page1/Page1';
import Page2 from './pages/Page2/Page2';
import NoPage from './pages/NoPage/NoPage';


const App = () => {
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="page1" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </div>
    );
};


export default App;
