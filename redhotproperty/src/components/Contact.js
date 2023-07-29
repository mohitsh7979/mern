import React from 'react'

export default function Contact() {
  return (
    <div className='contact'>

      <div className='inner-contact'>
           
           <div className='inner-contact-box' id='inner-contact-box_1'>
            <h5>_ Contact Us _ </h5>
            <h1>Feel free to contact with us for any kind of query.</h1>
            <p>Thank you for your interest in hiring Red hot property Service Company. We consider communication with the customer</p>
            <div className='contact_details'>
            <div>
              <h3>Phone Number</h3>
              <p>Head Office:(210)123 451</p>
              <p>Help line:44 321</p>
            </div>
            <div>
            <h3>Mail Address</h3>
              <p>mohit@gmail.com</p>
              <p>info@gmail.com</p>
            </div>
            </div>
           </div>
           <div className='inner-contact-box' id='inner-contact-box_2'>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Email'/>
            <input type='number' placeholder='Number'/>
            <textarea  cols={50} rows={10} placeholder='Message'></textarea>
            <input type='submit'/>

           </div>

      </div>

    
      
    </div>
  )
}
