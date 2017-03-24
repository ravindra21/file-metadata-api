var submit=document.getElementById('submit');
var	fileInput=document.getElementById('data');
var	resultDisplay=document.getElementById('result');


function uploadFile(f){
	var http = new XMLHttpRequest();
	var formData = new FormData();
	var url = 'upload';

	formData.append('data',f);
	http.open('POST',url,true);
	http.send(formData);
	http.onload = function(){
		resultDisplay.innerHTML=this.responseText;
	}
}

submit.addEventListener('click',function(){
	if(fileInput.files.length>0){
		uploadFile(fileInput.files[0]);
	}else{
		console.log('no file found');
	}
});
