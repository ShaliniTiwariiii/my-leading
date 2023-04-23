import React from 'react'
import style from "./Header.module.css"
function Header() {
   
   
    return (
        <div className={style.mainDiv}>
            <div className={style.heading}>
            <h1>Fees Management</h1>
            <p>Fees Management for students involves the organization and tracking of tuition,fees and other charges associated with their education.</p>
            </div>
            <div className={style.list}>
                <button>Add Fees Structure </button>
                <button>Manage Late Fine </button>
                <button>Concession/Scholarship</button>
                <button>Receive Fees </button>
                <button>Send Reminders </button>
                <button>Reports </button>
            </div>
        
        </div>
    )
}

export default Header
