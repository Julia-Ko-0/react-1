function CrElMenu(props){
    return(
        <div class='menuEl'>
            <a href={props.slk} >{props.text}</a>
        </div>
    )
}
function CrPostEl(props){
    return(
        <h2>{props.text}</h2>
          
    )
}
function CrElDialogName(props){
    return(
        <div>
            <h2>{props.name}</h2>
        </div>
    )
}
function CrDialog(props){
    return(
        <div>
            {/* <h2>{props.texts}</h2> */}
            <h2>props.text</h2>
        </div>
    )
}
export{CrElMenu,CrPostEl,CrElDialogName,CrDialog}