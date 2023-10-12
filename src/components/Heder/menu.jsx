import { CrElMenu} from "./profile"
import{HederFunct} from "./heder"
function CrMenu(){
    return(
      <div class="bok">
          <HederFunct/>
        <div class="menu">
          <CrElMenu slk='home'text = 'Главная' />
          <CrElMenu slk='kont' text='Контакты'/>
          <CrElMenu slk='home' text='Настройки'/>
        </div>
      </div>
      
    )
  }

export{CrMenu}
