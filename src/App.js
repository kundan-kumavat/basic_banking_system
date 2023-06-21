import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllCustomers from './components/AllCustomers';
import Transactions from './components/Transactions';
import TransferFunds from './components/TransferFunds';

function App() {
  return (
    <BrowserRouter>
     <div className='md:mx-[5rem] mx-[1rem] md:my-[1.5rem] my-[1rem]'>
       <Navbar />
       <Routes>
        <Route exact path='/' Component={Home}></Route>
        <Route exact path='/allCustomers' Component={AllCustomers}></Route>
        <Route exact path='/transactions' Component={Transactions}></Route>
        <Route exact path='/tranferFunds' Component={TransferFunds}></Route>
       </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
