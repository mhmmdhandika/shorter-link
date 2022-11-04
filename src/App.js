import { createContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import {
  Navbar,
  Header,
  Shorten,
  Tracking,
  Starter,
  Footer,
} from './components';
import { checkWebStorage, loadLinksFromlocalStorage } from './features/storage';

const KEY_LINKS_STORAGE = 'KEY_LINKS';
const LinkContext = createContext(null);

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    // check browser if it's support or not
    if (checkWebStorage()) {
      swal({
        icon: 'warning',
        title: "Doesn't support web storage",
        text: "Your browser doesn't support web storage. It's seems you can't save list of copied in your browser.",
      });
      return;
    } else {
      // load links
      const loadLinks = localStorage.getItem(KEY_LINKS_STORAGE);
      console.log(loadLinks);
      if (loadLinks) {
        const parsedFromJSON = JSON.parse(loadLinks);
        console.log(3);
        setLinks(parsedFromJSON);
        console.log(links);
      } else {
        const convertedToJSON = JSON.stringify(links);
        console.log('2');
        localStorage.setItem(KEY_LINKS_STORAGE, convertedToJSON);
      }
    }
  }, []);

  // useEffect(() => {
  //   console.log('save to session');
  //   const convertedToJSON = JSON.stringify(links);
  //   localStorage.setItem(KEY_LINKS_STORAGE, convertedToJSON);
  // }, [links]);

  return (
    <LinkContext.Provider value={{ KEY_LINKS_STORAGE, links, setLinks }}>
      <Navbar />
      <Header />
      <Shorten />
      <Tracking />
      <Starter />
      <Footer />
    </LinkContext.Provider>
  );
}

export default App;
export { LinkContext };
