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
// function CrSms(props){
//     let url = new URLSearchParams(window.location.search).get("id")
//     if(props.ids == url){
//         return(
//             <div class={a.smChat}>
//             {/* <CrPolsName name="name" sost="sostoan"/> */}
//             <div class={a.sms}>
//                         <img src={props.imgs}/>
//                         <div class={a.smsSm}>
//                             <h2>{props.smsText}</h2>
//                         </div>
                        
//                     </div>
//             </div>
                  
//             )
//     }
   
// }
function CrSms(props){
    console.log('aaaaaa')
    let url = new URLSearchParams(window.location.search).get("id")
    
    if(url == props.ids){
        return(
            <div class={a.smChat}>
            <CrPolsName name="name" sost="sostoan"/>
            {/* {
                props.smsText.map(chat=>(
                    <ModalEl sms={chat.s} kto={chat.k}/>
                ))
            } */}
         
               </div>   
            )
    }
       
    
   
}

function ModalEl(props){

    return(
        <div class={a.sms}>
        <img src={props.imgs}/>
        <div class={a.smsSm}>
            <h2>{props.s}</h2>
        </div>
        
    </div>

    )
 
}

export{CrElDialogName,CrSms,CrPolsName,ModalEl}