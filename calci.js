var num1=[];
var count = 0;
var num2=[];
var $textarea = $('#textarea');
var operand;
var memory = [];	
		
	$(".numbers").on('click',function () {
		if (count == 0) {	
			var input = $(this).html();
			num1.push(input);
			$textarea.html(Number(num1.join('')));
			n1 = $textarea.html();
		}
	});

	$('.operater').on('click',function(){
		count = 1;
		operand = $(this).html();
		$textarea.html("");
		
		});
			
	$('.numbers').on('click',function(){
		if (count == 1) {	
			var input = $(this).html();
			num2.push(input);
			$textarea.html(Number(num2.join('')));
			n2 = $textarea.html();
		}	
			
		});
		
	
	
	$('.mem').on('click',function(){
		memory = $(this).html();
	});
	 
	 
$('.equal').on('click',function(){
	
	var result = null;
	count=3;
	switch( operand )
	{
		case "+" :
				result = parseInt(num1.join('')) + parseInt(num2.join(''));
				break;
			
		case "-" :
				result = parseInt(num1.join('')) - parseInt(num2.join(''));
				break;
				
		case "x" :
				result = parseInt(num1.join('')) * parseInt(num2.join(''));
				break;
				
								
		case "/" :
				result = parseInt(num1.join('')) / parseInt(num2.join(''));			
						
	}
	$textarea.html(result);
	num2=[];
	num1 = [result];
	

	

})

$('.clear').on('click',function(){
	
	
	num1 = [];
    num2 = [];
    operand = null;
    $textarea.html(0);
	count=0
	
});
var cunt;

$('.mem1').on('click',function(){
	
	cunt = $textarea.html();
	memory = cunt;
	$('.ac').on('click',function(){
		cmemory = cunt;

		
	})
	
})
$('.mem').on('click',function(){
	
	memory = $textarea.html();
	if(count == 1)
	{
		num2 = memory.split();
	}
	
})
$('.mem').on('click',function(){
	
	memory = $textarea.html();
	console.log(memory);
	
})











	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		



