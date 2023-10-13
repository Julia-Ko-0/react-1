import { NavLink } from "react-router-dom"

function CrElMenu(props){
    return(
        <nav class='menuEl'>
            <div class='pfoto' >
                <img src={props.foto}></img>
        
            </div>
        
            {/* <a href={props.slk} class = 'name_Menu'>{props.text}</a> */}
            <NavLink to={props.skl} class='askl'>{props.text}</NavLink>
        </nav>
    )
}
function CrPostEl(props){
    return(
        <h2>{props.text}</h2>
          
    )
}
function CrElDialogName(props){
    return(
        <div class='chat' >
            <div class='pfoto' >
                <img src={props.pfoto} />
            </div>
            <NavLink to={props.slk} >{props.name}</NavLink>
        </div>
    )
}
// function CrDialog(props){
//     return(
//         <div>
//             {/* <h2>{props.texts}</h2> */}
//             <h2>{props.text}</h2>
//         </div>
//     )
// }

export{CrElMenu,CrPostEl,CrElDialogName}