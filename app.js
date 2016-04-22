var data = [
	"0+5+3",
	"2+3+4",
	"3+6+6",
	"0+4+0",
	"5+4+1",
	"5+7+6",
	"5+8+6",
	"8+5+1",
	"5+3+2",
	"0+3+0",
	"7+9+3",
	"1+9+9",
	"9+9+1",
	"9+4+8",
	"5+7+4",
	"0+0+0",
	"8+6+4",
	"4+5+3",
]
var result = [];
for(var i = 0; i<data.length; i++) {
	result.push(eval(data[i])<10 ? "0"+eval(data[i]) : eval(data[i]) + "")
}

var num = 0;
var start = 755248;
var second = 420;
var t = setInterval(addTr,1)

function addTr(){
	$("#time").text(second);
	second--;
	if (second < 0) {
		var tr = '<tr>' +
			 	'<td>' + (start + num) + '期</td>' +
			 	'<td>' + data[num] + ' = </td>' +
			 	'<td>' + result[num] + '</td>' +
			 '</tr>'
		$("tbody").append(tr);
		num++;
		num === 18 && clearInterval(t);
		second = 420;
	}
	
}