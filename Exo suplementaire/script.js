function validationFormulaire(){ 
    var changement = document.getElementById('erreur');
    changement.innerHTML = "champ manquant";
}

function jeuJustPrix(x){
    //ramdom = parseInt((Math.random()*10000)%1025);
    //alert(ramdom);
    alert(coucou1);
   // var elementFormulaire = document.getElementById("justePrix").elements.nombre.value;
    //var elementText = elementFormulaire["nombre"].value;
    //alert(elementText);

}

function is_numeric(chaine) {
    var exp=new RegExp("^[0-9]+$","g");
    return exp.test(chaine);
}

//var elementFormulaire = document.getElementById("formulaire").elements;
//var elementText = elementFormulaire["username"].value;
//alert(elementText);
/*function erreur(){
    var changement = getElementById('erreur');
    changement.innerHTML = "remplisser ce champ";
}*/

//document.write('<span style="color:red"> </span>');
//var elementText = window.document.forms.validations.elements.user_text;
//var elementText = document.getElementById('validations').elements.user_text;
//console.log(elementText);
   
//
    /*if(elementText == null){
          if(elementText.localeCompare("")){
        changement.innerHTML = "remplisser ce champ";
    }
    }*/