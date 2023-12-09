import React from 'react'
import { Link } from 'react-router-dom'
import FreelancerImg from "../assets/FreelancerImg.jpg"
import FreelancerImg2 from "../assets/FreelancerImg2.png"
import { FaStar } from "react-icons/fa6"
import { useSelector } from 'react-redux'

const SelectedFreelancer = () => {
    // const data = useSelector((state) => state.choosefreelancer.selectedFreelancer)
    // console.log(data)

    return (
        <>
            aman
        </>
        // <section className='w-full container mx-auto mt-36 outline-none'>
        //     <div className='flex flex-row justify-between'>

        //         {/* Left-Section  */}
        //         <div className="w-4/12 ">
        //             <div className="w-12/12  flex-row flex-wrap hidden md:flex  justify-center gap-6">
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] rounded-lg'>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //                 <Link className='h-[278px] '
        //                 // to={`/selected-freelancer/${data._id}`}
        //                 // onClick={() => dispatch(selectFreelancer(data))}
        //                 // key={index}
        //                 >
        //                     <div className='box w-[200px] flex flex-col rounded-lg bg-[#010101] '>
        //                         {/* <div className='box flex flex-col rounded-lg bg-[#31353b]'> */}
        //                         <div className='w-[200px] h-[190px] '>
        //                             <img className='rounded-t-lg object-cover w-[200px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
        //                         </div>

        //                         <div className='flex flex-row justify-between pt-4 pb-2 px-2 '>
        //                             <div className='flex flex-row gap-1'>
        //                                 <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
        //                                 <p className='text-white'>LEVEL 2</p>
        //                                 {/* <p className='text-white'>{data.name}</p> */}
        //                             </div>
        //                             <p className='text-white'>
        //                                 {/* {`${new Date(data.createdAt).toLocaleDateString()}`} */}
        //                                 12/11/1999
        //                             </p>
        //                         </div>
        //                         {/* <p className='py-2 text-left pr-2 w-[300px] px-2 text-gray-400 hover:underline'>{data.vision}</p> */}
        //                         <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
        //                             <FaStar className='text-yellow-500' />
        //                             <p className='text-white'>4.5</p>
        //                             {/* <p className='text-white'>{data.rating}</p> */}
        //                         </div>
        //                     </div>
        //                 </Link>
        //             </div>
        //         </div>

        //         {/* Middle Section */}
        //         <div className=' w-[1px] max-h-max hidden md:flex bg-[#727882]'>
        //         </div>


        //         {/* Right-Section  */}
        //         <div className="px-2 md:px-0 md:w-7/12 ">
        //             <div className="h-[400px] w-full">
        //                 <img className='h-[400px] w-full object-cover' src={FreelancerImg2} alt='freelancerIMG' />
        //             </div>

        //             <div className="pl-8 pr-4 py-2 bg-[#bfc3cd] border-[#2b2c2f] border-t-2">
        //                 <h2 className=' text-2xl'>{data?.vision}</h2>
        //                 <p className='text-md'>{data?.name}</p>
        //             </div>

        //             <div className="px-8 bg-[#bfc3cd] border-[#696a6f] border-t-2 py-5 flex flex-col justify-between gap-1">
        //                 <div className='flex flex-row'>
        //                     <div className='w-2/12 h-4 py-2 '>
        //                         <img className='w-10 h-10 rounded-full' src={FreelancerImg2} alt='freelancerImg2' />
        //                     </div>
        //                     <div className='w-10/12 '>
        //                         <h2 className='text-lg'>{data.vision}</h2>
        //                         <p className='text-md'>
        //                             {`${new Date(data.createdAt).toLocaleDateString()}`}
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className='flex flex-col md:flex-row'>
        //                     <div className='w-2/12'></div>
        //                     <div className='w-full md:w-10/12 '>
        //                         <p className='text-md  py-10'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium aspernatur quae sunt odit, laborum
        //                             incidunt ipsa harum labore nobis  ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium aspernatur quae sunt odit, laborum
        //                             incidunt ipsa harum labore nobis necessitat dolor sit amet consectetur adipisicing elit. Expedita praesentium aspernatur quae sunt odit, laborum
        //                             incidunt ipsa harum labore nobis  ipsum  ipsum dolor sit amet consectetur adipisicing elit. Expedita praesentium aspernatur quae sunt odit, laborum
        //                             incidunt ipsa harum labore nobis necessitat dolor sit amet consectetur adipisicing elit. Expedita praesentium aspernatur quae sunt odit, laborum
        //                             incidunt ipsa harum labore nobis  ipsum  dolor sit amet consectetur adipisicing elit. Expedita praesentium aspernatur quae sunt odit, laborum
        //                             incidunt ipsa harum labore nobis necessitat  necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloribus fuga tempore ipsum, doloremque cumque voluptate voluptatem, voluptas natus veniam rerum.
        //                         </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //     </div>
        // </section>
    )
}

export default SelectedFreelancer