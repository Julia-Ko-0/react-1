import { CrElDialogName,CrSms,CrPolsName} from "./profile"
import a from './dialog.module.css'
// import {Mas} from './masDial.jsx'
import { useState } from "react"
// import {Poisk} from './poisk'


// console.log(Mas)
let App = [{ id:1,
    name:"name1",
    img:"",
    status:"печатает...",
    sms:[{s:"lkmrgrndsjvnfdsk skdnf",k:'y'}]
},
{ id:2,
    name:"name2",
    img:"https://www.svgrepo.com/show/530293/tree-2.svg",
    status:"печатает...",
    sms:[{s:"lkmrgrndsjvnfdsk skdnf",k:'y'},{s:"pppppdsjvnfdsk skdnf",k:'m'}],

},
{id:3,
    name:"name3",
    img:"",
    status:"печатает...",
    sms:[{s:"lkmrgrndsjvnfdsk skdnf",k:'y'}]
}]
function CrDialogs(){
    
        let [Mas,SetCount]=useState(App)
        // const [chat,SetCount]=useState(Mas)
        function DbElMas(){
                let i1=prompt('name','')
                let i2=prompt('sms')
                let newChat=  {
                    id:null,
                        name: i1,
                        img: null,
                        status:"stat",
                        sms:{s:i2,k:'y'}
                    }
                    SetCount([...Mas,newChat])
                    return(App)
            }
            let app = Poisk.App
            function Poisk(){
                let impPoisk = document.getElementById('impPoisk')
                impPoisk.addEventListener('keydown',(ev)=>{
                    if(ev.key === "Backspace"){
                        SetCount(Mas)
                    }
                })
                if('' != impPoisk.value){
                    let NewChat = Mas.filter(a=> a.name.includes(impPoisk.value))
                SetCount(NewChat)
                    
                    // console.log(Mas)
                    
                    // return( Mas)
                }
       
            console.log(App,Mas,app)
                // SetCount([...Mas,newMas])
                // SetCount(newChat)
            }

    
    return(
        
        <div class={a.obChats}>
            <div class={a.zagolChat}>
                    <h1 >Чаты</h1>
                    {/* <button onClick={document.getElementById('msOkn').style.display = 'block'}>+ Диалог </button> */}
                    <button onClick={DbElMas}>+ Диалог </button>
            </div>
            <div class={a.chatsDial}>
                <div class = {a.dialogs}>
                    <div>
                        <input id='impPoisk' class={a.inp} onInput={Poisk} placeholder="Поиск" ></input>
                        <div class = {a.chats}>
                            
                            { 
                                // const [Mas,setCount]=useState(Mas[])
                                Mas.map(chat=>(
                                    <CrElDialogName slk={'?id='+chat.id} pfoto={chat.img} text={chat.sms[chat.sms.length - 1].s} name={chat.name}/>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
                <div class={a.dialog_chat}>
                    
                {/* <CrPolsName name="name" sost="sostoan"/> */}
                    
                { 
                                // const [Mas,setCount]=useState(Mas[])
                                Mas.map(chat=>(
                                    <CrSms ids = {chat.id} smsText={chat.sms} imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                                ))
                            }
                        {/* <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                    */}

                </div>
            </div> 
        </div>
       
        
     
    )
}

//  document.getElementById('btnM').addEventListener('click',()=>{

//  })
// b.addEventListener('click',()=>{
//     document.getElementById('msOkn').style.display = 'flex'
// }
export{CrDialogs}