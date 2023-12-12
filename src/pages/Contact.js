import React from 'react'
import contactImg from "../assets/contact/contact.jpg"
import ContactForm from '../components/Form'
import Footer from '../components/Footer'


const Contact = () => {
    return (
        <>
            <section >
                <div className='flex flex-col sm:flex-row'>
                    <div className='relative  md:block'>
                        <img src={contactImg} alt='contactImg1' />
                        <p className='uppercase absolute left-20 bottom-16 text-xl sm:text-2xl md:text-5xl'>Contact us</p>
                    </div>
                </div>

                <div className='container mb-10 mx-auto py-5 flex  flex-col justify-center items-center'>

                    <h1 className='mt-10 sm:mt-0 hoverEffect text-3xl sm:text-4xl md:text-5xl sm:w-96 mb-10 text-center font-bold'>
                        Get in Touch
                    </h1>

                    <div className='py-5 flex flex-col sm:flex-row justify-center gap-24 w-full sm:flex-wrap items-center'>
                        {/* left  */}
                        <iframe
                            title='map'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.96412105256246!2d77.07323157128543!3d28.586996230465697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bee299b98b5%3A0xd5e467baf55d19a8!2sE%20596%2C%20Rd%20No.%20224%2C%20Sector%207%2C%20Block%20F%2C%20Palam%20Extension%2C%20Palam%2C%20New%20Delhi%2C%20Delhi%2C%20110077!5e0!3m2!1sen!2sin!4v1694668395599!5m2!1sen!2sin"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='h-[300px] w-full lg:w-1/3 px-4'
                        />

                        {/* right  */}
                        <div className='w-full lg:w-1/3 px-4 sm:px-0 h-[250px] gap-5'>
                            <ContactForm />
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>

    )
}

export default Contact