import { useState } from "react"
import axios from 'axios';
import {toast } from 'sonner';
import { useNavigate } from "react-router-dom";

const BookTicket = () => {
    const [startStation,setStartStation] = useState("");
    const [endStation,setEndStation] = useState("");
    const navigate = useNavigate();

    
    return (
      <>
      
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
          aria-hidden="true" data-aos="zoom-out-up"
        >
          <div
            className="relative left-[calc(50%-19rem)] aspect-[955/438] w-[36.125rem] -translate-x-1/2 rotate-[170deg] bg-gradient-to-tr from-[#455a64] to-[#4fc3f7] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      
    <div className="card bg-transperent bg-gray-200 px-6 py-8  rounded-md shadow-sm">
     
    <p className="mb-4 ml-0 font-bold font-serif" >Book Ticket</p>

    <div className="flex flex-col items-end gap-6 w-72">

      <span className="relative mt-2 rounded-md shadow-sm">
      <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-60"
          aria-hidden="true" data-aos="zoom-out-up"
        >
          <div
            className="relative left-[calc(50%-19rem)] aspect-[955/438] w-[36.125rem] -translate-x-1/2 rotate-[210deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="bg-white w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-600 sm:text-sm sm:leading-6 mb-5"
          onChange={e=>setStartStation(e.target.value)}
          placeholder="From"
        />
        <input
          type="text"
          name="price"
          id="price"
          className="bg-white w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 placeholder:text-gray-600 sm:text-sm sm:leading-6"
          onChange={e=>setEndStation(e.target.value)}
          placeholder="To"
        />
      </span>

    <button className="rounded rounded-mb w-20 h-10 bg-gray-400 hover:bg-gray-500" onClick={()=>{axios.post("http://localhost:8080/tickets/book", {
        startStation,
        endStation
})
.then(response => {toast.success(response.data); navigate('/tickets')})
.catch((error) => console.error(error))} }
     >
          Buy
        </button>
  </div>
</div>

</>
  )
}

export default BookTicket
