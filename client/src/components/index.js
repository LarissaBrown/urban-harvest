import React from 'react'
import usePortal from 'react-useportal'
import Panel from './context/Panel'

const PanelPortal = (props) => {

    
    const { Portal } = usePortal({
        bindTo: document.getElementById('panel-portal')
    })

    return(
        <Portal>
            <Panel className='panel' {...props}/> 
        </Portal>
    )
}

export default PanelPortal