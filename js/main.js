

// Traffic - Chart.js //

var ctx = document.getElementById("traffic-chart").getContext('2d');
var traffic = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            lineTension: 0,
            label: '# of site visitors (millions)',
            data: [0.3, 0.4, 0.7, 1.3, 2.4, 2.9, 2.7],
            backgroundColor: [
                'rgba(26, 175, 175, 0.3)'

            ],
            borderColor: [
                'rgb(111, 115, 188)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});



// Daily Traffic - bar - graph //

var ctx = document.getElementById("bar-chart_traffic").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(204, 104, 32, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(168, 75, 8, 3)',
                'rgba(54, 162, 235, 3)',
                'rgba(255, 206, 86, 3)',
                'rgba(75, 192, 192, 3)',
                'rgba(153, 102, 255, 3)',
                'rgba(255, 159, 64, 3)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


// And for a doughnut chart
   var ctx = document.getElementById("circle-chart").getContext('2d');
   var mobileUsers = new Chart(ctx, {
       type: 'doughnut',
       data: {
           labels: ["Phones", "Tablets", "Desktop"],
           datasets: [{
               label: '',
               data: [20, 15, 65],
               backgroundColor: [
                 'rgba(29, 235, 242, 0.7)',
                 'rgba(136, 4, 244, 0.7)',
                 'rgba(239, 87, 11, 0.7)'
               ],
               borderColor: [
                 'rgba(29, 235, 242, 3)',
                  'rgba(136, 4, 244, 3)',
                 'rgba(255, 159, 64, 3)'
               ],
               borderWidth: 1
           }]
       },
       options: {
           legend: {
               position: 'right'
           },
           layout: {
               padding: {
                   left: 0,
                   right: 0,
                   top: 0,
                   bottom: 0
               }
           }
       }
   });



// Message User - Error Functionality //

var mesageSent= document.getElementById('alert-send_message');
  var alertMessage = document.getElementById('message-alert');
var alertUser = document.getElementById('alert_user');
  var nameForUser = document.getElementById('select_username');
var messageForUser = document.getElementById('message_user');
  var sendTheMessage = document.getElementById('send_message');





function messageSent() {
  if (!nameForUser.value && !messageForUser.value) {
   alertUser.style.display = "block";
    alertMessage.style.display = "block";

  }

  else if (!nameForUser.value) { alertUser.style.display = "block"; }




  else {
    nameForUser.value = "";

    messageForUser.value = "";

    alertUser.style.display = "none";

    alertMessage.style.display = "none";

    mesageSent.style.display = "block";
  }
}

 sendTheMessage.addEventListener("click", function(e){
  e.preventDefault();
  messageSent();
});
