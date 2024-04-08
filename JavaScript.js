// function converFirst(str) {
//   const capatalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   return capatalized;
// }

function converFirst(str) {
  const capatalized = str.replace(/^./, str[0].toUpperCase());
  return capatalized;
}
const string = prompt("Enter a string");
const result = converFirst(string);
document.write(result);