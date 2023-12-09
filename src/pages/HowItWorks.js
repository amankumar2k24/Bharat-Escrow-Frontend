import React from 'react';
import loginSignup from "../assets/howitworks/LoginSignUp.jpg";
import CertifyingBuyer from "../assets/howitworks/CertifyingBuyer.jpg";
import MultiplePayment from "../assets/howitworks/MultiplePaymentMethods.jpg"
import Security from "../assets/howitworks/Security.jpg"
import Services from "../assets/howitworks/Services.jpg"
import GetInTouch from '../components/GetInTouch';
import Footer from '../components/Footer';

const sections = [
    {
        title: "Create an account Signup/Login",
        content: "It's easy as buying the goods/services from online store. A buyer and seller open an escrow account on our site once they decide to complete a transaction. The buyer shows their commitment by depositing the agreed-upon sum of money into the escrow account. The seller continues to carry out their obligations as stated in the agreement in the meantime.",
        image: loginSignup,
        reversed: false
    },
    {
        title: "Certifying Buyer",
        content: "Our team continuously monitors the transaction throughout to make sure that both sides carry out their obligations in the stipulated time frame. The money is released to the vendor after the buyer certifies that they have got the goods or service as promised. This technique protects both parties from potential fraud and deception. since, the transaction are routed through a secure channel and both parties can carried out the job as per the agreed agreement.",
        image: CertifyingBuyer,
        reversed: true
    },
    {
        title: "Multiple Payment Methods",
        content: "We are aware that each transaction is distinct. We provide workable alternatives as a result to meet multiple payment options for both parties. Our platform enables you to tailor the terms based on your unique needs, whether you require a one-time payment or prefer recurring payments. We work to develop financial agreements customized to your needs because we believe they should be as every business have a unique needs and requirements.",
        image: MultiplePayment,
        reversed: false
    },
    {
        title: "Security & Privacy",
        content: "We are steadfast in our commitment to security and privacy policy of our clientel. With the aid of our RBI-approved banking partners, we use cutting-edge encryption technology and stringent verification procedures to protect your personal and financial information. You can rely on BharatEscrow to always protect your sensitive information. We categorically do mean 'convenient, secure and reliable' when we use that word.",
        image: Security,
        reversed: true
    },
    {
        title: "Excellent Customer Service",
        content: "In addition to our robust security measures, we also prioritize In addition to our robust security measures, we also prioritize excellent customer service. Our dedicated realtionship manager is available to assist you every step of the way, addressing any concerns or queries you may have. We value your satisfaction and aim to provide a seamless experience on our platform. Experience a new level of trust and security in your online transactions by signing up with BharatEscrow today. We're here to safeguard your financial interests and make sure that your transactions are conducted with trust, whether you're a buyer or a seller.",
        image: Services,
        reversed: false
    },

];

const Section = ({ title, content, image, reversed }) => (
    <div className={`flex flex-col justify-center items-center ${reversed ? "sm:flex-row-reverse" : "sm:flex-row"} sm:flex-wrap sm:justify-evenly`}>
        <div className='flex flex-col justify-center gap-4 mb-8 w-11/12  sm:w-[280px] md:w-[380px] px-1 sm:px-0'>
            <h2 className='text-lg font-semibold sm:text-xl md:text-2xl underline text-yellow-600'>{title}</h2>
            <h3 className='text-justify'>{content}</h3>
        </div>
        <div className='w-10/12 sm:w-[300px] md:w-[350px] h-[300px] md:h-[350px] px-4 sm:px-0'>
            <img className='object-cover w-full h-full' src={image} alt={title} />
        </div>
    </div>
);

const HowItWorks = () => (
    <section className='howItWork'>
        <div className='max-w-4xl my-20 flex flex-col mx-auto text-black px-1 '>
            <div className='mt-14 mb-4'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-roboto'>How does BharatEscrow work?</h1>
            </div>
            {sections.map((item, index) => <Section key={index} {...item} />)}
        </div>
        <GetInTouch />
        <Footer />
    </section>

);

export default HowItWorks;


