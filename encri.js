function saltos(y){
    for (let x = 0; x < y; x++) {
        
        document.write("<br>");
        
    }
}


function imprimir(texto, x){

    document.write(texto);
    saltos(x);

}

function escrito(valor){
   
    document.getElementById("final").innerHTML=valor;
        
}
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

    document.getElementById("prueba").innerHTML=text;
}

