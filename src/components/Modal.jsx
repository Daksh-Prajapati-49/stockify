import React from 'react'
import Card from './Card'


const Modal = ({ setShowModal, showModal }) => {
    return (
        <div>
            {showModal ? (
                <>
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h2 className="text-xl font-semibold mb-4">Long Dialog Box</h2>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                                Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
                                Praesent mauris.
                            </p>
                            {/* Add more content here */}
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={()=>{setShowModal(false)}}
                            >
                                Close
                            </button>
                        </div>
                    {/* <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none h-auto"
                    >
                        <div className="flex absolute w-2/3 my-6 mx-auto  mt-5">
                            <div className="w-2/3 border-0 rounded-lg shadow-lg relative flex flex-col flex-wrap w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Stocks Portfolio Recommended
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            X
                                        </span>
                                    </button>
                                </div>

                                <Card/>
                                <Card/> 
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
                </>
            ) : null}
        </div>
    )
}

export default Modal

// import React from 'react';

// const Modal = ({ setShowModal, showModal }) => {
//     return (
//         <div
//             className={`fixed inset-0 flex items-center justify-center z-50 ${showModal ? '' : 'hidden'
//                 }`}
//         >
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//                 <h2 className="text-xl font-semibold mb-4">Long Dialog Box</h2>
//                 <p className="mb-4">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
//                     odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
//                     Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
//                     Praesent mauris.
//                 </p>
//                 {/* Add more content here */}
//                 <button
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                     onClick={setShowModal(false)}
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Modal;
