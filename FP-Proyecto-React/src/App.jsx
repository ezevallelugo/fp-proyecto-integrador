import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthUtils/AuthContext';
import PrivateRoute from './AuthUtils/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Catalogo from './pages/Catalogo';
import Productos from './pages/Productos';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

export default function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalog" element={<Catalogo />} />
            <Route path="/products/:id?" element={<Productos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/get-started" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<PrivateRoute>  <Profile /> </PrivateRoute>} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>

  );
}
