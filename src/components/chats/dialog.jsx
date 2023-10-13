import { CrElDialogName } from "../Heder/profile"
function CrDialogs(){
    return(
            
         <div class = 'dialogs'>
            <div class='zagolChat'>
                <h1 >Чаты</h1>
              
            </div>
           <div>
           <input></input>
           <div class = 'chats'>
            
                <CrElDialogName slk='name1' name='name'/>
                <CrElDialogName slk='name2' name='name2'/>
                <CrElDialogName slk='name3'name='name3' pfoto='https://www.svgrepo.com/show/530293/tree-2.svg'/>
                
            </div>
           </div>
            
           
         </div>
     
    )
}
export{CrDialogs}