function surfaceRectangle(){
    alert("La surface du rectangle");
    a=prompt("Quelle est la longueur du rectangle ? ");
    b=prompt("Quelle est la largueur du rectangle ? ");
    alert("Sa surface du rectangle est "+ a*b);
}

function surfaceCercle(){
    rayon = prompt("Quelle est le rayons du cercle ? ");
    alert("La surface du rayons et de "+ Math.PI*Math.pow(rayon,2));
}

function somme(a){
    res = 0;
    for(x = 0; x<= a; x++){
        res += x ;
    }
    alert("la somme des "+a+" premier et " +res);
}