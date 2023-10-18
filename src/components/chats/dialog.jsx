import { CrElDialogName } from "./profile"
import a from './dialog.module.css'
function CrDialogs(){
    return(
            
         <div class = {a.dialogs}>
            <div class={a.zagolChat}>
                <h1 >Чаты</h1>
              
            </div>
            <div>
                <input></input>
                <div class = {a.chats}>
            
                    <CrElDialogName text="djhijtd zkdrhgkidf xfcighdiuf xzfhgidzf fuhgid" slk='name1' name='name'pfoto='https://s1.1zoom.ru/big3/474/354282-admin.jpg'/>
                    <CrElDialogName slk='name2' name='name2'/>
                    <CrElDialogName slk='name3'name='name3' pfoto='https://www.svgrepo.com/show/530293/tree-2.svg'/>
                    
                </div>
            </div>
            <div className={a.dialog_chat}>
                <h1>jfcxhj</h1>
            </div>
            
           
        </div>
     
    )
}
export{CrDialogs}