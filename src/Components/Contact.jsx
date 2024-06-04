import React, { useState } from 'react'
import './Contact.css'

function Contact() {
    const [user, setUser] = useState(
        {
        Name: '', Email: '', Subject: '', Message:''
        })

    let name, value
    const data = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
    }

  return (
    <div className="contact-container">
        <div className="content">
            <h2># Contact us</h2>
            <div className="form">
                <form method='POST'>
                    <input type="text" name='Name' value={user.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}/>
                    <input type="email" name='Email' value={user.Email} placeholder='Enter Your E-mail' required autoComplete='off' onChange={data}/>
                    <input type="text" name='Subject' value={user.Subject} placeholder='Enter Your Subject' required autoComplete='off' onChange={data}/>
                    <textarea name="Message" value={user.Message} placeholder='Your Message' required autoComplete='off' onChange={data}></textarea>
                    <button type='submit' onClick={()=>{alert("The messsage has been sent successfully")}}>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
