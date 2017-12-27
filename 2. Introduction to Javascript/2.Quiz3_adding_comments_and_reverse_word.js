/*Multiline Line comment
1.Add comments in Javascript and 
2.Program to reverse word #44
*/

//function taking argument word
function rev(word){
	//variable to store reversed word
   var revw="";
   //looping over the chars in reverse order
for (var i = word.length - 1; i >= 0; i--) {
	//add char to the new word
	revw=revw.concat(word[i]);
}
//returning value
return revw;
}
//calling function
rev("Javascript");