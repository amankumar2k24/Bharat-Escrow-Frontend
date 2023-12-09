import React from 'react'
import faq from "../assets/Faqs/faq.jpg"
import { RiAccountCircleLine } from "react-icons/ri"
import { MdOutlineApi } from "react-icons/md"
import { BsFillFileEarmarkPostFill } from "react-icons/bs"
import { AiFillEye, AiOutlineTransaction } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import workImg from "../assets/Faqs/work.jpg"
import buySell from "../assets/Faqs/buySell.jpg"
import fees from "../assets/Faqs/fees.jpg"
import paymentImg from "../assets/Faqs/payment.jpg"
import disputeImg from "../assets/Faqs/dispute.jpg"
import reliablePlatformImg from "../assets/Faqs/reliablePlatform.jpg"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const FAQItem = ({ question, answer }) => (
    <div className='mt-8 justify-center flex flex-col'>
        <div className='flex  items-center'>
            <details >
                <summary className='text-lg font-semibold md:text-2xl text-gray-700'>{question} </summary>
                <div className='text-gray-500'>{answer}</div>
            </details>
        </div>
    </div>
);

const Feature = [
    { IconComponent: RiAccountCircleLine, description: "Open digital escrow account within minutes" },
    { IconComponent: MdOutlineApi, description: "Freedom of choice-APIs or white labelled dashboards" },
    { IconComponent: BsFillFileEarmarkPostFill, description: "Easily accessible digital contracts" },
    { IconComponent: AiFillEye, description: "Cut the unpredictability and unwanted surprises" },
    { IconComponent: MdOutlineSecurity, description: "Add the extra layer of trust and transparency" },
    { IconComponent: AiOutlineTransaction, description: "Add the extra layer of trust and transparency" },
]


