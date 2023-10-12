
import './App.css';

import { CrMenu } from './components/Heder/menu';
import { CrPost } from './components/Heder/post';
import { CrDialogs } from './components/Heder/dialog';

function App() {
  return (
    <div className="app">
      {/* <HederFunct/> */}
      <div class='block'>
        <CrMenu/>
        {/* <CrPost/> */}
        <CrDialogs/>
      </div>
       

    </div>
  );
}


export default App;
