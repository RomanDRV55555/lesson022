import './App.css';
import { Route, Routes, HashRouter, Navigate } from 'react-router-dom';

import PostsPage from './pages/Posts.page';
import EditPage from './pages/Edit.page';
import NotFoundPage from './pages/NotFound.page'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to='/posts' />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
