
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import KnowledgeMap from './pages/KnowledgeMap';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 pl-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/knowledge-map" element={<KnowledgeMap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster />
        </main>
      </div>
    </Router>
  );
}

export default App;
