
import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Header from './components/Header';



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
      </Router>
    </div>
  );
}
export default App;