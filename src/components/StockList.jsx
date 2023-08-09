import React, { useEffect, useState } from 'react'

const data = [
    "Google",
    "Amazon",
    "Facebook",
    "Twitter",
    "GooglePlus",
    "Instagram",
    "Meta",
    "SAP"
]

const StockList = () => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
      setStocks(data);
    }, [])
    
  return (
    <div className='bg-gray-400'>
        <div className='text-red-700'>Stocks List</div>
        {
            stocks.map((stock)=>{
                return (
                    <div className='text-red-700'>{stock}</div>
                )
            })
        }
    </div>
  )
}

export default StockList