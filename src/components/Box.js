import React from 'react'

const Box = ({ text, src }) => {
    return (
        <>
            <div className='font-bold pt-4 pb-6 w-[350px] h-[300px] border border-1 border-solid z-0 flex flex-col  shadow-[#26292e] hover:shadow-black shadow-lg rounded-xl transition-all ease-in-out duration-300 sm:hover:-translate-y-1  max-w-sm mx-auto text-center  text-black text-xl  bg-white '>
                <div className='text-3xl  px-4 py-4 rounded-xl'>
                    <h2>{text}</h2>
                </div>
                <div className='rounded-xl h-[200px] object-cover overflow-hidden '>
                    <img className='rounded-xl object-cover mx-auto' width={240} src={src} alt='img1' />
                </div>
            </div>
        </>
    )
}

export default Box