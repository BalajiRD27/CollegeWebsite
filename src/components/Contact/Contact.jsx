import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msg-icon.png'
import locationicon from '../../assets/location-icon.png'
import mailicon from '../../assets/mail-icon.png'
import phoneicon from '../../assets/phone-icon.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a54f01c-2c69-4d51-b868-979ebceda56d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Message Sent Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msgicon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mailicon} alt="" />balajirdb45@gmail.com</li>
                <li><img src={phoneicon} alt="" />+91 9994017082</li>
                <li><img src={locationicon} alt="" /> Sulur,Coimbatore</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input name='name' type="text" placeholder='enter your name' required />
            <label>Phone Number</label>
            <input name='phone' type="tel" placeholder='enter your phone number' required />
            <label>Your Message</label>
            <textarea name="message" rows='6' placeholder='enter your message' required></textarea>
            <button className='btn dark-btn' type='submit'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact