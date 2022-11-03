import { createContext, useState } from 'react';
import {
  Navbar,
  Header,
  Shorten,
  Tracking,
  Starter,
  Footer,
} from './components';

const LinkContext = createContext(null);

function App() {
  const [links, setLinks] = useState([]);

  return (
    <LinkContext.Provider value={{ links, setLinks }}>
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
