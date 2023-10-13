import { CrElMenu} from "./profile"
import{HederFunct} from "./heder"
import { Route,Routes,BrowserRouter } from "react-router-dom"
function CrMenu(){
    return(
      <nav class="bok">
          <HederFunct/>

        <div class="menu">
          <CrElMenu skl='home'text = 'Главная' foto='https://www.svgrepo.com/show/529027/home-1.svg'/>
          <CrElMenu skl='chat' text='Чаты' foto='https://www.svgrepo.com/show/529481/chat-round-dots.svg'/>
          <CrElMenu skl='' text='Контакты' foto='https://www.svgrepo.com/show/528849/archive.svg'/>
          <CrElMenu skl='' text='Оповещения' foto='https://www.svgrepo.com/show/528866/bell.svg'/>
          <CrElMenu skl='' text='Календарь' foto='https://www.svgrepo.com/show/529424/calendar-date.svg'/>
          <CrElMenu skl='setting' text='Настройки'  foto= 'https://www.svgrepo.com/show/500685/setting.svg'/>
        </div>
      </nav>

          // <BrowserRouter>
          // <Routes>
          //   <Route  element={<CrElMenu skl='home'text = 'Главная' foto='https://www.svgrepo.com/show/529027/home-1.svg'/>}/>
         
         
          // <Route  element={<CrElMenu skl='post' text='Чаты' foto='https://www.svgrepo.com/show/529481/chat-round-dots.svg'/>}/>
          // <Route  element={<CrElMenu skl='setting' text='Настройки' foto='https://www.svgrepo.com/show/500685/setting.svg'/>}/>
          // </Routes>
          // </BrowserRouter>
    )
  }

export{CrMenu}
