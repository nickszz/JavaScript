function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'manha1.png'
        document.body.style.background = '#fb8d01'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'tarde1.png'
        document.body.style.background = '#e6927a'
    } else{
        // BOA NOITE!
        img.src = 'noite1.png'
        document.body.style.background = '#5ca8f0'
    }
}
