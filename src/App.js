import React, { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Loader = () => <div className="App">Loading ....</div>;

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
        <Header />
          <div className="main-section"> </div>
        <Footer />
    </Suspense>
  );
}
