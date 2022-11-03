import IllustrationWorking from '../assets/images/illustration-working.svg';

function Header() {
  return (
    <header className='mt-8 mb-44 section-padding text-center flex flex-col gap-5 items-center overflow-hidden lg:text-start lg:flex-row'>
      <img
        src={IllustrationWorking}
        alt='Illustration working'
        className='-mr-44 sm:w-[600px] lg:order-last'
      />
      <div className='mt-6'>
        <h1 className='grow text-neutral-very-dark-violet text-[2.5rem] font-bold leading-[3.7rem] lg:leading-[5rem] lg:text-7xl'>
          More than just shorter links
        </h1>
        <p className='text-neutral-grayfish-violet my-4 text-xl'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='my-4 primary-button'>Get Started</button>
      </div>
    </header>
  );
}
export default Header;
