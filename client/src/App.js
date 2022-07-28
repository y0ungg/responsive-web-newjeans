import './index.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Footer from './component/Footer';
import axios from 'axios';

// 모든 요청에 withCredentials = true로 설정
axios.defaults.withCredentials = true;

function App() {

  return (
    <div id="root" className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
