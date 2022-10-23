import React from 'react'
import './compends/popup.css';

function Popup(probs) {

    return (probs.trigger) ? (
        <div className='popup'>
            <div className='pop'>
                <button className='btn'  onClick={()=>probs.setTrigger(false)} >Close</button>
                {probs.children}
            </div>
        </div>

    ) : "";
}
export default Popup;