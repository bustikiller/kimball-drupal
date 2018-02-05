var $ = jQuery;

jQuery(document).ready(function(){
	var nid = $('.content[data-nid]').attr('data-nid');

	// Accounting entry form
	$('#edit-field-partida-contable-und > option[value='+ nid +']')
		.add('#edit-field-partida-padre-und > option[value='+ nid +']')
		.prop('selected', true)
		.each(function(index, element){
			$(element).parents('.form-item').first().hide();
		});

	$('.field-name-field-anio-contable')
		.add('.field-name-field-partida-de-material')
		.hide();

	$("form .field-name-og-group-ref").each(function(i, container){
		var select = $(container).find("select");
		var options = select.find("option");
		if(options.size() === 2){
			select.val(select.find("option:last").val());	
			$(container).hide();
		}
	});

	$(".content .field-name-og-group-ref").hide();
});