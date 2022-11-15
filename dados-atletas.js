class Atleta {
		categoria = "" ;
		IMC = 0;
		mediaValida = 0;
	
	constructor(nome, idade, peso, altura, notas){
		this.nome = nome;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		this.notas = notas;
	}
	
	calculaCategoria(){ //  categoria do atleta;
		let x = this.idade
		switch(true) {
			case (x>=9) && (x<=11):
				this.categoria = "Infantil";
			break;
			case (x>=12) && (x<=13):
				this.categoria = "Juvenil";
			break;
			case (x>=14) && (x<=15):
				this.categoria = "Intermediário";
			break;
			case (x>=16) && (x<=30):
				this.categoria = "Adulto";
			break;
			default:
				this.categoria = "Sem categoria";
		}
	}
	
	calculaIMC(){ //calcula o IMC do atleta;
		this.IMC = this.peso / (this.altura * this.altura)
	}
	
	calculaMediaValida(){ // calcula a média válida do atletathis.
		let notas = this.notas;
		notas = notas.sort();
		notas = notas.slice(1,4);
		let notasSomadas = notas.reduce(function(total, nota){
			return total + nota;   
		},0);
		this.mediaValida = notasSomadas / notas.length;
	}
	
	obtemNomeAtleta(){ // que retorna o nome do atleta
		return this.nome;
	}
	
	obtemIdadeAtleta(){ // retorna a idade do atleta
		return this.idade;
	}
	
	obtemPesoAtleta(){ // retorna o peso do atleta
		return this.peso;
	}
	
	obtemAlturaAtleta(){ // retorna a altura do atleta
		return this.altura;
	}
	
	obtemNotasAtleta(){ // retorna as notas do atleta
		return this.notas;
	}
	
	obtemCategoria(){ // retorna a categoria do atleta
		this.calculaCategoria();
		return this.categoria;
	}
	
	obtemIMC(){ // retorna o IMC do atleta
		this.calculaIMC();
		return this.IMC;
	}
	
	obtemMediaValida(){ // retorna a média válida do atleta
		this.calculaMediaValida();
		return this.mediaValida;
	}
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);
	
//imprimi no console
console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());
