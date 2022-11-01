import pagesList from '../data/pages.json';

function Navbar() {
  return (
    <nav className='section-padding py-10 flex justify-between items-center gap-x-20 font-bold text-[1.125rem]'>
      <h1 className='font-bold text-primary-dark-violet text-3xl'>Shortly</h1>
      <ul className='mr-auto text-sm flex gap-x-6 text-neutral-grayfish-violet'>
        {pagesList.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
      <div id='user-sign-in' className='text-neutral-grayfish-violet text-sm'>
        <button className='px-8 py-3'>Login</button>
        <button className='px-8 py-3 primary-button'>Sign Up</button>
      </div>
    </nav>
  );
}
export default Navbar;
