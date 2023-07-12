import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
  const [openmenu, setOpenmenu] = useState(false);
  const handleToggleMenu = ()=>{ 
    setOpenmenu(!openmenu);
  }

  return ( 
    <header className="header">
      {/* desktop */}
      <nav className="header__nav nav">
        <div className="flex h-16 justify-between">
          <div className="flex px-2 lg:px-0">
            <div className="flex flex-shrink-0 items-center">
            <div className="flex items-center lg:hidden">
              <button type="button" className="nav__button--menu" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only">Open main menu</span> 
                <svg onClick={handleToggleMenu} className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> 
                <svg onClick={handleToggleMenu} className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div> 
              <img className="hidden h-8 w-auto lg:block" src="/assets/logo.png" alt="Company"/>
            </div>
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8"> 
              <a href="#" className="nav__link">Tecnología</a>
              <a href="#" className="nav__link">Electrohogar</a>
              <a href="#" className="nav__link">Deportes</a>
              <a href="#" className="nav__link">Belleza</a>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                  </svg>
                </div>
                <input id="search" name="search" className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Search" type="search"/>
              </div>
            </div>
          </div>
      
          <div className="ml-4 flex items-center ">  
            <CartWidget/> 
          </div>
        </div>
      </nav>

      {/* mobile */}
      {
        openmenu &&
        (
          <nav className="lg:hidden" id="mobile-menu">
            <div className="space-y-1 pb-3 pt-2"> 
              <a href="#" className="nav__link--mob">Tecnología</a>
              <a href="#" className="nav__link--mob">Electrohogar</a>
              <a href="#" className="nav__link--mob">Deportes</a>
              <a href="#" className="nav__link--mob">Belleza</a>
            </div> 
        </nav>
        )  
      } 
    </header> 
  )
}

export default NavBar
