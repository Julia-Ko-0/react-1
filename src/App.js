
import './App.css';

import { CrMenu } from './components/Heder/menu';
import { CrPost } from './components/home/post';
import { CrDialogs } from './components/chats/dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
    // <div className="app">
    //   {/* <HederFunct/> */}
    //   <CrMenu/>
    //   <div class='block'>
    //     {/* <CrDialogs/> */}
    //     <CrPost/>       
    //   </div>
       

    // </div>



       <div className="app">
    <CrMenu/>
    <div class='block'>
     {/* <CrDialogs/> */}
    <BrowserRouter>
    <Routes>
  
    
    
      <Route path='/home' element={<CrPost/>}/>
     <Route path='/post' element={<CrDialogs/>}/>
    
    
    </Routes>
  </BrowserRouter>
  </div>
   </div>


    
  );
}


export default App;
