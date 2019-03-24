

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  // Your code goes here!
  event.preventDefault();
  // Select size input
  let inputHeight= document.getElementById('inputHeight').value;
  let inputWeight= document.getElementById('inputWeight').value;
  let pixelCanvas=document.getElementById('pixelCanvas');
  pixelCanvas.addEventListener('click', function (ev) {
  // Select color input
  let  colorPicker=document.getElementById('colorPicker').value;   
  //to prevent fill whole table  at a time
  if(ev.target.id!='pixelCanvas'){
  console.log('Td was clicked!'+colorPicker+ev.target.id);
  ev.target.style.backgroundColor=colorPicker;
  }
});
 pixelCanvas.innerHTML="";
 
 for(let Height=1  ; Height <= inputHeight ; Height++){
  
      let tr = document.createElement("tr"); 
      for(let Weight=1  ; Weight <= inputWeight ; Weight++){
        let td = document.createElement("td"); 
       
        tr.appendChild(td);
      }
      pixelCanvas.appendChild(tr);
   }
  }

  
