import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { LinkContext } from '../App';

const baseAPI = 'https://api.shrtco.de/v2/';

function Shorten() {
  const { KEY_LINKS_STORAGE, links, setLinks } = useContext(LinkContext);
  const [inputLink, setInputLink] = useState('');
  const [formState, setFormState] = useState(false);
  const [copyText, setCopyText] = useState({
    isCopied: false,
    text: '',
  });

  const copyTextToClipboard = async text => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    }
    return document.execCommand('copy', true, text);
  };

  const handleCopyClick = textCopy => {
    copyTextToClipboard(textCopy)
      .then(() => {
        setCopyText({ text: textCopy, isCopied: true });
        setTimeout(() => {
          setCopyText({ textCopy: '', isCopied: false });
        }, 2000);
      })
      .catch(err => {
        swal({
          icon: 'error',
          title: "Something's wrong",
          text: err,
        });
      });
  };

  const getShortLink = e => {
    e.preventDefault();
    if (inputLink === '') {
      swal({
        icon: 'warning',
        title: 'Empty url input',
        text: 'Please provide at least 1 URL',
      });
    } else {
      async function fetchData() {
        const fetchAPI = await fetch(`${baseAPI}shorten?url=${inputLink}`);
        const data = await fetchAPI.json();

        if (data.ok) {
          setLinks([...links, data.result], (prevValue, newValue) => {
            const convertedToJSON = JSON.stringify(newValue);
            localStorage.setItem(KEY_LINKS_STORAGE, convertedToJSON);
          });
        } else {
          swal({
            icon: 'error',
            title: "Something's wrong",
            text: data.error,
          });
        }
      }

      try {
        fetchData();
      } catch (error) {
        swal({
          icon: 'error',
          title: 'Error',
          text: error,
        });
      }
    }
  };

  return (
    <section
      id='shorten'
      className=' section-padding mt-32 py-3 bg-neutral-light'
    >
      <form className='-mt-20 bg-primary-dark-violet bg-shorten-mobile bg-no-repeat bg-right-top py-6 px-5 flex flex-col gap-5 justify-between items-center rounded-xl lg:bg-shorten-desktop lg:bg-cover lg:flex-row lg:py-10 lg:px-14'>
        <div className='w-full relative mb-5 lg:mb-0'>
          <input
            type='url'
            placeholder='Shorten a link here...'
            className={`outline-none w-full px-5 py-3 rounded-lg border-2 border-white peer lg:rounded-xl lg:flex-auto ${
              formState && 'invalid:border-secondary-red'
            }`}
            value={inputLink}
            onChange={e => {
              setFormState(true);
              setInputLink(e.target.value);
            }}
            required
          />
          <p
            className={`invisible mt-1 absolute w-full justify-self-start text-sm text-secondary-red ${
              formState && 'peer-invalid:visible'
            }`}
          >
            Please add a link
          </p>
        </div>
        <button
          type='submit'
          className='min-w-[200px] w-full primary-button border-2 border-primary-cyan rounded-lg lg:rounded-xl lg:flex-1'
          onClick={getShortLink}
        >
          Shorten it!
        </button>
      </form>
      {links.map((item, index) => {
        return (
          <div
            className='copied-link bg-white flex flex-col gap-5 rounded-xl justify-between items-center my-5 py-6 px-9 lg:flex-row'
            key={index}
          >
            <div className='prev-link'>{item.original_link}</div>
            <div
              className='shorted-link text-primary-cyan grow text-end'
              onCopy={() => {
                setCopyText({ ...copyText, isCopied: true });
                setTimeout(() => {
                  setCopyText({ ...copyText, isCopied: false });
                }, 2000);
              }}
            >
              {item.full_short_link}
            </div>
            <button
              className={`copy-link primary-button w-full rounded-lg lg:rounded-xl lg:w-[120px] ${
                copyText.text === item.full_short_link &&
                'bg-primary-dark-violet text-white'
              }`}
              onClick={() => handleCopyClick(item.full_short_link)}
            >
              {copyText.text === item.full_short_link ? 'Copied!' : 'Copy'}
            </button>
          </div>
        );
      })}
    </section>
  );
}
export default Shorten;
