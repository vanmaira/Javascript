var aciona = () => {
    do{
        var n = parseInt(prompt("Digite um valor entre 0 e 21"))
    }while( !(n > 0 && n < 21) )

    par = [];
    for(c = 0; c < n; c++){
        par.push(2*(c+1))
    }
    document.write(par);
}
