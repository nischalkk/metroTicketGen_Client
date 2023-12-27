import axios from "axios";
import { useEffect, useState } from "react"
import {toast} from 'sonner';
import { useNavigate } from "react-router-dom";


  
  export default function Ticket() {
    const [tickets,setTickets] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8080/tickets/")
        .then((res)=>setTickets(res.data))
        .catch(err => {
            console.log(err.message)
        })    
    },[])


    return (
      <ul role="list" className=" mt-8 divide-y divide-gray-100">
        {
        tickets.map((ticket) => (
          <li key={ticket.ticketId} className="flex justify-normal gap-x-3 py-3">
            {ticket.uses==2 ? (<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div
    className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
   
    <div
      className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
    </div>
    <button
      className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
          </path>
        </svg>
      </span>
    </button>
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-1">
      <h5 className="block font-mono text-xl font-bold antialiased text-xl leading-snug tracking-normal text-blue-gray-1200">
      {ticket.endStation}
      </h5>
      <p
        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
  <path fillRule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>
      </p>
    </div>
    <p className="flex items-center justify-left mt-0 mb-3 block font-serif font-small text-xs font-light leading-snug text-gray-600">
      From : {ticket.startStation}
    </p>
    <p className="flex items-center justify-between mb-3 block font-sans text-sm font-bold leading-snug text-black-800">
      {ticket.ticketId}
      <span className="flex items-center justify-right mb-3 font-sans text-xl font-bold leading-snug text-black-800">  ₹ {ticket.price}</span>

    </p>
    <p className="flex items-center justify-between mb-3 block font-sans text-sm leading-snug text-black-400">
      
      Ticket expires on {ticket.exitTime}

    </p>
    <div className="inline-flex flex-wrap items-center gap-3 mt-3 group">
      
      <span
        className="rounded-full border border-purple-900 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-green-900/10 hover:!opacity-100">
        Ticket booked successfully   
      </span>
    </div>
  </div>
  <div className="p-6 pt-3">
    <button
      className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={()=>axios.post("http://localhost:8080/tickets/enter/"+ticket.ticketId)
      .then((res)=>{toast(res.data);window.location='/tickets'})
      .catch(err => {
          console.log(err.message)
      })}>
      Enter
    </button>
    
  </div>
</div> ):(<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
  <div
    className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
   
    <div
      className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60">
    </div>
    <button
      className="!absolute  top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z">
          </path>
        </svg>
      </span>
    </button>
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-1">
      <h5 className="block font-mono text-xl font-bold antialiased text-xl leading-snug tracking-normal text-blue-gray-1200">
      {ticket.endStation}
      </h5>
      <p
        className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="9000">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
</svg>
      </p>
    </div>
    <p className="flex items-center justify-left mt-0 mb-3 block font-serif font-small text-xs font-light leading-snug text-gray-600">
      From : {ticket.startStation}
    </p>
    <p className="flex items-center justify-between mb-3 block font-sans text-sm font-bold leading-snug text-black-800">
      {ticket.ticketId}
      <span className="flex items-center justify-right mb-3 font-sans text-xl font-bold leading-snug text-black-800">  ₹ {ticket.price}</span>
    </p>
    
    <div className="inline-flex flex-wrap items-center gap-3 mt-3 group">      
      <span
        className="rounded-full border bg-green-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-green-900/10 hover:!opacity-100">
        You Entered the Station   
      </span>
    </div>
  </div>
  <div className="p-6 pt-3">
    <button
      className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      onClick={()=>axios.post("http://localhost:8080/tickets/exit/"+ticket.ticketId)
      .then((res)=>{toast(res.data); navigate('/book')})
      .catch(err => {
          console.log(err.message)
      })}>
      Exit
    </button>
    
  </div>
</div> )}
          </li>
        ))}
      </ul>
    )
  }
  