import { CrElMenu} from "./profile"
import{HederFunct} from "./heder"
function CrMenu(){
    return(
      <div>
        <HederFunct/>
      <div class="menu">
        <CrElMenu text = 'Меню'/>
        <CrElMenu text='Контакты'/>
        <CrElMenu text='Настройки'/>
      </div>
      </div>
      
    )
  }

export{CrMenu}
