// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function remove_character(str, char_pos) {
  var part1 = str.substring(0, char_pos);
  var part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}
console.log(remove_character("hoc lap trinh", 3));
