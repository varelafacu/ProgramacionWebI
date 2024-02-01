document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid'],
      locale: 'es',
      events: [
            {
                title: 'APERTURA DE INSCRIPCIÓN - HTML5',
                start: '2023-06-07',
                end:'2023-06-10'
            },
            {
                title: 'APERTURA DE INSCRIPCIÓN - CURSO CSS',
                start: '2023-06-28',
                end:'2023-07-02'
            },
            {
                title: 'INSCRIPCIÓNES - REACT JS FULL',
                start: '2023-07-10',
                end:'2023-07-15'
            },
            {
                title: 'INCRIPCIONES PARA JAVASCRIPT ENGINEER',
                start: '2023-08-01',
                end: '2023-08-10'
            },
            {
                title: 'INCRIPCIONES PARA JAVASCRIPT SEMI-SENIOR',
                start: '2023-08-20',
                end: '2023-08-23'
            }
        ]
    }); 

    calendar.render();
  });