// SplashScreen.js
import React, { useEffect, useState } from "react";
import "./SplashScreen.css"; // Import CSS for the splash screen

const SplashScreen = ({ onAnimationEnd }) => {
  // Run the splash animation and call onAnimationEnd after completion
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd(); // Notify parent when animation ends
    }, 6000); // Set splash screen duration (3 seconds)
    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-screen">
      <div className="logo">
        <h1>LoopzCoder</h1>
        <p>Welcome to the Developer's Hub</p>
      </div>
    </div>
  );
};

export default SplashScreen;
