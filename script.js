 function change()
{
  const btn  = document.getElementById('content');
  btn.innerHTML = 'Hello World!';
}

function retrive()
{
  const btn  = document.getElementById('content');
  btn.innerHTML = 'CLICK TO CHANGE CONTENT';
}


// FOR COLOR BOX
function Clr(color)
{
  const box = document.getElementById('clrbx');
  box.style.backgroundColor = color;
}
let isFirstCall = true;
let ClrBtn;
function addClr()
{
  let color = ['magenta', 'yellow','black','blue','green','grey'];
  let clrIndex = Math.floor(Math.random() * color.length);
  var randomClr  = color[clrIndex];
  
  if(isFirstCall == true)
  {
   clrBtn = document.createElement('button');
  clrBtn.style.backgroundColor = randomClr;
  clrBtn.style.margin = '5px';
  clrBtn.addEventListener('click', () => Clr(randomClr));
  const ele = document.getElementById('item2');
  ele.appendChild(clrBtn);
 }
  else
  {
    const rem = document.getElementById('BTN');
    rem.innerHTML = 'Remove';
  }
  isFirstCall = false;
}

// CAHNGE BACKGROUND COLOR OF HEADING
function change2(){
  const colors = ['red','green','yellow','magenta','blue','orange'];
  let clrIndx = Math.floor(Math.random()*colors.length);
  var clr = colors[clrIndx];
  document.getElementById('RdmClr').style.backgroundColor = clr;
}
// const chngeBg = document.getElementById('ChangeBG');
// chngeBg.addEventListener('onclick', change());

// form data display using Dom 
function displaydata()
{
  let displayData = document.getElementById('displayData');
  let fname = document.getElementById('Name').value;
  let phone = document.getElementById('Phone').value;
  let email = document.getElementById('Email').value;
  
  displayData.innerHTML = '<p><strong>Name:<strong>'+ fname +'</p>' +'<p> <strong> Phone:<strong>'+ phone+'</p>' +'<p>Email:'+email+'</p>'
}

//Create a list of items using an unordered list (<ul>). When a list item is clicked, change its color to red.

const ul = document.getElementsByTagName('ul')[0].getElementsByTagName('li');
   for(var i = 0 ; i < ul.length;i++)
   {
      ul[i].addEventListener('click' ,
                                      function (e){
        
        if( e.target.style.color == 'red'){
            e.target.style.color = 'black';}

        else {
          e.target.style.color = 'red';
        }                    
      }); 
   }