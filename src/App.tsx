import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Docs } from './pages/Docs';
import { Explore } from './pages/Explore';
import { PromptDetails } from './pages/PromptDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="prompt/:username/:promptName" element={<PromptDetails />} />
        <Route path="docs/*" element={<Docs />} />
      </Route>
    </Routes>
  );
}

export default App;
