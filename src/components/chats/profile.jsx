import { NavLink } from "react-router-dom"
import a from './dialog.module.css'
import {Mas} from './masDial'

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
function CrPolsName(props){
return(
    <div class={a.chZagl}>
        <img src={props.img}/>
        <div class={a.inf}>
            <h2 >{props.name}</h2>
            <h3>{props.sost}</h3>
        </div>

    </div>
)
}
function CrSms(props){
    return(

        <div class={a.sms}>
            <img src={props.imgs}/>
            <div class={a.smsSm}>
                <h2>{props.smsText}</h2>
            </div>
            
        </div>
)
}
function ModalEl(){
    // let md = document.getElementById('msOkn')
    // md.
}

export{CrElDialogName,CrSms,CrPolsName,ModalEl}