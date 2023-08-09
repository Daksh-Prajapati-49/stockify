import React from 'react'
import StockList from './StockList'
import Graph from './Graph'

const Body = () => {
  return (
    <div className="flex">
        <div className="w-1/3">
            <StockList/>
        </div>
        <div className="w-2/3">
            <Graph/>
        </div>

    </div>
  )
}

export default Body