import { NavLink } from "react-router-dom"
import a from './dialog.module.css'
import { useState } from "react"
// import {Mas} from './masDial'

function CrElDialogName(props){
    return(
        <div class={a.chat} >
            <div class={a.pfoto} >
                <img src={props.ids.img} />
                <h1 onClick={()=>{props.upt(props.ids)}} class={a.nav}  >{props.ids.name}</h1>
            </div>
            <div class={a.text_sms}>
                <h2>{props.ids.sms[props.ids.sms.length - 1].s}</h2>
                {props.ids.sms[props.ids.sms.length - 1].f_t == 'f' &&
                        <div class={a.fales}>
                    
                        <svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="_x33_6-file"><g><path d="m25.7 10.3-8-8c-.2-.2-.4-.3-.7-.3h-10c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-18c0-.3-.1-.5-.3-.7z" fill="#2A8BF2"></path><path d="m25.7 10.3-8-8c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v8c0 .6.4 1 1 1h8c.4 0 .8-.2.9-.6.2-.4.1-.8-.2-1.1z" fill="#65a2fc"></path></g></g></svg>
                       <h1>Files</h1>
                   </div>                
                }
                    {props.ids.sms[props.ids.sms.length - 1].f_t == 'p' &&
                        <div class={a.photo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="#FF3366" stroke-width="2"></path> <path d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022" stroke="#FF3366" stroke-width="2" stroke-linecap="round"></path> <path d="M21 13.6702C18.9068 12.0667 17.4778 12.2919 15.198 14.3459" stroke="#FF3366" stroke-width="2" stroke-linecap="round"></path> <path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" stroke="#FF3366" stroke-width="2"></path> </g></svg>     
                       <h1>Photo</h1>
                       </div>              
                }
            
            
            </div>
           
        </div>
    )
}
function CrPolsName(props){
    console.log(props.mas)
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
//    console.log(props.mas)
//    console.log(props.mas.sms[0].s)
 return(
               
                <CrPolsName mas ={props.mas.sms} name={props.mas.name} sost="sostoan"/>
                  
                )

}

function ModalEl(props){
    console.log(props.mas)
    
    return(
        <div>
            {
                props.mas.map(m=>(
                <CrS k={m.k} s={m.s} t={m.f_t} n={m.f_n}/>
                ))
            }
                   
           
        </div>
       

    )
 
}
function CrS(props){
    console.log(props.t)
    if(props.k == 'm'){
        return(
            <div class={a.smsYou}>
            
                <div class={a.smsMe}>
                    <h2>{props.s}</h2>
                    {props.t == 'f' && 
                     <div class={a.fales}>
                    
                     <svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="_x33_6-file"><g><path d="m25.7 10.3-8-8c-.2-.2-.4-.3-.7-.3h-10c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-18c0-.3-.1-.5-.3-.7z" fill="#2A8BF2"></path><path d="m25.7 10.3-8-8c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v8c0 .6.4 1 1 1h8c.4 0 .8-.2.9-.6.2-.4.1-.8-.2-1.1z" fill="#65a2fc"></path></g></g></svg>
                    <h1>Files</h1>
                </div> 
                    }
                      {props.t == 'p' &&
                        <div class={a.photo}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8.976C3 4.05476 4.05476 3 8.976 3H15.024C19.9452 3 21 4.05476 21 8.976V15.024C21 19.9452 19.9452 21 15.024 21H8.976C4.05476 21 3 19.9452 3 15.024V8.976Z" stroke="#FF3366" stroke-width="2"></path> <path d="M17.0045 16.5022L12.7279 12.2256C9.24808 8.74578 7.75642 8.74578 4.27658 12.2256L3 13.5022" stroke="#FF3366" stroke-width="2" stroke-linecap="round"></path> <path d="M21 13.6702C18.9068 12.0667 17.4778 12.2919 15.198 14.3459" stroke="#FF3366" stroke-width="2" stroke-linecap="round"></path> <path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8Z" stroke="#FF3366" stroke-width="2"></path> </g></svg>     
                       <h1>Photo</h1>
                       </div>              
                }
                </div>
        </div>
        )
    }
    else{
         return(
        <div class={a.smsMeDiv}>
        <img class={a.imgs} src={props.imgs}/>
        <div class={a.smsSm}>
            <h2>{props.s}</h2>
            {props.t == 'f' && 
                     <div class={a.fales}>
                    
                     <svg enable-background="new 0 0 32 32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="_x33_6-file"><g><path d="m25.7 10.3-8-8c-.2-.2-.4-.3-.7-.3h-10c-.6 0-1 .4-1 1v26c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-18c0-.3-.1-.5-.3-.7z" fill="#2A8BF2"></path><path d="m25.7 10.3-8-8c-.3-.3-.7-.4-1.1-.2-.4.1-.6.5-.6.9v8c0 .6.4 1 1 1h8c.4 0 .8-.2.9-.6.2-.4.1-.8-.2-1.1z" fill="#65a2fc"></path></g></g></svg>
                    <h1>Files</h1>
                </div> 
                    }
                     {props.t == 'p' &&
                      
                       <img src={props.n}/>
                         
                }
        </div>
        
    </div>
    )
    }
}

function CrImp(props){
    let [values,SetValue]=useState('')
    return(   
        <div class={a.btn_otpr}>
            <input onInput={(e)=>{
                SetValue(e.target.value)
            }} placeholder="Type a message here"></input>
           <img class={a.smole}src="./imgs/Smile icon.png"/>
           <img onClick={()=>{
                props.uMas(values,props.ids)
           }} class={a.btn_ot_i} src="./imgs/Send Icon.png" alt="" />
                      
        </div>
    )
}
export{CrElDialogName,CrSms,CrPolsName,ModalEl,CrImp}