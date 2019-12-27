var processes;
var resources;

//get number of inputs
$( "#initial-submit" ).submit(function( event ) {
    var data= $( this ).serializeArray();
    processes=data[0].value;
    resources=data[1].value;
    event.preventDefault();
    createInputs();
  });


//create inputs
function createInputs(){
    var form = document.getElementById('initial-submit');
    while (form.hasChildNodes()) {
        form.removeChild(form.lastChild);
    }

    for (i=0;i<processes;i++){
        // Append a node with a random text
        var div = document.createElement('div');
        div.classList.add('form-group');
        var p = document.createElement('p');
        p.innerText='Process '+i;
        p.classList.add('text-info');
        div.appendChild(p);
        // Create an <input> element, set its type and name attributes
        for(j=0;j<resources;j++){
        var label = document.createElement('label');
        label.innerText=String.fromCharCode(65+j);
        var input = document.createElement("input");
        input.type = "number";
        input.name = "r" + i;
        input.classList.add('form-control')
        div.appendChild(label);
        div.appendChild(input);
        // Append a line break 
        }
        form.appendChild(div);
    }

    var btn = document.createElement("button");
    btn.type='submit';
    btn.innerText='submit';
    btn.classList.add('btn');
    btn.classList.add('btn-primary');
    form.appendChild(btn);
}


//TO DO LIST
/*
make button click change form ID to input-form
Serialize new input (use while loop and take them in order)
add actual algorithm
display output
add navbar for no reason

*/