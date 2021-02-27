var NumofNumbers=6;


var drawNums=[0,0,0];

var num_array=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];


var scoreKeep=0;
function StartGame()
{
	
	var dId=document.getElementById('scoreval');
dId.innerHTML= 'NoJS';
	
	 scoreKeep=0;
	 
	 dId.innerHTML=scoreKeep.toString();
	 
	 for(i=1;i<=NumofNumbers;i++)
	{
        for(j=1;j<=NumofNumbers;j++){
			
			
			var test = Math.floor(Math.random()*9) +1; 
			var point=(i-1);
			var point2=(j-1);
			
		(num_array[point][point2])= test;
			
			
			
			document.getElementById('ga6r'+i+''+j.toString()).style.backgroundImage='url(images/'+test.toString()+ '.png)';
			            document.getElementById('ga6r'+i+''+j.toString()).style.backgroundSize='contain'
						document.getElementById('ga6r'+i+''+j.toString()).style.display='inherit';
			
			
            
			
			
			
            
        }
		
	}
	for(i=0;i<3;i++)
        {
           drawNums[i]= Math.floor(Math.random()*9) +1; 
            document.getElementById('num'+(i+1).toString()).style.backgroundImage='url(images/'+drawNums[i].toString()+ '.png)';
            document.getElementById('num'+(i+1).toString()).style.backgroundSize='contain'
			
			
            
        }
    
    
}


function getNewBoard(){
    
    for(i=1;i<=NumofNumbers;i++)
	{
        for(j=1;j<=NumofNumbers;j++){
			
			
			var test = Math.floor(Math.random()*9) +1; 
			var point=(i-1);
			var point2=(j-1);
			
		(num_array[point][point2])= test;
			
			
			
			document.getElementById('ga6r'+i+''+j.toString()).style.backgroundImage='url(images/'+test.toString()+ '.png)';
			            document.getElementById('ga6r'+i+''+j.toString()).style.backgroundSize='contain'
			
			
            
			
			
			
            
        }
		
	}
            
    var dId2=document.getElementById('scoreval');
	scoreKeep=(scoreKeep-30);
	
    dId2.innerHTML=scoreKeep.toString();
    
    
}


function getDraw(){
    
    for(i=0;i<3;i++)
        {
           drawNums[i]= Math.floor(Math.random()*9) +1; 
            document.getElementById('num'+(i+1).toString()).style.backgroundImage='url(images/'+drawNums[i].toString()+ '.png)';
            document.getElementById('num'+(i+1).toString()).style.backgroundSize='contain'
			
			
            
        }
    
    
   // alert(drawNums[0]+ '  ====  ' +drawNums[1] +'    '+ drawNums[2] );
    
    
};
// to self - ask about this

function ImageOnHover(myvar){
    
     console.log('IN :'+myvar);
    
}
function ImageOnOut(myvar){
    
    console.log('OUT :'+myvar)
    
}


function ImageOnClick(id)
{
	var dId3=document.getElementById('scoreval');
	
	var numParse=id.substring(4,5);
	var numParse2=id.substring(5,6);
	var arrNum=parseInt(numParse, 10);
	var arrNum2=parseInt(numParse2, 10);
	var clickPoint=(num_array[arrNum-1][arrNum2-1]);
	var drawCheck = 0;
	while(drawCheck < 3)
	{
		
		var result=((drawNums[drawCheck])-(clickPoint));
		if(result==0)
		{
			
			    for(col=1;col<=NumofNumbers;col++)
	{
        for(row=1;row<=NumofNumbers;row++)
		{
					var mark=(col-1);
			var mark2=(row-1);
			
		compare=(num_array[mark][mark2]);
		if(compare-clickPoint==0)
		{
			scoreKeep=(scoreKeep+10);
			document.getElementById('ga6r'+col+''+row.toString()).style.display='none';
		}
		else
		{
			scoreKeep=scoreKeep;
		}
			
		}
	}		
				
			
			
			dId3.innerHTML=scoreKeep.toString();
			
			
			drawCheck++;
			
			
		}	
			
		
		else
		{
			drawCheck++;
			
		}
		
	
		
		
		

	}
		
}
