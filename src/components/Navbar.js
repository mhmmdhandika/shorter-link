import { useRef } from 'react';
import pagesList from '../data/pages.json';

function Navbar() {
  const navContent = useRef(null);

  const handleHamburger = e => {
    navContent.current.classList.toggle('hidden');
  };

  return (
    <nav className='section-padding bg-white sticky top-0 z-50 w-full font-bold text-[1.125rem] py-5 lg:py-9 flex justify-between items-center gap-x-20'>
      <h1 className='font-bold text-primary-dark-violet text-3xl'>Shortly</h1>
      <div className='hamburger-icon' onClick={handleHamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className='hidden grow text-lg text-center text-white absolute top-20 p-10 left-7 right-7 bg-primary-dark-violet rounded-xl lg:text-sm lg:p-0 lg:text-neutral-grayfish-violet lg:flex lg:bg-transparent lg:static justify-between items-center'
        ref={navContent}
      >
        <ul className='mr-auto flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 lg:text-sm'>
          {pagesList.map((item, index) => {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <hr className='my-6 lg:hidden' />
        <div id='user-sign-in' className='flex flex-col gap-y-6 lg:flex-row'>
          <button className='px-8 lg:py-3 '>Login</button>
          <button className='px-8 py-3 primary-button'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
