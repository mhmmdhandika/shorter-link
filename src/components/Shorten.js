function Shorten() {
  return (
    <section
      id='shorten'
      className=' section-padding mt-32 py-3 bg-neutral-light'
    >
      <form className='-mt-20 bg-primary-dark-violet bg-shorten-mobile bg-no-repeat bg-right-top py-10 px-9 flex flex-col gap-5 justify-between items-center rounded-xl lg:bg-shorten-desktop lg:bg-cover lg:flex-row'>
        <input
          type='text'
          placeholder='Shorten a link here...'
          className='outline-none w-full px-5 py-3 rounded-xl lg:flex-auto'
        />
        <button
          type='submit'
          className='min-w-[200px] w-full primary-button rounded-xl lg:flex-1'
        >
          Shorten it!
        </button>
      </form>
      {/* TODO: create copied link component */}
    </section>
  );
}
export default Shorten;
