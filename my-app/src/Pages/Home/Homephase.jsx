import {React,useState} from 'react'
import'./Homephase.css'
import { Preview } from '../../Home'
const Homephase = () => {const[block,setBlock]=useState(Preview)
  const FilterBlock=(blocks)=>{
    setBlock(block.filter((x)=>{return x.id===blocks}))
  }
  return (
    <div className='bodyphase'>
  <div className="meta1">
    <p className="parameta">Hello, I'm William</p>
    <p className="parameta2">I create websites and 
    development of Front-end project for enhancing business result
</p>
  </div>{block.map((x)=>(  <div className="meta2" key={x.id}>
  <img src={x.image} alt="Not Applicable"className='metaImage' />
  </div>))}

    </div>
  )
}

export default Homephase