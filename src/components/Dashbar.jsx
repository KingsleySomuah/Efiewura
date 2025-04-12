import React from 'react'
import {  IoIosNotificationsOutline } from 'react-icons/io'

const Dashbar = () => {
  return (
    <div className='shadow-gray-300 p-3 shadow-md flex justify-between items-center'>
      <h1 className='font-semibold'>Welcome Kingsley</h1>

      <div>
        <IoIosNotificationsOutline size={20}/>
      </div>
    </div>
  )
}

export default Dashbar