import { CrElDialogName,CrSms,CrPolsName} from "./profile"
import a from './dialog.module.css'

// import {Mas} from './masDial.jsx'
import { useState } from "react"
import { ModalEl,CrImp} from "./profile";
// import {Poisk} from './poisk'


// console.log(Mas)
let App = [{ id:1,
    name:"name1",
    img:"",
    status:"печатает...",
    sms:[{s:"lkmrgrndsjvnfdsk skdnf",k:'y',f_t:'p',f_n:'./imgs/im_sms/picture.png'},
    {s:"aaaaaaaa",
        k:'y',f_t:'none',f_n:'none'},
        {s:"lkmrgrndsjvnfdfjgkdfhguidfhgiudfgh fdghdfiugh surghduidsk skdnf",
        k:'y',f_t:'none'},
        {s:"lkmrgrndsjvnfdfjgkdfhguidfhgiudfgh fdghdfiugh surghduidsk skdnf",
        k:'y',f_t:'p',f_n:'https://www.svgrepo.com/show/530293/tree-2.svg'},
]
},
{ id:2,
    name:"name2",
    img:"https://www.svgrepo.com/show/530293/tree-2.svg",
    status:"печатает...",
    sms:[{s:"lkmrgrndsjvnfdsk skdnf",k:'y',f_t:'none',f_n:'none'},
    {s:"pppppdsjvnfdsk skdnf",k:'m',f_t:'f',f_n:'fail1.txt'}],

},
{id:3,
    name:"name3",
    img:"",
    status:"печатает...",
    sms:[
        {s:"lkmrgrndsjvnfdfjgkdfhguidfhgiudfgh fdghdfiugh surghduidsk skdnf",
        k:'y',f_t:'p',f_n:'./imgs/im_sms/picture.png'},
        {s:"aaaaaaaaaaaadfgh fdghdfiugh surghduidsk skdnf",
        k:'m',f_t:'none',f_n:'none'}
    ]
}]

function CrDialogs(){
    
        let [Mas,SetCount]=useState(App)
        let [dial,setState]=useState(App[0])
        let updateData = (value) => {
            setState(value)
        }
       let upMas = (value,id_)=>{
        let copy = Object.assign([], Mas);
        let id = id_
        copy[id-1].sms.push({s:value,k:'m'})
        console.log(copy)
        SetCount(copy)
       }
        // let [Ob,SetOb]=useState({ id:1,
        //     name:"name1",
        //     img:"",
        //     status:"печатает...",
        //     sms:[{s:"lkmrgrndsjvnfdsk skdnf",k:'y'}]
        // })
        // const [chat,SetCount]=useState(Mas)
        function DbElMas(){
                let i1=prompt('name','')
                let i2=prompt('sms')
                let id_new = Mas[Mas.length - 1].id + 1
                let newChat=  {
                    id:id_new,
                        name: i1,
                        img: null,
                        status:"stat",
                        sms:[{s:i2,k:'y',f_t:'none',f_n:'none'}]
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
              
                        <input id='impPoisk' class={a.inp} onInput={Poisk} placeholder="Поиск" ></input>
                        <div class = {a.chats}>
                            
                            { 
                                // const [Mas,setCount]=useState(Mas[])
                                Mas.map(chat=>(
                                    // <CrElDialogName names={chat.name}slk={'?id='+chat.id} pfoto={chat.img} text={chat.sms[chat.sms.length - 1].s} name={chat.name}/>
                                    <CrElDialogName upt={updateData} ids={chat} />

                                ))
                            }
                            
                        </div>
                
                </div>
                <div class={a.dialog_chat}>
                <CrSms mas={dial}/>
                <div class={a.smChat}>
                
                    < ModalEl mas={dial.sms}/>
                </div>   
                   <CrImp ids={dial.id} uMas={upMas}/>
                </div>
            </div> 
        </div>
       
        
     
    )
}

export{CrDialogs}