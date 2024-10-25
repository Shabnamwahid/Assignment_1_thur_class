import cssStyle from"./contact.module.css";

console.log(cssStyle,"CSS-Style");


const ContactPage = () =>{
    return(
        

//  <div style={{ textAlign: 'center' }}> 
//      <h1 className={cssStyle.purple}>

// <p>This is Contact Page</p>

//   </h1>
   
  <div className='min-h-screen flex flex-col items-center justify-center p-6'>
      <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
      <form className='w-full max-w-md'>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Your Name'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Your Email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            placeholder='Your Message'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            // rows='4'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Send
        </button>
      </form>
    </div>
  );
};



export default ContactPage;