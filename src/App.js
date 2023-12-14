
import './App.css';

import { CrMenu } from './components/Heder/menu';
import { CrPost } from './components/home/post';
import { CrDialogs } from './components/chats/dialog';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { CrDialog } from './components/Heder/profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <CrMenu/>
        
        <div class='block'>
          <Routes>
            <Route path='/home' element={<CrPost/>}/>
            <Route path='chat/*' element={<CrDialogs/>}/>
          </Routes>
        </div>
    
      </div>

   </BrowserRouter>
    
  );
}


export default App;
