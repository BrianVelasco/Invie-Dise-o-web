function platzon(str)
{
	let traslation = str;

	if (str.toLowerCase().endsWith('ar')) {
		traslation = str.slice(0, -2);
		
	}

	if(str.toLowerCase().startsWith("z")){
		 traslation = traslation + "pe";
	}

	if(traslation.length >= 10)
	{
		const mitad1 = traslation.slice(0,Math.round(traslation.length/2))
		const mitad2 = traslation.slice(Math.round(traslation.length/2))
		traslation = mitad1 +"-"+ mitad2;
	}	

	//si la palabra es un palindromo ninguna de las 
	//anteriores cuenta y se intercala M ym

	const reverse = (str) => str.split("").reverse().join("");

	function minMay(str){
		const length = str.length;
		let traslation = '';
		let mayusculas = true;


		for(let i=0; i<length; i++){
			const char = str.charAt(i);
			if(mayusculas){
				traslation +=  char.toUpperCase() ;
				console.log("entre................." + length);
			}
			else{
			 traslation += char.toLowerCase();
			}
			mayusculas = !mayusculas;
		}
		return traslation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}


	return traslation;
}

console.log(platzon("Programar"));
console.log(platzon("Zorro"));
console.log(platzon("Zarpar"));
console.log(platzon("abecedario"));
console.log(platzon("sometemos"));
//.......................................................................................................................

var dias = [
"lunes",
"martes",
"miercoles",
"jueves",
"viernes",
"sabado",
"domingo"
];
const nombre = "Brian";
let totalkm = 0;

for(const i of dias){
	const kms = correr();
	totalkm += kms;
	console.log("El dia "+i+" corrio "+kms+" kms");
}
console.log("En promedio "+nombre+" corrio "+totalkm/dias.length+" kms");
function correr()
{
	const min = 5;
	const max = 15;
	return Math.round(Math.random() * (max-min)); 
}




























