// Initialize button with user's preferred color
let makeLink = document.getElementById("makeLink");

// When the button is clicked, inject setPageBackgroundColor into current page
makeLink.addEventListener("click", async () => {
  let tab = await getCurrentTab();
  console.log(`Tab ID:`, tab.id);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      console.log(`Inside button click`);
      //DO WORK HERE
    },
  });
});

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}