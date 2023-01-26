import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Aside from './Components/Aside/Aside';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import AddPhysiotherapy from './Components/Physiotherapy/AddPhysiotherapy';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Aside></Aside>
      
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/add-physio" element={<AddPhysiotherapy />}></Route>
        {/* <Route path="/dashboard" element={<DashBoard />}></Route> */}

         
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
