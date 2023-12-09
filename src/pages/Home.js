import React from 'react'
import Footer from '../components/Footer'
import Box from '../components/Box'
import MSME from "../assets/Home/MSME.jpg"
import domain2 from "../assets/buyorsell/Domain2.png"
import domain3 from "../assets/buyorsell/Domain3.png"
import Websites1 from "../assets/buyorsell/Websites1.png"
import Websites2 from "../assets/buyorsell/Websites2.png"
import appDevelpment from "../assets/Home/appDevelopment.jpg"
import websiteDevelopment from "../assets/Home/websiteDevelopment.jpg"
import homeBgImg from "../assets/Home/homeBgImg.jpg"
import Payment from "../assets/Home/Payment.jpg"
import Car1 from '../assets/buyorsell/Car1.jpg'
// import FreelancerImg from "../assets/FreelancerImg.jpg"
// import { FaStar } from "react-icons/fa6"
import { Link } from 'react-router-dom'
// import { fetchFreelancerData, selectFreelancer, STATUSES } from '../store/slice/freelancerSlice'
// import { useDispatch, useSelector } from 'react-redux'
// import ErrorPage from '../routes/ErrorPage'


const Home = () => {
    const userDetails = JSON.parse(localStorage.getItem("user"))
    //redux-toolkit
    // const dispatch = useDispatch()
    // const { result: chooseFreelancer, status } = useSelector((state) => state.choosefreelancer.data)


    // useEffect(() => {
    //     dispatch(fetchFreelancerData())
    // }, [dispatch])

    // if (status === STATUSES.LOADING) {
    //     return <div className='flex justify-center text-4xl text-black mt-10'>Loading...</div>
    // }
    // if (status === STATUSES.ERROR) {
    //     return <ErrorPage />
    // }


    const serveDetails = [
        { text: "MSME", src: MSME },
        { text: "ECOMMERCE", src: domain2 },
        { text: "DIGITAL SERVICES", src: domain3 },
        { text: "FREELANCER SERVICE", src: Websites1 },
        { text: "PROPERTY DEALING SERVICE", src: Websites2 },
        { text: "APP DEVELOPMENT", src: appDevelpment },
        { text: "FIRA", src: Car1 },
        { text: "ESCROW PAYMENTS", src: Payment },
        { text: "WEBSITE DEVELOPMENT", src: websiteDevelopment },
    ]

    return (
        <section className='home'>
            <div className='relative bg-gradient-to-r from-[rgb(1,66,106)] to-[#096aa6] h-[652px] m-auto flex justify-center items-center px-14 gap-5'>

                {/* Optional: Background Image/Pattern */}
                <div className='absolute inset-0 opacity-30 bg-cover bg-center' style={{ backgroundImage: `url(${homeBgImg})` }}></div>

                <div className='relative flex justify-center items-start flex-col gap-6 animate-fadeInUp duration-1000 z-10'>
                    <div className='flex gap-0 flex-col leading-tight'>

                        <div className='text-[43px] sm:text-6xl md:text-7xl font-bold text-white animate-fadeInUp duration-1000 delay-100 leading-snug tracking-tighter'>
                            Welcome to
                        </div>
                        <div className='text-[43px] sm:text-6xl md:text-7xl text-yellow-600 font-bold animate-fadeInUp duration-1000 delay-300 leading-snug tracking-tighter'>
                            Bharat<span className='text-white'>Escrow</span>
                        </div>
                    </div>
                    <div className='text-lg text-white pl-2 animate-fadeInUp duration-1000 delay-500 leading-relaxed'>
                        We prioritize the protection of both buyers and sellers.
                    </div>
                </div>
            </div>



            <div className='flex justify-center bg-gradient-to-r from-[#01426a] to-[#096aa6] py-12 px-3 sm:px-12 gap-8 md:gap-12 flex-wrap md:flex-nowrap'>

                <div className='flex flex-col items-start bg-[#024f78] w-full md:w-[320px] h-auto md:h-[500px] p-6 rounded-xl shadow-xl transition-transform ease-in-out duration-200 hover:-translate-y-1 hover:shadow-2xl'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-yellow-600 mb-4'>
                        Secure Transactions
                    </h3>
                    <p className='text-base sm:text-lg text-white leading-relaxed'>
                        Our goal is to make sure that financial transactions take place quickly, securely, and openly. You may rely on BharatEscrow.com to deliver your funds on the scheduled timeframe and in accordance with the terms that were agreed upon between both parties.
                    </p>
                </div>

                <div className='flex flex-col items-start bg-[#024f78] w-full md:w-[480px] h-auto md:h-[500px] p-6 rounded-xl shadow-xl transition-transform ease-in-out duration-200 hover:-translate-y-1 hover:shadow-2xl'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-yellow-600 mb-4'>
                        Reliable Intermediary
                    </h3>
                    <p className='text-base sm:text-lg text-white leading-relaxed'>
                        Our platform acts as a reliable intermediary, holding funds securely through our RBI regulated banking partner until the terms of the transaction are met and confirmed by both parties. We ensure that both parties have peace of mind, knowing that their financial interests are protected. Whether you are purchasing a product, hiring a service, or engaging in any other transaction, BharatEscrow is your trustworthy companion in this journey.
                    </p>
                </div>

            </div>


            {/* --Third section start-- */}
            {/* Industries we serve */}
            <div className='flex pt-28 pb-[83px] bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  font-roboto flex-col gap-5 px-2 ' >
                <div className='mx-auto container'>
                    <div className='font-bold uppercase mb-10 text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-yellow-600'>
                        Industries we serve
                    </div>

                    <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '>

                        {/* //Industries we serve  */}
                        {
                            serveDetails.map((item, index) => {
                                return (
                                    <Box key={index} text={item.text} src={item.src} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* --Third section end-- */}


            {/* --Fourth section end-- */}
            {/* <div className=' flex relative pt-12 pb-[83px] bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]  font-roboto flex-col gap-5 px-2 ' > */}
            <div className='font-bold uppercase mb-10 text-3xl sm:text-4xl md:text-5xl mt-8 sm:mt-0 w-full text-center text-yellow-600'>
                Freelancers we have
            </div>

            {userDetails.role !== "Buyer" &&
                <div className='flex max-w-full mr-12 justify-end'>
                    <Link to="/sellingOnboarding" className='px-8 py-3 bg-yellow-600/80 hover:bg-yellow-600/100 w-[200px] text-lg rounded-lg text-white cursor-pointer'>
                        Become a seller
                    </Link>
                </div>
            }

            {/* <div className='flex flex-wrap flex-shrink justify-between space-y-2 gap-4 px-2  '> */}

            {/* //Freelancer we have
            {/* <div className='mainBox container mx-auto'>
                        <div className='flex flex-row w-full flex-wrap justify-evenly lg:justify-center gap-3 md:gap-4'> */} */}

            {/* //Dispatching the selectedFreelancer from here to SelectedFreelancer.js Page  */}
            {/* {
                                chooseFreelancer && chooseFreelancer.map((data, index) => {
                                    return (
                                        <Link className='h-[278px]' to={`/selected-freelancer/${data._id}`}
                                            onClick={() => dispatch(selectFreelancer(data))}
                                            key={index} >
                                            <div className='box flex flex-col rounded-lg bg-[#010101] '>
                                                <div className='w-[270px] sm:w-[300px] h-[190px] '>
                                                    <img className='rounded-t-lg object-cover w-[300px] h-[190px]' src={FreelancerImg} alt='freelancerImg' />
                                                </div>

                                                <div className='flex flex-row justify-between pt-4 pb-2 px-2'>
                                                    <div className='flex flex-row gap-2'>
                                                        <img className='w-5 h-5 rounded-full' src={FreelancerImg} alt='freelancerImg' />
                                                        <p className='text-white'>{data.name}</p>
                                                    </div>
                                                    <p className='text-white'>
                                                        {`${new Date(data.createdAt).toLocaleDateString()}`}
                                                    </p>
                                                </div>
                                                <div className='rating flex flex-row gap-1 items-center px-2 pb-4'>
                                                    <FaStar className='text-yellow-500' />
                                                    <p className='text-white'>{data.rating}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                            } */}
            {/* </div>
                    </div>



                </div>
            </div> */}

            {/* --Fourth section end-- */}

            <Footer />

        </section>
    )
}

export default Home