import React, {useState} from 'react'
import axios from 'axios';

const SendingEmail = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
    e.preventDefault();

    // Owners EmailJs service ID, template ID, and public key
    const serviceId = 'service_z756ars';
    const templateId = 'template_q25hgub'
    const publicKey = 'oyEluMZ5i8XO6M_50'

    // creating an object that contains all the data and tempalte params
    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        templateParams: {
            from_name: name,
            from_email: email,
            to_name: 'Owner',
            message:message,
        }
    };

    //Sending the email by using axios.post()
    try {
        const res = await axios.post('https://api.emailjs.com/api/v1.0/email', data);
        console.log(res.data);
        setName('');
        setEmail('');
        setMessage('');
    } catch (err) {
        console.log(err.message);
    }
}

  return (
    <form onSubmit={handleSubmit}
    className='flex flex-col w-[400px] h-[400px] md:w-[600px]'>
        <label for='name' className='text-semibold inline-block text-lg my-4 mx-2'> Full Name:
        <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} 
        className='ml-4 bg-primary border-[1px] border-slate-500 rounded-md outline-none focus:shadow-md
        focus:shadow-hoverColor duration-200'/>
        </label>
        <label for='email' className='text-semibold inline-block text-lg my-4 mx-2'> Email: 
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
        className='ml-4 bg-primary border-[1px] border-slate-500 rounded-md outline-none focus:shadow-md
        focus:shadow-hoverColor duration-200'/>
        </label>
        <textarea col='30' row='10' value={message} onChange={(e) => setMessage(e.target.value)}
        placeholder='Write Your Message Here! '
        className='h-[200px] mx-2 bg-primary text-textColor outline-none border-[1px] border-slate-500
        rounded-md focus:shadow-md focus:shadow-hoverColor'></textarea>

        <button type='submit' className='w-[200px] my-4 mx-2 bg-hoverColor rounded-2xl py-1
        font-semibold hover:shadow-md hover:shadow-textColor active:text-primary'>Send</button>

    </form>
  )
}

export default SendingEmail