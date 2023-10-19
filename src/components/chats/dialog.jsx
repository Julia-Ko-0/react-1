import { CrElDialogName,CrSms,CrPolsName } from "./profile"
import a from './dialog.module.css'
function CrDialogs(){
    return(
        <div class={a.obChats}>
            <div class={a.zagolChat}>
                    <h1 >Чаты</h1>
                
            </div>
            <div class={a.chatsDial}>
                <div class = {a.dialogs}>
                    <div>
                        <input class={a.inp} placeholder="Поиск" ></input>
                        <div class = {a.chats}>
                    
                            <CrElDialogName text="djhijtd zkdrhgkidf xfcighdiuf xzfhgidzf fuhgid" slk='name1' name='name'pfoto='https://s1.1zoom.ru/big3/474/354282-admin.jpg'/>
                            <CrElDialogName slk='name2' name='name2'/>
                            <CrElDialogName slk='name3'name='name3' pfoto='https://www.svgrepo.com/show/530293/tree-2.svg'/>
                            
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
export{CrDialogs}