const Faq = () => {
    return (
        <section className='faq'>
            <div className='flex flex-col gap-20'>

                <div className='mt-32 sm:mt-20 flex items-end flex-col gap-4 mx-auto px-1 sm:px-4 '>
                    <h1 className='mt-14  font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mx-auto font-roboto'>
                        Frequently Asked Questions
                    </h1>
                    <div className='flex flex-col sm:flex-row gap-y-8 items-center flex-wrap justify-center'>
                        <div className='md:w-[800px] flex justify-start flex-col space-y-8 px-4 md:px-12 lg:px-32 xl:px-40'>
                            <FAQItem
                                question="What does “escrow” mean?"
                                answer="An escrow is a financial and legal agreement designed to protect Buyers and Sellers in a transaction. For a fee, an independent third party holds payment until everyone fulfills their responsibilities in the transaction."
                            />
                            <FAQItem
                                question="What can you buy or sell with BharatEscrow.com?"
                                answer="Escrow.com can help you safely buy or sell a variety of goods and services online for example buying or selling cars, watches, domains, refrigerators, ac etc."
                            />
                            <FAQItem
                                question="BharatEscrow.com pays the Seller?"
                                answer="If the merchandise is accepted, BharatEscrow.com releases funds to the Seller from the Escrow Account."
                            />
                        </div>

                        <div className='w-[280px] sm:w-[300px] flex'>
                            <img className='w-full max-w-[300px] object-cover' src={faq} alt='faqImage' />
                        </div>
                    </div>

                </div>

                {/* Services Section  */}
                {/* first  */}
                <div className='flex flex-col py-10 w-full px-10  bg-gradient-to-r row from-[rgb(1,66,106)] to-[#096aa6]   mx-auto rounded-none  sm:rounded-t-[200px]'>

                    <div className=' mx-auto flex flex-col sm:flex-wrap '>
                        <h1 className=' font-bold text-xl sm:text-[30px] text-center font-roboto text-yellow-600'>
                            FAQ - EscrowPay Services by <div>BharatEscrow.com</div>
                        </h1>


                        <div className='mt-10 flex flex-col gap-10 justify-center items-center'>
                            <div className=' sm:w-8/12 '>
                                <h2 className='text-xl sm:text-2xl text-[#c4c3c2]'>
                                    1. What is EscrowPay?
                                </h2>
                                <p className=' text-lg sm:text-xl text-[#9e9b9b]'>
                                    EscrowPay is a secure and reliable payment service provided by BharatEscrow.com, which acts as a trusted intermediary between freelancers and entities during transactions. It ensures that both parties fulfill their obligations before funds are released.
                                </p>
                            </div>


                            <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                                <h2 className='text-xl font-semibold sm:text-[26px] text-center text-white'>
                                    EscrowPay Advantage
                                </h2>

                                <div className=' flex max-w-4xl justify-center gap-12 flex-wrap '>

                                    {Feature && Feature.map((item, index) => {
                                        return (
                                            <div key={index} className='flex flex-col justify-center items-center w-56 sm:w-64 h-56 shadow-[#26292e] group hover:shadow-yellow-600 shadow-lg rounded-xl transition-all ease-in-out duration-300 sm:hover:-translate-y-1  max-w-sm mx-auto text-center  text-black text-xl  gap-4'>
                                                <div className='flex flex-col gap-10'>
                                                    <div className=' h-full  flex flex-col justify-center items-center'>
                                                        <div className='relative border-4 group-hover:border-yellow-600 rounded-full w-28 h-28 realtive'>
                                                            <p className='absolute top-7 left-7'>
                                                                {React.createElement(item.IconComponent, { className: 'text-yellow-600', size: 50 })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <h2 className='text-center text-lg px-2 text-white'>
                                                        {item.description}
                                                    </h2>
                                                </div>
                                            </div>

                                        )
                                    })}


                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                {/* second  */}
                <div className='flex flex-col  w-full px-10  bg-white  mx-auto '>
                    <div className='mt-5 flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl  text-black'>
                                2. How does EscrowPay work?
                            </h2>
                            <p className=' text-lg sm:text-xl  text-[#211d1d]'>
                                When using EscrowPay, both the freelancer and the entity agree to the terms of service.The entity deposits the agreed-upon funds into an escrow account.The freelancer completes the project or service as per the agreed terms.Once the entity approves the deliverables, the funds are released to the freelancer.If any disputes arise, our team mediates to find a fair resolution.
                            </p>
                        </div>


                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex max-w-4xl justify-center gap-12 flex-wrap '>
                                <img src={workImg} alt='workImg' />

                            </div>
                        </div>

                    </div>
                </div>

                {/* third  */}
                <div className='flex flex-col w-full px-10  bg-white  mx-auto  '>
                    <div className='pt-14 flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                3. Why should I use EscrowPay for freelancer transactions?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                EscrowPay provides a secure payment environment, ensuring that freelancers receive payment for their work.It gives entities peace of mind, knowing that funds will only be released when the project is successfully accomplished.EscrowPay reduces the risk of fraudulent activities or non-payment for both parties involved.
                            </p>
                        </div>


                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex max-w-4xl justify-center gap-12 flex-wrap '>
                                <img className='sm:max-w-xl' src={buySell} alt='workImg' />
                            </div>
                        </div>

                    </div>
                </div>

                {/* fourth  */}
                <div className='flex flex-col w-full px-10  pt-10 bg-white  mx-auto  '>
                    <div className='py-4 flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                4. How do I create an EscrowPay transaction?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                To create an EscrowPay transaction, you need to register an account on BharatEscrow.com.Once registered, you can initiate a new transaction by providing project details, agreed terms, and the escrow amount.The other party will receive a notification to review and accept the transaction details.
                            </p>
                        </div>


                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center pt-10'>
                            <Link to="/register" className='text-lg sm:text-2xl flex w-lg sm:max-w-4xl justify-center gap-12 flex-wrap bg-yellow-600  px-10 py-8 sm:px-28 sm:py-8 rounded-[500px] hover:text-yellow-600 hover:bg-[#211d1d] shadow-[#26292e] hover:shadow-yellow-600 shadow-lg  transition-all ease-in-out duration-300 hover:translate-y-5'>
                                REGISTER NOW
                            </Link>
                        </div>

                    </div>
                </div>


                {/* fifth  */}
                <div className='flex flex-col w-full px-10 bg-white  mx-auto  '>
                    <div className=' flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                5. Is there a fee for using EscrowPay?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                Yes, there is a small service fee for using EscrowPay services. The fee percentage may vary based on the transaction amount and other factors. You can find detailed information on our pricing page.
                            </p>
                        </div>

                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex w-lg max-w-4xl justify-center gap-12 flex-wrap '>
                                <img className='sm:max-w-lg object-cover' src={fees} alt='workImg' />
                            </div>
                        </div>

                    </div>
                </div>

                {/* sixth  */}
                <div className='flex flex-col w-full px-10 bg-white  mx-auto  '>
                    <div className=' flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                6. What payment methods are supported by EscrowPay?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                EscrowPay supports various payment methods, including credit/debit cards, bank transfers, and other electronic payment options. Please check the platform for the available payment methods in your region.
                            </p>
                        </div>

                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex w-lg max-w-4xl justify-center gap-12 flex-wrap '>
                                <img className='sm:max-w-lg object-cover' src={paymentImg} alt='workImg' />
                            </div>
                        </div>

                    </div>
                </div>

                {/* seventh  */}
                <div className='flex flex-col w-full px-10 bg-white  mx-auto  '>
                    <div className=' flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                7. What if there's a dispute during the project?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                In case of a dispute, both the freelancer and the entity can unveil evidence to support their claims. Our dispute resolution team will review the evidence and work towards a fair resolution.If an agreement cannot be reached, the escrowed funds will remain held until further resolution.
                            </p>
                        </div>

                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex w-lg max-w-4xl justify-center gap-12 flex-wrap pb-8 '>
                                <img className='sm:max-w-lg object-cover' src={disputeImg} alt='workImg' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* eight  */}
                <div className='flex flex-col w-full px-10 bg-white  mx-auto  '>
                    <div className=' flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                8. Is BharatEscrow.com a reliable platform?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                BharatEscrow.com is a reputable and trusted platform for escrow services. We prioritize the security of our users' transactions and have implemented various measures to ensure a safe experience.
                            </p>
                        </div>

                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex w-lg max-w-4xl justify-center gap-12 flex-wrap pb-8 '>
                                <img className='sm:max-w-lg object-cover' src={reliablePlatformImg} alt='workImg' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ninth  */}
                <div className='flex flex-col w-full px-10 bg-white  mx-auto  '>
                    <div className=' flex flex-col gap-10 justify-center items-center '>
                        <div className=' sm:w-8/12   '>
                            <h2 className='text-xl sm:text-2xl text-black'>
                                9. How do I withdraw funds from my EscrowPay account?
                            </h2>
                            <p className=' text-lg sm:text-xl text-[#211d1d]'>
                                Once funds are released from escrow, you can withdraw them to your linked bank account or payment method.
                            </p>
                        </div>

                        <div className='flex mx-auto w-full justify-center flex-col gap-10 items-center'>
                            <div className=' flex w-lg max-w-4xl justify-center gap-12 flex-wrap pb-8 '>
                                <img className='sm:max-w-lg object-cover' src={disputeImg} alt='workImg' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </section >
    )
}

export default Faq;
