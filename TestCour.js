
var tab = [-2,1,4];


function surfaceRectangle(){
    alert("La surface du rectangle");
    var a=prompt("Quelle est la longueur du rectangle ? ");
    var b=prompt("Quelle est la largueur du rectangle ? ");
    alert("Sa surface du rectangle est "+ a*b);
}

function surfaceCercle(){
    var rayon = prompt("Quelle est le rayons du cercle ? ");
    alert("La surface du rayons et de "+ Math.PI*Math.pow(rayon,2));
}

function somme(a){
    var res = 0;
    for(x = 0; x<= a; x++){
        res += x ;
    }
    alert("la somme des "+a+" premier et " +res);
}
 function additionne(x){
    //alert(parseInt(document.getElementsByTagName('table')[0].getElementsByTagName('tr')[0].cells[x].innerHTML)+2); code juste c'est pour récupérer les valeur d'un tableau HTML
    return x+2;
 }

 function affiche(){
   for(var i = 0 ; i <= tab.length-1; i++){
       // premier élément
        if( i == (tab.length - (tab.length-1))){
            alert("Le premier élément du tableau :"+tab[i]+", ajoutons 2 donne : "+additionne(tab[i]));
        }
        // dernier élément
        if(i == tab.length-1 ){
            alert("Le dernier élément du tableau : "+tab[i]+", ajoutons 2 donne : "+additionne(tab[i]));
        }
   }
 }

 function soustrait(x){
    var res = x-2;
    if( res < 0 || res == 0){
        return "résultat négatif ou null";
    }else{
        return "résultat possitif";
    }
 }

function afficheSoustrait(){
    for(var i = 0 ; i <= tab.length-1; i++){
        alert("La valeur "+tab[i]+" du  tableau, on retire 2 est : "+soustrait(tab[i]));
    }
}

function jourDeLaSemaine(){
    var aujourdhui = new Date();
    var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    switch(aujourdhui.getDay()){
        case 1:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
            break;
        case 2:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
             break;
        case 3:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
            break;
        case 4:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
            break;
        case 5:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
            break;
        case 6:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
            break;
        case 0:
            alert("Nous somme le "+jours[aujourdhui.getDay()]+" "+ aujourdhui.getDate());
            break;
        default :
            alert("ce jour existe pas ");
    }
}

function testWhile(){
    var caractere = prompt('entrée un caractère');
    var res="";
    var caractereFinBoucle = "\"";

    while(caractere != caractereFinBoucle){
        // récupère une nouvelle chaine de caractère
        caractere = prompt("entrée un caractère");
        // on le concat pour former une phrase
        res+=" "+caractere;
    }
    alert(res);
}


