import { BrowserRouter } from "react-router-dom";
import Collection from "./components/Collection";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Features from "./components/Features";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Hero />
        <Collection />
        <Features />
        <Popular />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
