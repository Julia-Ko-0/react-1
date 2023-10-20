import { CrElDialogName,CrSms,CrPolsName} from "./profile"
import a from './dialog.module.css'
// import {Mas} from './masDial.jsx'
import { useState } from "react"


// console.log(Mas)
function CrDialogs(){
    
        const [Mas,SetCount]=useState([{ id:1,
            name:"name1",
            img:"",
            status:"печатает...",
            sms:"ndsjvnfdsk skdnf"
        },
        { id:2,
            name:"name2",
            img:"https://www.svgrepo.com/show/530293/tree-2.svg",
            status:"печатает...",
            sms:"lkmrgrndsjvnfdsk skdnf"
        },
        {id:3,
            name:"name3",
            img:"",
            status:"печатает...",
            sms:"rkgmlrkes ndsjvnfdsk skdnf"
        }])
        function DbElMas(){
                let i1=prompt('name','')
                let i2=prompt('sms')
                let newChat=  {
                    id:null,
                        name: i1,
                        img: null,
                        status:"stat",
                        sms:i2
                    }
                    SetCount([...Mas,newChat])
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
                        <input class={a.inp} placeholder="Поиск" ></input>
                        <div class = {a.chats}>
                            
                            { 
                                // const [Mas,setCount]=useState(Mas[])
                                Mas.map(chat=>(
                                    <CrElDialogName pfoto={chat.img} text={chat.sms} name={chat.name}/>
                                ))
                            }
                            {/* <div id='msOkn' class={a.modalOkn}>
                                <input id='inp1' placeholder="name"></input>
                                <input id='inp2' placeholder="text"></input>
                                <input id='inp3' placeholder="img"></input>
                                 <button id="btnModal">создатьЫ</button>
                            </div> */}
                            {/* <CrElDialogName text="djhijtd zkdrhgkidf xfcighdiuf xzfhgidzf fuhgid" slk='name1' name='name'pfoto='https://s1.1zoom.ru/big3/474/354282-admin.jpg'/>
                            <CrElDialogName slk='name2' name='name2'/>
                            <CrElDialogName slk='name3'name='name3' pfoto='https://www.svgrepo.com/show/530293/tree-2.svg'/> */}
                            
                        </div>
                    </div>
                </div>
                <div className={a.dialog_chat}>
                    <CrPolsName name="name" sost="sostoan"/>
                    <div class={a.smChat}>
                        <CrSms smsText="ghjd.fhkghdnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                        <CrSms smsText="ghjd.fhkghftgjhrkljjjjjyoiutjyio    iotyort idtuoy rtdyurty rduyhrth dfuheyier drugh dur dufiridty dnfjhd" imgs="https://www.svgrepo.com/show/530293/tree-2.svg"/>
                   
                    </div>
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
export{CrDialogs,}