import { BrowserRouter, Routes, Route } from 'react-router-dom';
import P1 from './ch/P1';
import P2 from './ch/P2';
import P3 from './ch/P3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<P1 />} />
        <Route path="/P2" element={<P2 />} />
        <Route path="/P3" element={<P3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
