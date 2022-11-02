import { listTrack } from '../data/track';

function Tracking() {
  return (
    <section id='tracking' className='section-padding py-28 bg-neutral-light'>
      <div className='mb-16 text-center'>
        <h1 className='font-bold text-4xl text-primary-dark-violet'>
          Advanced Statistics
        </h1>
        <p className='text-neutral-grayfish-violet w-[400px] mx-auto my-4'>
          Track how your links are performing across the web with our advanced
          statictics dashboard.
        </p>
      </div>
      <div className='track flex justify-evenly items-baseline gap-10 h-72'>
        {/* TODO: */}
        {listTrack.map((item, index) => {
          return (
            <article key={index} className='bg-white p-11 rounded-lg'>
              <div className='bg-primary-dark-violet w-[80px] h-[80px] rounded-[50%] flex items-center justify-center -mt-20'>
                <img src={item.icon} alt='Track icon' />
              </div>
              <h1 className='my-4 text-neutral-very-dark-violet font-semibold text-xl'>
                {item.name}
              </h1>
              <p className='text-sm text-neutral-grayfish-violet'>
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export default Tracking;
