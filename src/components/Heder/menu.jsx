import { CrElMenu} from "./profile"
import{HederFunct} from "./heder"
function CrMenu(){
    return(
      <div class="bok">
          <HederFunct/>
        <div class="menu">
          <CrElMenu slk='home'text = 'Главная' />
          <CrElMenu slk='post' text='Контакты'/>
          <CrElMenu slk='setting' text='Настройки'/>
        </div>
      </div>
      
    )
  }

export{CrMenu}
