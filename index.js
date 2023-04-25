import emoji from 'node-emoji';

console.log('Starting generating emoji');

const emojiName = emoji.random();
// console.log('random emoji generated');
let userInput = process.argv[2];

if (emojiName === undefined) {
}
const foundEmoji = emoji.find(userInput);

if (!emojiName) {
  console.log('random emoji generated');
} else if (foundEmoji) {
  console.log(foundEmoji.emoji);
} else {
  console.log('Invalid emoji name');
}

// console(process.argv[2])
console.log(foundEmoji.emoji);
