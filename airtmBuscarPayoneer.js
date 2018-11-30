
var sounds = {
  "ping" : {
    url : "https://flukeout.github.io/simple-sounds/sounds/ping.mp3"
  },
  "coin" : {
    url : "https://flukeout.github.io/simple-sounds/sounds/coin.mp3"
  }
};


var soundContext = new AudioContext();

for(var key in sounds) {
  loadSound(key);
}

function loadSound(name){
  var sound = sounds[name];

  var url = sound.url;
  var buffer = sound.buffer;

  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  request.onload = function() {
    soundContext.decodeAudioData(request.response, function(newBuffer) {
      sound.buffer = newBuffer;
    });
  }

  request.send();
}



function playSound(name, options){
  var sound = sounds[name];
  var soundVolume = sounds[name].volume || 1;

  var buffer = sound.buffer;
  if(buffer){
    var source = soundContext.createBufferSource();
    source.buffer = buffer;

    var volume = soundContext.createGain();

    if(options) {
      if(options.volume) {
        volume.gain.value = soundVolume * options.volume;
      }
    } else {
      volume.gain.value = soundVolume;
    }

    volume.connect(soundContext.destination);
    source.connect(volume);
    source.start(0);
  }
}





//imm-text-one-line-truncated ng-binding

function buscarTransferenciaPorBanco(bancox){

operaciones=document.querySelectorAll('.imm-text-xsmall.ng-binding');
bancosTodos=document.querySelectorAll('.imm-text-one-line-truncated.ng-binding');

	if(operaciones.length>0){

		operaciones.forEach(function(element,k) {
		  var txt=element.innerHTML.toString().toLowerCase();
		  var coloFondo="#66ffff";

		  if (txt.indexOf("transferencia bancaria") > -1)
		  {
			  console.log(bancosTodos[k]);
		  	/* IN CHECK
			if(bancox==bancosTodos[k].innerHTML.toString().toLowerCase())
			{
				console.log('#### ---> '+txt+' '+k);
		  		playSound('coin');
		  		operaciones[k].parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = coloFondo;
		  	
			}*/
		  }
		  
		});
	}
	console.log('..::buscarTransferenciaPorBanco ('+bancox+') ::..');
}

function buscarPayoneer(){

operaciones=document.querySelectorAll('.imm-text-xsmall.ng-binding');

	if(operaciones.length>0){

		operaciones.forEach(function(element,k) {
		  var txt=element.innerHTML.toString().toLowerCase();
		  var coloFondo="#66ffff";

		  if (txt.indexOf("payoneer") > -1)
		  {
		  	console.log('#### ---> '+txt+' '+k);
		  	playSound('coin');
		  	operaciones[k].parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = coloFondo;
		  }
		  
		});
	}
	console.log('..::buscarPayoneer::..');
}

setInterval( buscarTransferenciaPorBanco('banesco') ,5000);
