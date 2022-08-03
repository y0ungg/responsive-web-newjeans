import './index.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Intro from './pages/Intro';

function App() {

  return (
    <div id="root" className="App">
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Intro />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
