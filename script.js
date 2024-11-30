function firstWord(s) {
  // your code here
	let ans="";
	let foundWord = false;
	for(let i=0;i<s.length;i++){
		if(s[i]==" "&& !foundWord){
			continue;
		}
		if (s[i] !== " ") {
			ans += s[i]; // Add characters to the answer
		    foundWord = true; // Mark that we have found the first word
	    } else if (s[i] === " " && foundWord) {
		    return ans;
    }
	}
}
  
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
