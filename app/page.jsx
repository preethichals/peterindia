import React from "react";
import Header from "./components/Header";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Technical from "./components/Technical";
import Tech from "./components/Tech";


function HomePage() {
  return (
    <>
      <Header />
      <Banner />
      <Books />
          <Tech />
      <Technical />
     
      <Footer />

    
    </>
  );
}

export default HomePage;
