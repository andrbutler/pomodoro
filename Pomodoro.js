$(document).ready(function(){
	var audio = new Audio('alert.wav');
	var pause = false;
	var brk = false;
	var set = true;
	var time;
	var timerId;
	var opTime;
	var opLvl;
	var seconds = 0;
	$('#timeint').on('change', function(){
		set = true;
		seconds = 0;
		brk = false;
	});
	$('.display').on('click', function(){
		if(set == true){
			time = document.getElementById('timeint').value;
			set = false;
			opTime = 1/(60*time);
			opLvl = 0;
			$('.timer').text(time + ':00');
			$('.type').text('GO!');
			$('.display').css('border-color', '#6BD652');
			$('.bg').css('background', '#6BD652');
			$('.bg').css('opacity', '0');
		}
		if (pause == true){
			pause = false;
			document.getElementById('timeint').disabled = false;
			document.getElementById('break').disabled = false;
		}else if(pause == false){
			pause = true;
			document.getElementById('timeint').disabled = true;
			document.getElementById('break').disabled = true;
		}
		if (pause === true){
		
		
		timerId = setInterval(countDown, 1000);
	
		}
		});
		
		$('.display').on('click', function(){
			if(pause === false){
			clearInterval(timerId);
		}
		});
		function countDown(){
		seconds--;
		opLvl = opLvl + opTime;
		$('.bg').css('opacity', opLvl);
		if(seconds == -1){
			time--;
			seconds = 59;
		}
		if(time + seconds == 0){
			if(brk == true){
			audio.play();
			clearInterval(timerId);	
			brk = false;
			//alert('RESUME!');
			time = document.getElementById('timeint').value;
			opTime = 1/(60*time);
			opLvl = 0;
			timerId = setInterval(countDown, 1000);
			$('.type').text('GO!');
			$('.display').css('border-color', '#6BD652');
			$('.bg').css('background', '#6BD652');
			$('.bg').css('opacity', '0');
			}
			else if(brk == false){
			audio.play();	
			//alert('BREAK!');
			clearInterval(timerId);
			time = document.getElementById('break').value;
			opTime = 1/(60*time);
			opLvl = 0;
			brk = true;
			timerId = setInterval(countDown, 1000);
			$('.type').text('REST!');
			$('.display').css('border-color', '#FF2323');
			$('.bg').css('background', '#FF2323');
			$('.bg').css('opacity', '0');
		}
		
		
		}
		if(seconds < 10){
		$('.timer').text(time + ':0' + seconds);
		}else{
		$('.timer').text(time + ':' + seconds);}
		}
})