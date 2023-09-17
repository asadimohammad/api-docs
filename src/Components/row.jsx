// @ts-nocheck
import React from 'react'
import Accordion from './Accordion/Accordion'
import {data} from '../data'
import { useLocation} from 'react-router-dom'

const Row = () => {
  const {pathname} = useLocation()
  let path = pathname.substring(1)
  const allData = Object.entries(data)
  const dataPath = allData.find(item => item[0] === path)
  return (
    <div className='row'>
      {
        dataPath[1].map((items , index) => (
          <Accordion items= {items}  index= {index}/>
        ))
      }
    </div>
  )
}

export default Row