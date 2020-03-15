//determine if a one to one mapping exists from string s1 to another string s2
function mapcheck(...args) {
  const str1 = args[0];
  const str2 = args[1];
  //if str1.length !== str2.length print false
  if (str1.length !== str2.length) {
    console.log(false);
    return;
  }
  //Time Complexity O(1)

  //create empty object to store SEEN character and for quick lookup time
  const charExist = {};

  //create variable to store new string
  let newStr = "";

  //Iterate over str1 and check if char exists in charExist object.
  //If char DOES NOT EXIST than save char in the object and add the char to the end of newStr.
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (!charExist[char]) {
      charExist[char] = 1;
      newStr += char;
    }
  }
  //Time Complexity: O(n)

  //Now check if the length of newStr === str2
  if (newStr.length === str2.length) console.log(true);
  else console.log(false);
}

//Best case time complexity : O(1)
//Worse Case time complexity: O(n)

mapcheck(...process.argv.slice(2));
