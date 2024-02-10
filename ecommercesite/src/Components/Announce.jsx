import {Close} from '@material-ui/icons'
import React, { useState } from 'react'

function Announce() {
    const[announceStyle,SetAnnounceStyle]=useState('bg-[red] font-bold text-white items-center justify-center flex')

    const handleClose=()=>{
        SetAnnounceStyle(announceStyle + " hidden")
    }

    return (
        <div className={announceStyle} >
            <h2>Hurry up its 40% off now</h2>
            <Close className='cursor-pointer' onClick={handleClose}/>
        </div>
    )
}

export default Announce
