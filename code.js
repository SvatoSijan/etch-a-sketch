var sliderR = document.getElementById('sliderR'),
    sliderB = document.getElementById('sliderB'),
    sliderG = document.getElementById('sliderG'),
    colorIs = document.querySelector('.chosenColor'),
    h1 = document.getElementsByTagName('h1');
          
var sliderValueDisplayR = document.getElementById('sliderValueR'),
    sliderValueDisplayB = document.getElementById('sliderValueB'),
    sliderValueDisplayG = document.getElementById('sliderValueG');

//RGB values for the drawimg



var rgbValue = ''

//First is rainbow
var rainbowMode = document.getElementById('rainbowMode'),
    isRainbowMode = false;

rainbowMode.addEventListener('click',function(){
    if(isRainbowMode){
        isRainbowMode =false;
        rainbowMode.textContent = 'Rainbow Mode is currently off.';
    }
    else{
        isRainbowMode =true;
        rainbowMode.textContent = "Rainbow Mode ONNN!";
    }});
function rR(classs) {
      const rC = ['red', 'orange', 'yellow', 'green', 'lime', 'blue', 'indigo', 'violet'];
      classs.style.backgroundColor = rC[Math.floor(Math.random() * rC.length)];
  }
// Now for Setting up RGB value throuch slider

function updateColorBar() {
    return('rgb(' + sliderR.value + ',' + sliderG.value + ',' + sliderB.value + ')');
}

sliderR.addEventListener('input', function() {
        sliderValueDisplayR.textContent = sliderR.value;
        document.getElementById('chosenColor').style.backgroundColor = updateColorBar();
    });
          
sliderG.addEventListener('input', function() {
        sliderValueDisplayG.textContent = sliderG.value;
        document.getElementById('chosenColor').style.backgroundColor = updateColorBar();
    });
          
sliderB.addEventListener('input', function() {
        sliderValueDisplayB.textContent = sliderB.value;
        document.getElementById('chosenColor').style.backgroundColor = updateColorBar();
    });
          

          
          var gridLength = document.getElementById('gridLength');
          var sliderValueDisplay_GridLength = document.getElementById('sliderValueGridLength');
          var gridContainer = document.getElementById('grid-container');
          
          gridLength.addEventListener('input', function() {
            h1.innerHTML = "Draw Away!!"
            gridContainer.innerHTML = '';
            gridContainer.style.gridTemplateColumns = 'repeat(' + gridLength.value + ', minmax(0, 1fr))';
            sliderValueDisplay_GridLength.textContent = gridLength.value;
            for (var i = 0; i < gridLength.value; i++) {
                for (var j = 0; j < gridLength.value; j++) {
                    var gridItem = document.createElement('div');
                    gridItem.className = 'item';
                    gridContainer.appendChild(gridItem);
                }
            }
            var isMouseDown = false;
          var items = document.querySelectorAll('.item');
          

          
          items.forEach(function(item) {
            item.addEventListener('mousedown', function() {
              isMouseDown = true;
              (isRainbowMode) ? rR(item) : item.style.backgroundColor = updateColorBar();
            });
          
            item.addEventListener('mouseover', function() {
              if (isMouseDown) {
                (isRainbowMode) ? rR(item) : item.style.backgroundColor = updateColorBar();
              }
            });
          
            item.addEventListener('mouseup', function() {
              isMouseDown = false;
            });
          
            document.body.addEventListener('mouseup', function() {
              isMouseDown = false;
            });
          });
          });





//Reset
document.getElementById('reset').addEventListener('click',function(){
    gridContainer.innerHTML = '';
    isRainbowMode =false;
    rainbowMode.textContent = 'Rainbow Mode is currently off.'
  });

          




