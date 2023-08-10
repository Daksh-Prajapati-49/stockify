import React, { useState } from 'react'
import Modal from './Modal'
import { LongDialog } from './LongModal'
import {
  Button,
} from "@material-tailwind/react";


const Body = () => {
  const [amt, setAmt] = useState(0)
  const [window, setWindow] = useState("")
  const [date, setDate] = useState("")

  // Modal 
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
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
        {/* <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit
          </button>
        </div> */}

        {/* <button
          className="bg-blue-800 text-white active:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button> */}
        <Button onClick={handleOpen}>Long Dialog</Button>
        
        {/* <Modal setShowModal={setShowModal} showModal={showModal}/> */}
        <LongDialog open={open} setOpen={setOpen} handleOpen={handleOpen}/>

        



      </form>
    </div>
  )
}

export default Body