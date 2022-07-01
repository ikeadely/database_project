import './App.css';
import MembuatTulisan from './Component/Latihan/MembuatTulisan';
// import Get from './Get';
import Halaman from './Component/Latihan/Halaman';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
  <div>
    <Router>
    <Routes>
    <Route path='/' element={<Halaman/>}/>
    <Route path='/anya' element={<MembuatTulisan/>}/>


    </Routes>
    </Router>
    
   

  </div>
  );
}

export default App;