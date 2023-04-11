import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import {TbTruckDelivery} from 'react-icons/tb'

import {BsFillCartFill} from 'react-icons/bs'
const  NavBar = () => {
    const [nav,setNav] = useState(false);
  return (
    <div className='max-w-[1640px] max-auto flex justify-between items-center p-4'>
        {/* {lef side bar} */}
        <div className='flex items-center'>
        <div onClick={() => setNav(!nav)} className= 'cursor-pointer'> 
        <AiOutlineMenu size= {30}/>
       </div>
       <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>P2E <span className='font-bold'>PRO</span></h1>

       {/* <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'>Delivery</p>
        <p className='p-2'>Pickkup</p>
       </div> */}
        </div>
        {/* {search input} */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder="serach for something"/>
        </div>
        <div>
            <button className= 'bg-black text-white hidden md:flex items-centre rounded-full py-2 px-2 '>
                {/* <BsFillCartFill  size={20} className= 'mr-2' />*/}Login 
            </button>
        </div>
        {/* {mobile menu} */}
        {/* {overLay} */}
        {
          nav ?   <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
          </div> : '' 
        }
       
        {/* {side drawer menu} */}
        <div className={nav? 'fixed top-0 left-0 w-[200px] h-screen bg-white z-10 duration-300': 'fixed top-0 left-[-100%] w-[200px] h-screen bg-white z-10 duration-300'}>
         <AiOutlineClose onClick= {() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
         <h2 className='text-2xl p-4'>Best<span className='font-bold'>Eats</span></h2>
         <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
                <li className='text-xl py-4 flex'> 
    <TbTruckDelivery size={25} className= 'mr-4'/>Orders
                </li>
            </ul>
         </nav>
     </div>
      
    </div>
  )
}

export default NavBar;