
import { Home } from './pages/Home';
import RetailServices from './pages/RetailServices';
import Blog from './pages/Blogs';
import Article from './pages/Article';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'; // Import your new Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="retail-services" element={<RetailServices />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blogs/:slug" element={<Article />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;