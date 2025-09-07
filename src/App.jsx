import Navbar from './components/Navbar/Navbar';
import { Route, Routes, useLocation} from 'react-router-dom'
import Home from './Pages/Home';



const App = () => {


  const isOwnerPath = useLocation().pathname.includes("owner");
  return (

    <div>
     { !isOwnerPath &&  <Navbar/>} 

     <div className='min-h-[70vh]'>
       <Routes>
        <Route path='/' element={<Home></Home>} />
       </Routes>
     </div>
    </div>

  );
};

export default App;