import React, {useRef} from 'react'



function Panel({children}, props){
  const panelRef = useRef(null)
 
 
    return(
       
    
        <div className="panel" ref={panelRef}>
            <div className="panel-content">

                {children}
               
            </div>   
        </div>
    
       
    )
}

export default Panel