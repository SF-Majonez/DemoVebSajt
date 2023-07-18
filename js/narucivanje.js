/*
var baza = null;
if($('#leb').prop("checked")){baza = " Леблебија "}; 
if($('#lebpas').prop("checked")){baza = " Леблебија и пасуљ"};*/


$(document).ready(function(){
    $(".submit").click(function(){
        alert(
            "Име: " + $(".ime").val() +
            "\nТелефон: " + $(".tel").val() + 
            "\nБаза хумуса: Леблебија-" + $('#leb').prop("checked") + ", Леблебија и пасуљ-" + $('#lebpas').prop("checked") +
            "\nДодатци: Бели лук-" + $('#bluk').prop("checked") + ", Црни лук-" + $('#cluk').prop("checked") + ", Чили-" + $('#cili').prop("checked") + ", Шитаке-" + $('#sitake').prop("checked") +
            "\nИзабрано уље: " + $(".select option:selected").text() +
            "\nКоментар: " + $("#polje").val()
        );
    })

});