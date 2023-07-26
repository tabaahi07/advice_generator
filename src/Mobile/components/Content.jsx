
import React from 'react' ;
import styles from '../Mobile.module.css' ;
import patternDividerMobile from '../../Assets/images/pattern-divider-mobile.svg' ;


function Content(props){
    
     return <div className={styles.Content}>

            <div className = {styles.Heading}>
                 ADVICE #{props.adviceNumber} 
            </div>
            
            <div className = {styles.Advice}>
                 "{props.advice}"  
            </div>

            <div className={styles.Icon}>
                <img src={patternDividerMobile} />
           </div>

           

          </div>
     
     
}

export default Content ;