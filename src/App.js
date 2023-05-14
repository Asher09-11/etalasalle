import './App.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from './pages/Home';
import LoginForm from './pages/login';
import AdminPage from './pages/admin';
import ProductListAksesorisAdmin from './pages/adminaksesoris';
import HomePage from './pages/Categories';
import Jual from './pages/Jual';
import Makanan from './pages/Makanan';
import Aksesoris from './pages/Aksesoris';
import Lainnya from './pages/Lainnya';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/jual' element={<Jual />}></Route>
          <Route path='/categories' element={<HomePage />}></Route>
          <Route path='/adminlogin' element={<LoginForm/>}> </Route>
          <Route path='/admin' element={<AdminPage/>}> </Route>
          <Route path="/admin/viewaksesoris" element={<ProductListAksesorisAdmin />} />
          <Route path='/makanan' element={<Makanan />}></Route>
          <Route path='/aksesoris' element={<Aksesoris />}></Route>
          <Route path='/lainnya' element={<Lainnya />}></Route>
        </Routes>
    </div>
  );
}

export default App;
