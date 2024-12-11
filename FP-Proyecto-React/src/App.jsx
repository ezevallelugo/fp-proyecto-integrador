import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthUtils/AuthContext';
import PrivateRoute from './AuthUtils/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';

export default function App() {

  return (

    <BrowserRouter>
      <AuthProvider>
        <div className="main-container">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/get-started" element={<Login />} />
            <Route path="/profile" element={<PrivateRoute>  <Profile /> </PrivateRoute>} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>

  );
}
