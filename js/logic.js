window.addEventListener('load', () => {
  displayQuote();
  let counter = document.getElementById('count');
  counter.innerText = data.length;
});

function getQuote() {
  const seed = Math.random();
  let selected = document.getElementById('select').value;
  const filteredData = data.filter(quote => quote.tag === selected);
  if (selected != 'All') {
    const i = (Math.floor(seed * filteredData.length));
    return filteredData[i];;
  } else {
    const i = (Math.floor(seed * data.length));
    return data[i];
  }
};
const quoteFactory = (obj) => {
  const makeQuote = 
    `<article class="quote">
      <button class="close" onClick="this.parentElement.remove();">&minus;</button>
      <figure>
        <blockquote cite="${obj.path}">${obj.text}</blockquote>
        <figcaption>
          <span class="author">${obj.author}</span> 
          <cite>
            <a href="${obj.path}">${obj.source}</a>
          </cite>
        </figcaption>
      </figure>
      <footer>
        <span class="dates">${obj.date}</span>
        <span class="tags">${obj.tag}</span>
      </footer>
    </article>`;
    return makeQuote;
};

function displayQuote() {
  let parentNode = document.getElementById('main');
  parentNode.insertAdjacentHTML('beforeend', quoteFactory(getQuote()));
}

// Plan:
// create a seed number
// determine whether to filter the array
// if filtered, filter the array and return a random quote
// if not filtered, return a random quote from the full array
// map the quote data into a template
// insert the template node into the page