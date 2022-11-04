import { createContext, useEffect } from 'react';
import swal from 'sweetalert';
import {
  Navbar,
  Header,
  Shorten,
  Tracking,
  Starter,
  Footer,
} from './components';
import { useStateWithCallback } from './custom-hooks/useStateWithCallback';
import { checkWebStorage, loadLinksFromLocalStorage } from './features/storage';

const KEY_LINKS_STORAGE = 'KEY_LINKS';
const LinkContext = createContext(null);

function App() {
  const [links, setLinks] = useStateWithCallback([]);

  useEffect(() => {
    // check browser if it's support or not
    if (!checkWebStorage()) {
      swal({
        icon: 'warning',
        title: "Doesn't support web storage",
        text: "Your browser doesn't support web storage. It's seems you can't save list of copied in your browser.",
      });
      return;
    }

    loadLinksFromLocalStorage(KEY_LINKS_STORAGE, links, setLinks);
  }, []);

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
