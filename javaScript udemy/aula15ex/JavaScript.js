
    var nome = prompt('Informe o nome da pessoa');
    var altura = prompt('Informe a altura da pessoa em centímetros');
    var peso = prompt('Informe o peso da pessoa');

    altura = parseFloat(altura);
    peso = parseFloat(peso);


    altura = altura / 100;


    var m = peso / (altura * altura);

    if( m < 16){
    classificacao = 'Baixo peso muito grave';

    } else if(m >= 16 && m <= 16.99){
    classificacao = 'Baixo peso grave';

    } else if(m >= 17 && m <= 18.49){
    classificacao = 'Baixo peso';

    } else if( m >= 18.50 && m <= 24.99){
    classificacao = 'Peso normal';

    } else if( m >= 25 && m <= 29.99){
    classificacao = 'Sobrepeso';

    } else if( m >= 30 && m <= 34.99){
    classificacao = 'Obesidade grau I';

    } else if( m >= 35 && m <= 39.99){
    classificacao = 'Obesidade grau II';

    } else {
    40
    classificacao = 'Obesidade grau III';
    }

    document.write(nome + ' Possui índice de massa corporal igual a ' + m + ' sendo classificado como: ' + classificacao);