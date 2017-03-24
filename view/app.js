var submit=document.getElementById('submit');
var	fileInput=document.getElementById('data');
var	resultDisplay=document.getElementById('result');


function uploadFile(f){
	var http = new XMLHttpRequest();
	var formData = new FormData();
	var url = 'upload';

	console.log('hjhjhjh');

	formData.append('data',f);
	http.open('POST',url,true);
	http.send(formData);
	http.onload = function(){
		console.log('blalalal')
		resultDisplay.innerHTML=this.responseText;
	}
}

submit.addEventListener('click',function(){
	if(fileInput.files.length>0){
		uploadFile(fileInput.files[0]);
		console.log(fileInput.files[0]);
		console.log('afer');
	}else{
		console.log('kamfer');
	}
});
