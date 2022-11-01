import { features, resources, company, icons } from '../data/footer';

function Footer() {
  return (
    <footer className='section-padding bg-neutral-very-dark-violet text-white flex justify-between py-28'>
      {/* Footer title */}
      <h1 className='font-bold text-2xl'>Shortly</h1>
      {/* Features */}
      <div className='footer-section'>
        <h2>{resources[0].title}</h2>
        <ul>
          {features[1].map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Resources */}
      <div className='footer-section'>
        <h2>{resources[0].title}</h2>
        <ul>
          {resources[1].map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Company */}
      <div className='footer-section'>
        <h2>{company[0].title}</h2>
        <ul>
          {company[1].map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Icons */}
      <div className='footer-section'>
        <ul className='flex gap-5'>
          {icons.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url}>
                  <img src={item.icon} alt='' />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
