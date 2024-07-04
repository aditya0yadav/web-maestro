import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingSpinner from './Loading'; // Replace 'LoadingPage' with your actual loading component

function Layout() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for demonstration (remove this in actual implementation)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate 2 seconds loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isLoading && <Navbar />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
      {!isLoading && <Footer />}
    </>
  );
}

export default Layout;
