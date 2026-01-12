
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './contexts/AppContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Terminal from './pages/Terminal';
import AutoBot from './pages/AutoBot';
import Analytics from './pages/Analytics';
import Academy from './pages/Academy';
import Login from './pages/Login';
import Toast from './components/ui/Toast';

const App: React.FC = () => {
  return (
    <AppProvider>
      <MainApp />
    </AppProvider>
  );
};

const MainApp: React.FC = () => {
  const { theme, isAuthenticated, toast } = useAppContext();

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/*" element={isAuthenticated ? <ProtectedRoutes /> : <Navigate to="/login" />} />
      </Routes>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  );
};

const ProtectedRoutes: React.FC = () => (
  <Layout>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/terminal" element={<Terminal />} />
      <Route path="/auto-bot" element={<AutoBot />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  </Layout>
);


export default App;
