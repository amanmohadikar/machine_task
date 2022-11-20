/* Defination => A regular expression  is a sequence of character that forms a search pattern.
 When we search for data in a text, we can use this search pattern to describe what we are searching for.
Regular expression can be a single character or more complited pattern.
*/



let sentence = "People often write hello 100 world while hello 300 world programming"
// find hello world in a string
// console.log(sentence.match(/hello world/))

// find miltiple hello world in a string
// console.log(sentence.match(/hello world/g))

// find multiple hello world with case insesitive in a string
// console.log(sentence.match(/hEllO worlD/gi))

// find capital words in string
// console.log(sentence.match(/[A-Z]/g))

// find digit in a string
// console.log(sentence.match(/\d/g))

// find full numbers
// console.log(sentence.match(/\d+/g))

// replace number to string
// console.log(sentence.replace(/\d+/g, "program"))


