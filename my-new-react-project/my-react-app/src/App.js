import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import "./styles/main.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Contacts from "./pages/Contacs";
import Projects from "./pages/Projects";
import NewProject from "./pages/NewProject";
import Home from "./pages/Home";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
        <Router>
            <ScrollToTop/>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/project/:id" element={<NewProject/>}/>
            </Routes>
            <Footer/>
        </Router>

    </div>
  );
}

export default App;
