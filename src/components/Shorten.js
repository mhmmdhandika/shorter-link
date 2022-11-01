function Shorten() {
  return (
    <section
      id='shorten'
      className=' section-padding mt-32 py-3 bg-neutral-light'
    >
      <form className='-mt-20 bg-primary-dark-violet bg-shorten-desktop bg-no-repeat bg-cover py-10 px-9 flex justify-between items-center rounded-xl'>
        <input
          type='text'
          placeholder='Shorten a link here...'
          className='outline-none w-full mr-5 px-8 py-3 rounded-xl'
        />
        <button
          type='submit'
          className='min-w-[200px] primary-button rounded-xl'
        >
          Shorten it!
        </button>
      </form>
      {/* TODO: create copied link component */}
    </section>
  );
}
export default Shorten;
