var $ = jQuery;

$(document).ready(function(){

	function getDataFromRow(row, labelIndex, amountIndex, index){

		var colors = [
			'#4D4D4D',
			'#5DA5DA',
			'#FAA43A',
			'#60BD68',
			'#F17CB0',
			'#B2912F',
			'#B276B2',
			'#DECF3F',
			'#F15854',
		];

		var highlights = [
			'#3c3c3c',
			'#4196d4',
			'#f99519',
			'#4ab153',
			'#ee5d9d',
			'#977b28',
			'#a660a6',
			'#d6c525',
			'#ee3935',
		];

		var label = $(row.find('td').get(labelIndex)).text().trim();

		var textAmount = $(row.find('td').get(amountIndex)).text().trim();
		var amount = parseFloat(textAmount.substring(0, textAmount.length - 1));

		var color = colors[index % colors.length];
		var highlight = highlights[index % colors.length];

		return{
			value: amount,
			color: color,
			highlight: highlight,
			label: label
		};

	}
	
	
	var data = [];

	var budgetRows = $('.view-subpartidas-de-una-partida tbody > tr');

	budgetRows.each(function(i, element){
		data.push(getDataFromRow($(element), 0, 1, i));
	});

	var accountingEntryRows = $('.view-asientos-contables-partida tbody > tr');

	accountingEntryRows.each(function(i, element){
		data.push(getDataFromRow($(element), 0, 2, i + budgetRows.size()));
	});



	

	var ctx = $("#budget-graph").get(0).getContext('2d');
	var myDoughnutChart = new Chart(ctx).Doughnut(data,{});


	var a = 4;
	

});