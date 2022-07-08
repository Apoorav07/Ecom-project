import Home from './components/Home'
import Adminpage from './components/Adminpage'
import Login from './components/Login'
import Myorders from './components/Myorders'
import Order from './components/Order'
import Product from './components/Product'
import Products from './components/Products'
import Signup from './components/Signup'
import Navbar from './layout/Navbar'
import {Routes,Route} from 'react-router-dom'
import Privateroute from './routing/Privateroute'
import {Toaster} from 'react-hot-toast'
const App=()=> {
  return (
    <div >
      <div><Toaster/></div>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/signup' element= {<Signup/>}/>
        <Route path='/shop' element= {<Product/>}/>
        <Route path='/admin' element= {<Adminpage/>}/>
      </Routes>
    

    </div>
  );
}

export default App;
