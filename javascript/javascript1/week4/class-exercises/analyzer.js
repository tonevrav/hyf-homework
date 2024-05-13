// DATA
const positiveWordsList = [
    "amazing",
    "awesome",
    "beautiful",
    "brilliant",
    "charming",
    "delightful",
    "excellent",
    "fantastic",
    "glorious",
    "graceful",
    "happy",
    "joyful",
    "lovely",
    "marvelous",
    "perfect",
    "pleasant",
    "splendid",
    "superb",
    "terrific",
    "wonderful"
  ];
  
  const negativeWordsList = [
    "awful",
    "bad",
    "boring",
    "dreadful",
    "horrible",
    "lousy",
    "miserable",
    "nasty",
    "painful",
    "pathetic",
    "sad",
    "terrible",
    "unpleasant",
    "upsetting",
    "vile",
    "wicked",
    "worst",
    "yucky",
    "abhorrent",
    "atrocious"
  ];
  
// LOGIC

function getArrayOfOverlappingWords(sentenceAsArray, wordsList) {
  const words = [];

  for(let i = 0; i < sentenceAsArray.length; i++) {
    if(wordsList.includes(sentenceAsArray[i])) {
      words.push(sentenceAsArray[i]);
    }
  }

  return words;
}

function getScore(sentence, arrayOfPositiveWords, arrayOfNegativeWords) {
  const sentenceArray = sentence.split(" ");

  const positiveWords = getArrayOfOverlappingWords(sentenceArray, arrayOfPositiveWords);
  const negativeWords = getArrayOfOverlappingWords(sentenceArray, arrayOfNegativeWords);

  return {
    score: positiveWords.length - negativeWords.length,
    positiveWords,
    negativeWords,
  }
}

// RENDER

const score = getScore("Today is beautiful and fantastic weather!", positiveWordsList, negativeWordsList);
console.log(score);

// Example of result:
// {
//   score: 3,
//   positiveWords: ['happy', 'awesome', 'super'],
//   negativeWords: [],
// }