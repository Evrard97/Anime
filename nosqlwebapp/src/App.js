import { Routes, Route } from 'react-router-dom';
import Form from './pages/Home/Form';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crud" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
