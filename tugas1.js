let btn = document.getElementById ('btn');
let reset = document.getElementById ('reset');
let table = document.getElementById('table');
let tableDef = table


let tablle = document.getElementsByClassName('table');

btn.addEventListener(
    'click', function() {
        table.style.rotate = '90deg';
        

        
    }
);


reset.addEventListener(
    'click', function() {
        table.style = tableDef;
        

        
    }
);
