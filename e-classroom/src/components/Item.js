import React from 'react'
import {DashboardRounded} from '@material-ui/icons'
import './Item.css'

export default function Item({icon,name}) {
  return (
    <div className='item'>
        <div className='icon'>
            {icon}
        </div>
        <span>
            {name}
        </span>
    </div>
  )
}
