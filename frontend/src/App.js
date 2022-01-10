import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Navbar from "./components/Navbar";
import SideDrawer from "./components/SideDrawer";
import Backdrop from "./components/Backdrop";

// Screens
import HomeScreen from "./screens/HomeScreen";
import TripScreen from "./screens/TripScreen";
import CartScreen from "./screens/CartScreen";
import Contact from './screens/ContactUsScreen';
import ImageGallery from './screens/GalleryScreen';
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
     <main className="app">
        <Switch>
        
        <Route path="/Gallery" component={ImageGallery} />
          <Route path="/ContactUs" component={Contact} />
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/trip/:id" component={TripScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch> 
        
      </main>
      
    </Router>
  );
}

export default App;
