import React,{} from 'react'
import { useParams } from 'react-router-dom'
const WatchPage = () => {
    const {id}=useParams()
  return (
    <div className='text-center mt-2 text-white'>
        Page Id={id}
    </div>
  )
}

export default WatchPage