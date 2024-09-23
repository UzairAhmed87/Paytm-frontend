import React from 'react'


const Appbar = () => {
  return (
    <div className='shadow h-14 flex justify-between bg-green-500 '>
        <div className='flex flex-col justify-center h-full font-semibold text-3xl ml-4'>UPaisa App</div>
        <div className='flex'>
            <div className='flex flex-col justify-center h-full mr-4 font-medium'>Hello</div>
            <div className='rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2'>
            <div className='flex flex-col justify-center h-full text-xl'>U</div>
            </div>
            
        </div>
    </div>
  )
}

export default Appbar