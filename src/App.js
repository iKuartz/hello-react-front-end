import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './components/greetings';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exct path="/" element={<Home />} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
