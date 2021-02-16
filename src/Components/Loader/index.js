import React from 'react'
import './index.css'

function Loader({display}){

    return(
            <> 
                <div style = {{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                }}>
                    <div 
                    className = "c-loader"
                    style = {display ? {display:'block'} : {display:'none'}}
                    />
                </div>
            </>
    )

}

export default Loader;