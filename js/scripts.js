//Classe hud -- Crea el hud per al joc
function hud() {
	// Funcio crear_inventori, crea inventori amb numero de espais com a parametre i la posicio d'inici
	// Limitat a 1-10
	var con_principal=null;
	this.crear_inventori = function(num, x, y) {
		this.eliminar();
		var con_sub = [];
		con_principal = $('<div/>'); //Crea contenedor principal per a poder modificar
		con_principal.css({position: 'fixed',top: y, left: x});

		$('body').append(con_principal);
		
		//Comprova el rang, sino reasigna
		if (num<1){
			num=1;
		}else if(num>10){
			num=10;
		}

		//for per tal de crear les subdiv
		for (i = 0; i<num; i++){
			con_sub[i] = $('<div/>', {'class':'contenedor'});
			con_sub[i].css({left: (50*i)+x});
			con_principal.append(con_sub[i]);
		}
	};
	//Minimitzar o max.. easy
	this.minimitzar = function(){
		if(con_principal!=null){
			con_principal.toggle()
		}
	};
	//Eliminar per si havia una anterior
	this.eliminar = function(){
		if(con_principal!=null){
			con_principal.remove();
		}
	};
}

var main = function(){
	var Hud = new hud();
	$("#crear").click(function(){
		Hud.crear_inventori($("#entrada").val(), 20, 20);
	});
	$('#mostra').click(function(){
		Hud.minimitzar();
	});
}

$(document).ready(main);
