import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Shop from "./components/shop";
import Contact from "./components/contact";
import Offer from "./components/offer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <div className="h-full min-h-full">
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/home" Component={Home}/>
          <Route path="/shop" Component={Shop}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/offers" Component={Offer}/>
          <Route path="/login" Component={Login}/>
          <Route path="/signUp" Component={Signup}/>
          <Route path="/*" Component={Home}/>
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;