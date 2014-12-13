function hud() {

	this.crear = function(num) {
		var con_sub = [];
		var con_principal = $('body').append($('<div/>',{'id':'cprincipal'}));
		for (i = 0; i<num; i++){
			con_sub[i] = $('<div/>', {'class':'contenedor'});
			con_sub[i].css({left: (50*i)+10});
			con_principal.append(con_sub[i]);
		}
	};
}

var main = function(){
	var Hud = new hud();
	Hud.crear(4);

}

$(document).ready(main);
