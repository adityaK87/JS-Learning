//QUESTION - 1
// make a function that reverse the number
function reverse(value) {
    var r = value;
    var t = r.toString().split('').reverse().join('');
    // console.log(t);
}

reverse(123);
//first we have to convert number into string data the split then reverse and the join 



//QUESTION - 2
// Write a JavaScript function that returns a passed string with letters in alphabetical order
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

var string = "webmaster"
function sort(string) {
    return (string.split('').sort().join(''))
    // return console.log(string.split('').sort().join(''))
}
sort(string)


// QUESTION - 3
// Write a JavaScript function that accepts a string as a parameter and counts the  number of vowels within the string

//first code 
// function vowelCount(sentence) {
//     var vowels = 'aeiouAEIOU';
//     var vowel_count = 0;

//     for (var x = 0; x < sentence.lenght; x++) {
//         if (vowels.indexOf(sentence[x]) !== -1) {
//             vowel_count += 1;
//         }

//     }
//     return console.log(vowel_count);
// }
// vowelCount("the quick brown fox");

// //second code
// function vowel_count(str1) {
//     var vowel_list = 'aeiouAEIOU';
//     var vcount = 0;

//     for (var x = 0; x < str1.length; x++) {
//         if (vowel_list.indexOf(str1[x]) !== -1) {
//             vcount += 1;
//         }

//     }
//     return console.log(vcount);
// }
// vowel_count("The quick brown fox");



// const MyComponent = () => {
//     const [currentTab,setCurrentTab] = getTabFromPath(location.pathname);
 
//     useEffect(() => {
//       // do something
//     }, [currentTab])
//  }

//  MyComponent();
 const pdfWindow = window.open("");
pdfWindow?.document.write(
 `<iframe width='100%' height='100%' src='data:application/pdf;base64,${pdf.base64}'></iframe>`
)