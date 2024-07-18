import Home from "./Pages/Home/Home";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Services from "./Pages/Services/Services";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route  path="/services"><Services/></Route>
          <Route  path="/contact"><Contact/></Route>
          <Route  path="/resume"><Resume/></Route>
        </Switch><Footer/>
      </Router>
    </div>
  );
}

export default App;
