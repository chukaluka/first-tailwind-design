import React from 'react';
import image from './images/image-equilibrium.jpg';
import avatar from './images/image-avatar.png';

const App = () => {
  return (
<div className='sec-div items-center h-auto my-20 mx-9 rounded-lg py-6'>

  
  <img className='h-64 mx-auto rounded-lg' src={image} alt='images-equilibruim'/>

  <div className='px-7'>
      <h1 className='first-h1 text-lg pt-5 '>
        Equilibrum #3429
      </h1>

      <p className='first-para pt-2'>
        Our Equilibrum collection promotes<br/> balance and calm.
      </p>

    <div className='flex flex-row flex-nowrap justify-between pt-4'>
      <h4 className="sec-h4 ">
        0.041ETH
      </h4>
      <h4 className="third-h4">
        3 days left
      </h4>
    </div>

      <hr className='mt-4 '/>

    <div className='flex flex-row flex-nowrap mt-5 font00'>
      <img src={avatar} alt="avatar" className='w-10  avatar-img'/>
      <h2 className=' pl-3 pt-2 first-span'>
        Creation of <span className='second-span'>Jules Wyvern</span>
      </h2>
    </div>


  </div>
  
</div>
  )
}

export default App