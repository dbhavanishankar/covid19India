import React from 'react'
import Clock from 'react-live-clock'

export function TodayDate() {
    var tempDate = new Date();
    var date = tempDate.getDate() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getFullYear() 
    return (
        <div>
            {date} <Clock  format={'h:mm:ssa'} ticking={true}/>
        </div>
    )
}
export default TodayDate;