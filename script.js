var nome = ("Eduarda Julia");
document.write(nome, "<br>") 
var ano = ("Ano: 2023");
document.write(ano, "<br>")
var twitter = ("Twitter: @Dudajulia");
document.write(twitter,  "<br>")
var instagram = ("Instagram: @Dudajuliaclara");
document.write(instagram,  "<br>")
var facebook = ("Facebook: @Edujuju");
document.write(facebook,  "<br>")
var linkedin = ("LinkedIn: Eduarda Julia Clara");
document.write(linkedin,  "<br>")
var genero = ("Genero: Feminino");
document.write(genero,  "<br>")
var polo = ("Polo : Higienópolis");
document.write(polo,  "<br>")




		 

function getSaudacao() {


	var dataAtual = new Date ();
	var hora = dataAtual.getHours();
	var saudacao = " ";





	if (hora >= 5 && hora < 12) {

		saudacao = "Boa dia!";
	}


	else if (hora >= 12 && hora < 18){

		saudacao = "Boa tarde!";
	}


	else {
		saudacao= "Boa noite!";
	}

	return saudacao;


	}




	function getDiaSemana() {
		var diasSemana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
		var dataAtual = new Date();
		var diaSemana = dataAtual.getDay();

	return diasSemana[diaSemana]
	

	}


	function exibirSaudacao(){
		var nomeCompleto = "Sou Eduarda Julia Clara";
		var cidadeUniversidade = "SP/ADS MAckenzie Higienópolis";
		var saudacao = getSaudacao();
		var diaSemana = getDiaSemana();
		var mensagem = nomeCompleto + "\n" + cidadeUniversidade + "\n" + saudacao + "\n" + ["Hoje é "] + diaSemana;



	alert(mensagem);

	}
	
	window.onload = exibirSaudacao;
	
	

		
