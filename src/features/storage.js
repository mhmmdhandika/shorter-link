function checkWebStorage() {
  if (typeof Storage !== 'undefined') {
    return false;
  }
  return true;
}

function loadLinksFromSessionStorage(key, data, setData) {
  if (sessionStorage.getItem(key)) {
    const loadLinks = sessionStorage.getItem(key);
    const parsedFromJSON = JSON.parse(loadLinks);
    setData(parsedFromJSON);
    console.log(parsedFromJSON);
  } else {
    const convertedToJSON = JSON.stringify(data);
    sessionStorage.setItem(key, convertedToJSON);
  }
}

export { checkWebStorage, loadLinksFromSessionStorage };
