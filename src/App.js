

// import './App.css';
import {Routes,Route} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Details from './Pages/Details';
import Footer from './components/Footer';
import NotFound from "./Pages/NotFound"
function App() {
  return (
  <main>
    
    <Nav/>
    
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
   </main>
  );
}

export default App;
