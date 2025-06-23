const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What Is The Difference between StopPropagation And PreventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const specialWords = [
  "StopPropagation",
  "PreventDefault",
  "OO",
  "NaN",
  "API",
  "==",
  "===",
  "JSONP",
];

function titleCased() {
  return tutorials.map(title => {
    return title
      .split(" ")
      .map(word => {
        const punctuation = word.match(/[^\w=]+$/);
        const cleanWord = word.replace(/[^\w=]/g, "").toLowerCase(); // lowercase first

        const specialMatch = specialWords.find(
          special => special.toLowerCase() === cleanWord
        );

        const formattedWord = specialMatch
          ? specialMatch
          : cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);

        return punctuation ? formattedWord + punctuation[0] : formattedWord;
      })
      .join(" ");
  });
}
