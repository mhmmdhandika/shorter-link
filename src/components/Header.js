import IllustrationWorking from '../assets/images/illustration-working.svg';

function Header() {
  return (
    <header className='my-8 py-20 relative section-padding grid grid-cols-2 items-center overflow-hidden'>
      <div>
        <h1 className='text-neutral-very-dark-violet text-7xl font-bold leading-[5rem]'>
          More than just shorter links
        </h1>
        <p className='text-neutral-grayfish-violet text-xl'>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='mt-8 primary-button'>Get Started</button>
      </div>
      <img
        src={IllustrationWorking}
        width={700}
        alt='Illustration working'
        className='absolute top-50 -right-20'
      />
    </header>
  );
}
export default Header;
