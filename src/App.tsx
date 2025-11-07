
import { Home } from './pages/Home';
import RetailServices from './pages/RetailServices';
import Blog from './pages/Blogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout'; // Import your new Layout

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="retail-services" element={<RetailServices />} />
          <Route path="blogs" element={<Blog />} /> {/* <-- ADD THIS LINE */}
          {/* We'll add dynamic blog posts later */}
          {/* <Route path="blog/:slug" element={<BlogPostPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;