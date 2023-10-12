import { CrPostEl } from "../Heder/profile"
import a from './post.module.css'

function CrPost(){
    return(
        <div class = 'dialogs'>
            <div class='zagolChat'>
                <h1 >Главная</h1>
            </div>
       
            <div class={a.post}>
                <input></input> 
                <button>Выложить</button>
                
            </div>
            <div>
                <CrPostEl text='dfsfd'/>
                <CrPostEl text='sdvsfvsf'/>
            </div>
     </div>
    )
}
export{CrPost}