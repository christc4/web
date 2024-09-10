async function fetchSiteIndex() {
  const response = await fetch("/s.json");
  return await response.json();
}

function filterResults(query, results) {
  return results.filter(result => result.toLowerCase().includes(query.toLowerCase()));
}

function displayResults(results) {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";

  results.slice(0, 4).forEach(result => {
    const item = document.createElement("div");
    item.className = "resultItem";
    
    // Extracting the path after the first slash
    const parts = result.split('/');
    const displayPath = parts.slice(1).join('/'); // Removes the subdomain and domain part

    item.innerHTML = `<a href="/${result}">${displayPath}</a>`;
    searchResultsContainer.appendChild(item);
  });
}

document.getElementById("searchBar").addEventListener("input", async function() {
  const query = this.value;
  const searchResultsContainer = document.getElementById("searchResults");
  
  if (query === "") {
    searchResultsContainer.innerHTML = "";
    return;
  }
  
  const siteIndex = await fetchSiteIndex();
  const filteredResults = filterResults(query, siteIndex);
  displayResults(filteredResults);
});

