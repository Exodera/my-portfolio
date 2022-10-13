import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Header from './components/Header/Header';
import "./App.css"



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/Projects' element = {<Projects/>}/>
          <Route path='/Experience' element = {<Experience/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;