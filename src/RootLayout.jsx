import React from 'react';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      {/* Add layout elements like nav here if needed */}
      <Outlet /> {/* ✅ This is where nested routes get rendered */}
    </div>
  );
}

export default RootLayout;
