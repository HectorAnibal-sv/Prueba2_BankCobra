$(document).ready(function() {
    fn_indicadores();
    fn_temperatura();
  });

function fn_indicadores(){
    $.getJSON('https://api.libreapi.cl/economy/indicators', function(data){
        var info = data;
        
        $('#lbl_dolar').append('Dólar: $'+''+info.data.dolar);
        $('#lbl_euro').append('Euro: $'+info.data.euro);
        $('#lbl_uf').append('UF: $'+info.data.uf);    
    }).fail(function(){
        alert('AUN NO CONECTA CON LA API, PAJARON');
    });
}

function fn_temperatura(){
    $.getJSON('https://api.libreapi.cl/weather/stations', function(data){
        var info = data;
        
    
    }).fail(function(){
        alert('AUN NO CONECTA CON LA API, PAJARON');
    });
}