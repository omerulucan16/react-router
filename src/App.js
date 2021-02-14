import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Partials/_header";
import Footer from "./Components/Partials/_footer";
import AboutUs from "./Components/AboutUs";
import Home from "./Components/Home";
function App() {
  return (
    <div>
      <Header />
      <Route path="/about-us" exact component={AboutUs} />
      <Route path="/" exact component={Home} />
      <Route path="/home/:param?" exact component={Home} />
      <Footer />
    </div>
  );
}

export default App;
