import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
