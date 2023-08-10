import React, { useState } from 'react'
import Modal from './Modal'
import axios from "axios";
import { LongDialog } from './LongModal'
import {
  Button,
} from "@material-tailwind/react";

const baseURL = "https://stockify-backend-five.vercel.app/predict";

const Body = () => {
  const [data, setData] = useState({});
  const [amt, setAmt] = useState(0)
  const [window, setWindow] = useState("")
  const [date, setDate] = useState("")
  const config = {
    headers: {
      principle: amt,
      ExpectedDate: date,
      factor: window
    }
  }
  // Modal 
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    axios.get(baseURL,config).then((response) => {
      setData(response.data.stocks.selectedStocks);
      console.log(response.data);
    });
  }
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex justify-center">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex justify-center flex-col">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="amt">
            Principal Amount
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="number" value={amt} onChange={(e) => { setAmt(e.value) }} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="factor">
            Factor
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={window} onChange={(e) => { setWindow(e.value) }} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" for="date">
            Date
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="date" placeholder="Username" value={date} onChange={(e) => { setDate(e.value) }} />
        </div>
        <Button onClick={handleOpen}>Long Dialog</Button>

        <LongDialog open={open} setOpen={setOpen} handleOpen={handleOpen} />





      </form>
    </div>
  )
}

export default Body