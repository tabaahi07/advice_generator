import React from 'react' ;

function Button(props){
   return <div className="Button">
             <button onClick={props.manageClick} className="button"> <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png" width="20px" height="20px"/> </button>
         </div>
}

export default Button ;