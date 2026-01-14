// Array 1
const sam1 = ['cyber security', 'developer', 'programmer'];

// Array 2
const sam2 = ['designer', 'tester', 'manager'];

// Array 3
const sam3 = ['teacher', 'student', 'researcher'];

// Transformation function (20 maps)
function transformArray(arr) {
  return arr
    .map(role => 'krishna kumar is a ' + role)                // 1
    .map(sentence => sentence.toUpperCase())                  // 2
    .map(sentence => sentence + ' 🚀')                        // 3
    .map(sentence => sentence.replace('KRISHNA', 'Mr. KRISHNA')) // 4
    .map(sentence => `[${sentence}]`)                         // 5
    .map(sentence => sentence + ' ✅')                        // 6
    .map(sentence => sentence.toLowerCase())                  // 7
    .map(sentence => sentence + ' 🔥')                        // 8
    .map(sentence => sentence.replace('developer', 'coder'))  // 9
    .map(sentence => sentence + ' ✨')                        // 10
    .map(sentence => sentence.split('').reverse().join(''))   // 11
    .map(sentence => sentence + ' 🌟')                        // 12
    .map(sentence => sentence.replace(/a/g, '@'))             // 13
    .map(sentence => sentence + ' 💡')                        // 14
    .map(sentence => sentence.replace(/e/g, '3'))             // 15
    .map(sentence => sentence + ' 🎯')                        // 16
    .map(sentence => sentence.replace(/i/g, '1'))             // 17
    .map(sentence => sentence + ' 🏆')                        // 18
    .map(sentence => sentence.replace(/o/g, '0'))             // 19
    .map(sentence => '>>> ' + sentence + ' <<<');             // 20
}

// Apply to all three arrays
const result1 = transformArray(sam1);
const result2 = transformArray(sam2);
const result3 = transformArray(sam3);

console.log(result1);
console.log(result2);
console.log(result3);
