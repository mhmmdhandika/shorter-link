function checkWebStorage() {
  if (typeof Storage !== 'undefined') {
    return true;
  }
  return false;
}

function loadLinksFromLocalStorage(key, data, setData) {
  const loadLinks = localStorage.getItem(key);
  if (loadLinks === null) {
    const convertedToJSON = JSON.stringify(data);
    localStorage.setItem(key, convertedToJSON);
  } else {
    const parsedFromJSON = JSON.parse(loadLinks);
    setData(parsedFromJSON);
  }
}

export { checkWebStorage, loadLinksFromLocalStorage };
