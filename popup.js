async function createLinks() {
  alert('HEY MAN!')
  //DO WORK HERE
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab.id || -1;
}

document.getElementById('makeLink').addEventListener('click', createLinks);