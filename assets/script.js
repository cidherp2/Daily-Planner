var hoy = $("#currentDay");
console.log(dayjs());
var fechaDeHoy = dayjs().format('MMMM  DD YYYY');
console.log(fechaDeHoy);
hoy.text(fechaDeHoy);
var boton = $('.saveBtn');
timeBlock = $('.time-block');
var texti = $('.description');
var horaActual = dayjs().hour();





$(document).ready(function () {

  function loadSavedData() {
    // itera a través de cada clase time-block
    $('.time-block').each(function () {
      // Ibtiene el ID cada time-block, que se utilizará como llave en el local storage, para ver que se guardo 
      var bloqueCalendarioId = $(this).attr('id');

      // Recupere los datos guardados en el local storage utilizando el id encontrado en bloqueCalendarioId como llave
      var savedData = localStorage.getItem(bloqueCalendarioId);

      // Comprueba si hay datos guardados para el time-Block actual 
      if (savedData) {
        // Rellena el área de texto dentro del time-Block actual con los datos guardados
        $(this).find('.description').val(savedData);
      }
    });
  }
  loadSavedData();

  boton.on("click", function () {
    var bloqueCalendarioId = $(this).closest('.time-block').attr('id');
   //console.log(bloqueCalendarioId);
    var tareaCalendarioValor = $(this).siblings('.description').val();
    console.log(tareaCalendarioValor);
    localStorage.setItem(bloqueCalendarioId, tareaCalendarioValor);
  })

  //console.log("la hora actual es " + horaActual);
  function clasePorHora() {

    
    timeBlock.each(function (i) {
      var bloqueCalendarioId = $(this).attr('id');
      var hora = bloqueCalendarioId.split('-');
      //console.log(bloqueCalendarioId);
      //console.log(hora[1]);
      //var bloqueCalendarioId2 = $(this).attr('id');
      //console.log("bc2", bloqueCalendarioId2);
  //console.log("numero de vueltas" + i);

      if (parseInt(hora[1]) < horaActual) {
        console.log("hola1");
        //console.log(typeof hora[1])
        $(this).removeClass("future present").addClass("past");

      }

       if (parseInt(hora[1]) === horaActual) {
        console.log("hola2");
        $(this).removeClass("future past").addClass("present");

      }


       if (parseInt(hora[1]) > horaActual) {
        console.log("hola3");
        $(this).removeClass("present past").addClass("future");


      }
    i++;
    })
  }

  clasePorHora();


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
});
