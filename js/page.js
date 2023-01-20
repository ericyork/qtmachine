// const qTexts = document.getElementsByTagName('blockquote'); 
// const qAuthors =  document.getElementsByTagName('figcaption'); 
// const qSources =  document.getElementsByTagName('cite');
// const qDates = document.getElementsByClassName('dates');
// const qTags =  document.getElementsByClassName('tags');


// window.addEventListener('load', () => {
//     console.log("waiting...")
// });

const quoteFactory = (text, author, source, path, date, tag) => {
  const giveQuote = () => console.log( text + ', ' + author );
  return { text, author, source, path, date, tag, giveQuote };
};

const firstOne = quoteFactory(allQuotes[1].text, allQuotes[1].author);

firstOne.giveQuote();