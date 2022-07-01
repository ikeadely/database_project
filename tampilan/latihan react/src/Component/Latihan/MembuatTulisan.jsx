import React from 'react'
import anya from '../Assets/anya.png'
import { HeartOutlined } from '@ant-design/icons'

function MembuatTulisan() {
  return (
    <div>
        <h1> ANYA GERALDINE </h1>
        <p> <HeartOutlined  /> </p>
        <img style={{width:"500px", height: "450"}} src={anya}/>
    </div>
  )
}

export default MembuatTulisan