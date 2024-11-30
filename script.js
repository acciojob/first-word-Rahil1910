function firstWord(s) {
  // your code here
	let cntW=0;
	let ans="";
	for(let i=0;i<s.length;i++){
		if(s[i]==" "&&cntW==0){
			continue;
		}
		cntW++;
		ans+=s[i];
		if(s[i]==" "&&cntW>0){
			return ans;
		}
	}
}
 
// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
