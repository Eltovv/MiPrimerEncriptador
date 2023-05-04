function saltos(y){
    for (let x = 0; x < y; x++) {
        
        document.write("<br>");
        
    }
}


function imprimir(texto, x){

    document.write(texto);
    saltos(x);

}

// function escrito(valor){
   
//     document.getElementById("final").innerHTML=valor;
        
// }
function encriptador(){
    let text = texto.value;
    let cod;
    let cod1;
    for (let n = 0; n < text.length; n++) {
        if (text[n] == 'a'){

            cod = text.slice(0,n+1);
            cod1 = text.slice(n+1);
            text = cod + "i" + cod1;
            cod=cod1=0;
            n++;
        }else if(text[n] == 'e'){
            cod = text.slice(0,n+1);
            cod1 = text.slice(n+1);
            text = cod + "nter" + cod1;
            cod=cod1=0;
            n = n + 4;
        }
        else if(text[n] == 'i'){
            cod = text.slice(0,n+1);
            cod1 = text.slice(n+1);
            text = cod + "mes" + cod1;
            cod=cod1=0;
            n = n + 3;
        }
        else if(text[n] == 'o'){
            cod = text.slice(0,n+1);
            cod1 = text.slice(n+1);
            text = cod + "ber" + cod1;
            cod=cod1=0;
            n = n + 3;
        }else if(text[n] == 'u'){
            cod = text.slice(0,n+1);
            cod1 = text.slice(n+1);
            text = cod + "fat" + cod1;
            cod=cod1=0;
            n = n + 3;
        }
        
        

        
    }
    document.getElementById("final").innerHTML=text;
    
}
function desencriptador(){
    let text = texto.value;
    let cod,cod1;

    while (text.indexOf('enter') !== -1) {
        cod = text.slice(0,text.indexOf('enter')+1);
        cod1 = text.slice(text.indexOf('enter')+5);
        text = cod + cod1;
        cod=cod1=0;
    }
    while (text.indexOf('ai') !== -1) {
        cod = text.slice(0,text.indexOf('ai')+1);
        cod1 = text.slice(text.indexOf('ai')+2);
        text = cod + cod1;
        cod=cod1=0;
    }
    while (text.indexOf('imes') !== -1) {
        cod = text.slice(0,text.indexOf('imes')+1);
        cod1 = text.slice(text.indexOf('imes')+4);
        text = cod + cod1;
        cod=cod1=0;
    }
    while (text.indexOf('ober') !== -1) {
        cod = text.slice(0,text.indexOf('ober')+1);
        cod1 = text.slice(text.indexOf('ober')+4);
        text = cod + cod1;
        cod=cod1=0;
    }
    while (text.indexOf('ufat') !== -1) {
        cod = text.slice(0,text.indexOf('ufat')+1);
        cod1 = text.slice(text.indexOf('ufat')+4);
        text = cod + cod1;
        cod=cod1=0;
    }
    if (text == texto.value) {
        alert("No se a encontrado ningun mensaje");   
    }
    else{
    document.getElementById("final").innerHTML=text;
    }
}

