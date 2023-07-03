
import React from 'react' ;
import useMediaQueries from "media-queries-in-react"

function Content(props){
    
    var iconWidth ;

    const mediaQuery = window.matchMedia('(max-width: 1600px)')
    
    // Check if the media query is true
    if (mediaQuery.matches) {
      // Then trigger an alert
      iconWidth = "444" ;
    }
    
    else{
        iconWidth = "295" ;
    }


     return <div className='Content'>

            <div className = "Heading">
                <h5> ADVICE #{props.adviceNumber} </h5>
            </div>
            
            <div className = "Advice">
                <h2> "{props.advice}" </h2>  
            </div>

            <div className="Icon">
                <svg 
                    width = {iconWidth} height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g>
                </svg> 
           </div>

           

          </div>
     
     
}

export default Content ;