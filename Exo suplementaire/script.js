function validationFormulaire(){ 
    var elementFormulaire = document.getElementById("formulaire").elements;
    var elementText = elementFormulaire["username"].value;
    alert(elementText);
    //document.write('<span style="color:red"> </span>');
    
}

function erreur(){
    var changement = getElementById('erreur');
    changement.innerHTML = "remplisser ce champ";
}


//var elementText = window.document.forms.validations.elements.user_text;
//var elementText = document.getElementById('validations').elements.user_text;
//console.log(elementText);
   
//
    /*if(elementText == null){
          if(elementText.localeCompare("")){
        changement.innerHTML = "remplisser ce champ";
    }
    }*/