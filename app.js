
//https://lancecourse.com/en/howto/create-your-first-desktop-application-with-php-and-php-desktop

btns = document.querySelectorAll('.tecla')
btns.forEach((e)=>{
	e.addEventListener('click', ()=>{
	tocarSom(e.dataset.id)
	//botaoEscolha(e.dataset.id)
	console.log(e.innerText,e.dataset.id, e.value)})

})

function tocarSom (btnEscolha){
	let nomeSom = `som_tecla_${btnEscolha}`
	console.log(nomeSom)
	document.getElementById(nomeSom).play()
}


let botaoEscolha = (btnEscolha)=>{
	
	switch (btnEscolha) {
	  case 'clap':
	    document.getElementById("som_tecla_clap").play()
		console.log('8.');
		break;
	  case 'pom':
	  		console.log('7.');
			document.getElementById("som_tecla_pom").play()
		break;
	  case 'tim':
		console.log('1');
		document.getElementById("som_tecla_tim").play()
		break;
	  case 'toim':
		console.log('10');
		document.getElementById("som_tecla_toim").play()
		break;
		case 'puff':
		console.log('2');
		document.getElementById("som_tecla_puff").play()
		break;
		case 'splash':
		console.log('3');
		document.getElementById("som_tecla_splash").play()
		break;
		case 'psh':
		console.log('4');
		document.getElementById("som_tecla_psh").play()
		break;
		case 'tic':
		console.log('5');
		document.getElementById("som_tecla_tic").play()
		break;	
		case 'tom':
		console.log('6');
		document.getElementById("som_tecla_tom").play()
		break;				
	  default:
		console.log("Sorry, we are out of ");
	}

}

console.log(btns)


  
    
    
    
    


    
    