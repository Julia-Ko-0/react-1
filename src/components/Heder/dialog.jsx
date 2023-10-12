import { CrDialog, CrElDialogName } from "./profile"
function CrDialogs(){
    return(
            
         <div class = 'dialogs'>
            <div class='zagolChat'>
            <h1 >Чаты</h1>
            </div>
           
            <div class="dialName">
                <CrElDialogName name='name'/>
                <CrElDialogName name='name'/>
                <CrElDialogName name='name'/>
                
            </div>
            <div>
                <CrDialog text="ssdfsd"/>
            </div>
         </div>
     
    )
}
export{CrDialogs}