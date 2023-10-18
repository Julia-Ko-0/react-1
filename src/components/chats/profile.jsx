import { NavLink } from "react-router-dom"
import a from './dialog.module.css'
function CrElDialogName(props){
    return(
        <nav class={a.chat} >
            <div class={a.pfoto} >
                <img src={props.pfoto} />
                <NavLink class={a.nav} to={props.slk} >{props.name}</NavLink>
            </div>
            <div class={a.text_sms}>
                <h2>{props.text}</h2>
            </div>
           
        </nav>
    )
}
export{CrElDialogName}