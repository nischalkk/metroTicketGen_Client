import { useState } from 'react'
import metroLogo from '../assets/metro.jpg'
import { Dialog } from '@headlessui/react'
import {Link, useNavigate} from 'react-router-dom'


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();


  return (
    <header className="absolute inset-x-0 top-0 z-50" data-aos="fade-down"
    data-aos-anchor="#example-anchor"
    data-aos-offset="100"
    data-aos-duration="1000">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img
                className="h-10 w-auto"
                src={metroLogo}
                alt=""
              />
            </Link>
           <Link to="/" className="hidden font-sans  block text-base font-semibold text-gray-700 lg:flex lg:gap-x-8 mt-2 ml-4 flex rounded-lg hover:text-gray-500">NexuMetroTix</Link>
          
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>

            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
            <span className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-300" onClick={()=>navigate('/about')}>About</span>
            <span className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-300" onClick={()=>navigate('/book')}>Book </span>
            <span className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-gray-300" onClick={()=>navigate('/tickets')}>Tickets</span>
          </div>
          
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">NexuMetroTix</span>
                <img
                  className="h-10 w-auto"
                  src={metroLogo}
                  alt="logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-700 hover:bg-purple-600">
                 <path  d="M6 18 18 6M6 6l12 12" />
               </svg>

              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                 <Link className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-purple-600" to='/about'>About</Link>
                  <Link className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-purple-600" to='/book'>Book </Link>
                  <Link className="cursor-pointer -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:bg-purple-600" to='/tickets'>Tickets</Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
  )
}

export default Navbar