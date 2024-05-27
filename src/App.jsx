import { useState } from 'react'
import './App.css'
import SignIn from './components/Auth/SignIn'
import AdminDashboard from './components/Dashboard/Admin/Dashboard';
import Home from './components/Dashboard/Admin/home';
import ParentDashboard from './components/Dashboard/Parent/dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated')
  );

  const handleLogout = () => {
    // Clear authentication status from local storage
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated === "admin" ? (
        <AdminDashboard />
      ) : isAuthenticated === "parent" ? (
        <ParentDashboard />
      ) : (
        <SignIn />
      )}
    </div>
  )
}

export default App
