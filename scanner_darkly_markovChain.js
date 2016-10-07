

var scanner= "One of the most effective forms of industrial or military sabotage limits itself to damage that can never be thoroughly proven or even proven at all to be anything deliberate. It is like an invisible political movement; perhaps it isn't there at all. If a bomb is wired to a car's ignition, then obviously there is an enemy; if public building or a political headquarters is blown up, then there is a political enemy. But if an accident, or a series of accidents, occurs, if equipment merely fails to function, if it appears faulty, especially in a slow fashion, over a period of natural time, with numerous small failures and misfiring then the victim, whether a person or a party or a country, can never marshal itself to defend itself.";



function parse(str){
	str = str.replace(/[\.\',!?;-]/g, "").toLowerCase();
	return str.split(" ");

}

var array = parse(scanner);


function markov(arr){
	var object={};
	for (var i=0;i<arr.length-1;i++){
		if (!object[arr[i]]) {
			object[arr[i]] = []; // initialize empty array for the word
		}
		if (object[arr[i]].indexOf(arr[i+1])===-1){
			object[arr[i]].push(arr[i+1]);
		}
	}
return object;
}
chain = markov(array);

function randomNumber(n) {
	return Math.floor(Math.random()*n);
}

function takeRandom(arr){
	return arr[randomNumber(arr.length)];
}


function chooseWord(str){
	if (str){
		return takeRandom(chain[str]);
	}
	var tempChain=Object.keys(chain);
	return takeRandom(tempChain);
}


function writeLine(x){
	var out=[chooseWord()];
for (var i=1;i<x;i++){
	out.push(chooseWord(out[i-1]));
}
var final = out.join(" ");
console.log(final+",");
}
writeLine(10);
writeLine(10);
writeLine(10);
writeLine(10);
writeLine(10);
