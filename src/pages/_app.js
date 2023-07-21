
import Navbar from "@/components/Nav/Navbar";
import React from "react";
import "@/styles/global.css";

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Navbar />
      
      <div className="background-container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
