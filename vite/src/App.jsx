import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const App = () => {
  const form = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_rz8ib6q',
        'template_y48rhry',
        form.current,
        'mwGIpT0n6q0XkD56U'
      )
      .then(
        response => {
          console.log(response);
        },
        err => {
          console.log(err);
        }
      );
  }
  return (
    <div className='flex justify-center items-center h-screen text-white'>
      <form onSubmit={handleSubmit} className='bg-slate-700 p-5' ref={form}>
        <div className='m-2'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='to_name'
            className='bg-slate-800 ml-2 p-1 rounded-md'
          />
        </div>
        <div className='m-2'>
          <label htmlFor='surname'>Surname:</label>
          <input
            type='text'
            id='surname'
            className='bg-slate-800 ml-2 p-1 rounded-md'
          />
        </div>
        <div className='m-2'>
          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            id='age'
            name='message'
            className='bg-slate-800 ml-2 p-1 rounded-md'
          />
        </div>
        <textarea name="" id=""></textarea>
        <button type='submits' className='bg-white text-black p-2'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;