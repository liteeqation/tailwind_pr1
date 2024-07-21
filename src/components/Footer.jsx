import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-5 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-black'>
        <li>
          <a className='hover:text-blue-300' href="#">Facebook</a>
        </li>
        <li>
          <a  className='hover:text-orange-500'href="#">Instagram</a>
        </li>
        <li>
          <a className='hover:text-white' href="#">X</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src="./assets/Help-Avatar.svg" alt="help" />
        <div>
          <p className='font-playfair font-thin'>Have any Questions</p>
          <a href="#" className='font-lato font-medium'>Talk to a specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer