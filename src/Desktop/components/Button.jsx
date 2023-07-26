import React from 'react' ;
import styles from '../Desktop.module.css' ;

function Button(props){
   return <div className={styles.Button}>
             <button onClick={props.manageClick} className={styles.button}> <img src="https://cdn2.iconfinder.com/data/icons/dice-roll/100/dice_black_5-512.png" width="60px" height="60px"/> </button>
         </div>
}

export default Button ;