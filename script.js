//your JS code here. If required.
function mapLetters(s) {
	let obj={}
	for(let x in s){
	  if(obj[s[x]]==undefined)
		obj[s[x]]=[+x];
		else
		obj[s[x]].push([+x]);
	}
	return obj;
}

const str = prompt("Enter String : ")
alert(JSON.stringify(mapLetters(str)))