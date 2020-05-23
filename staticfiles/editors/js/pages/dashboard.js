//[Dashboard Javascript]

//Project:	Fab Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

  

		
// donut chart
		$('.donut').peity('donut');

// world-map
jQuery('#world-map-markers').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: '#fff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    regionStyle : {
        initial : {
          fill : '#c9d6de'
        }
      },
    markerStyle: {
      initial: {
                    r: 9,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 5,
                    'stroke-opacity': 0.4
                },
                },
    enableZoom: true,
    hoverColor: '#0a89c1',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    }
});	


$('#usa').vectorMap({
	map : 'us_aea_en',
	backgroundColor : 'transparent',
	regionStyle : {
		initial : {
			fill : '#1e88e5'
		}
	}
});
// Revenue - CharJS Line
    Chart.defaults.derivedLine = Chart.defaults.line;
    var draw = Chart.controllers.line.prototype.draw;
    var custom = Chart.controllers.line.extend({
        draw: function() {
            draw.apply(this, arguments);
            var ctx = this.chart.chart.ctx;
            var _stroke = ctx.stroke;
            ctx.stroke = function() {
                ctx.save();
                ctx.shadowColor = '#ffffff';
                ctx.shadowBlur = 40;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 40;
                _stroke.apply(this, arguments)
                ctx.restore();
            }
        }
    });
		Chart.controllers.derivedLine = custom;
    var ctx = document.querySelector("#satatistics1").getContext('2d');
    var satatistics1Chart = new Chart(ctx, {
        type: 'derivedLine',
        data: {
            labels: ["Apr 02", "Apr 09", "Apr 16", "Apr 23", "Apr 30", "Apr 21", "May 07", "May 14"],
            datasets: [{
                data: [6000, 12000, 5000, 13500, 7600, 17500, 8500, 19000],
                borderWidth: 4,
                borderColor: '#ffb22b',
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#ffb22b",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#ffb22b",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(e, d) {
                    },
                    title: function() {
                        return;
                    }
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
						fontColor:'#cccccc'
                    },
                }],
                yAxes: [{
                    ticks: {
                        padding: 10,
                        stepSize: 5000,
                        max: 20000,
                        min: 0,
						fontFamily: "Poppins",
						fontColor:"#888888"
                    },
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        lineWidth: 1,
                        zeroLineColor: '#e5e5e5',
                    }
                }]
            }
        }
    });

    var ctx2 = document.querySelector("#satatistics2").getContext('2d');
    var satatistics2Chart = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ["Apr 02", "Apr 09", "Apr 16", "Apr 23", "Apr 30", "Apr 21", "May 07", "May 14"],
            datasets: [{
                data: [8000, 18000, 7000, 11500, 4000, 13500, 5000, 11000],
                borderWidth: 4,
                borderDash: [8, 4],
                borderColor: '#1e88e5',
                pointBackgroundColor: "#FFF",
                pointBorderColor: "#1e88e5",
                pointHoverBackgroundColor: "#FFF",
                pointHoverBorderColor: "#1e88e5",
                pointRadius: 0,
                pointHoverRadius: 6,
                fill: false,
            }]
        },
        options: {
            responsive: true,
            tooltips: {
                displayColors: false,
                callbacks: {
                    label: function(e, d) {
                    },
                    title: function() {
                        return;
                    }
                }
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks: {
						fontFamily: "Poppins",
						fontColor:"#ffffff"
                    },
                    gridLines: {
                        display: false,
                    },
                }],
                yAxes: [{
                    ticks: {
                        padding: 10,
                        stepSize: 5000,
                        max: 20000,
                        min: 0,
						fontFamily: "Poppins",
						fontColor:"rgba(69, 90, 100, 0)"
                    },
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: '#e5e5e5',
                    }
                }]
            }
        }
    });
	
    
	if( $('#chart_2').length > 0 ){
		var ctx2 = document.getElementById("chart_2").getContext("2d");
		var data2 = {
			labels: ["January", "February", "March", "April", "May", "June"],
			datasets: [
				{
					label: "My First dataset",
					backgroundColor: "#1e88e5",
					borderColor: "#1e88e5",
					data: [10, 59, 40, 75, 50, 45]
				}
			]
		};
		
		var hBar = new Chart(ctx2, {
			type:"horizontalBar",
			data:data2,
			
			options: {
				tooltips: {
					mode:"label"
				},
				scales: {
					yAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#666666"
						}
					}],
					xAxes: [{
						stacked: true,
						gridLines: {
							color: "rgba(135,135,135,0)",
						},
						ticks: {
							fontFamily: "Poppins",
							fontColor:"#888888"
						}
					}],
					
				},
				elements:{
					point: {
						hitRadius:40
					}
				},
				animation: {
					duration:	3000
				},
				responsive: true,
				legend: {
					display: false,
				},
				tooltip: {
					backgroundColor:'rgba(33,33,33,1)',
					cornerRadius:0,
					footerFontFamily:"'Poppins'"
				}
				
			}
		});
	};


// AREA CHART
    var area = new Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '2017-01', a: 5,  b: 4 },
		{ y: '2017-02', a: 2,  b: 3 },
		{ y: '2017-03', a: 8,  b: 7 },
		{ y: '2017-04', a: 1,  b: 5 },
		{ y: '2017-05', a: 5,  b: 2 },
		{ y: '2017-06', a: 1,  b: 3 },
		{ y: '2017-07', a: 5,  b: 2 }
      ],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Individual Score', 'Team Score'],
		fillOpacity: 1,
		lineWidth:1,
		lineColors: ['#7460ee', '#ffb22b'],
		hideHover: 'auto',
		color: '#666666'
    });
//BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: 'Jan', a: 2341, b: 1598},
        {y: 'Feb', a: 2131, b: 2021},
        {y: 'Mar', a: 4374, b: 4120},
        {y: 'Apr', a: 1312, b: 900},
        {y: 'May', a: 4393, b: 3258},
        {y: 'Jun', a: 1210, b: 400},
		{y: 'Jul', a: 3255, b: 3200},
		{y: 'Aug', a: 2323, b: 1980},
		{y: 'Sep', a: 3212, b: 2865},
		{y: 'Oct', a: 6545, b: 5129},
		{y: 'Nov', a: 2323, b: 2010},
		{y: 'Dec', a: 2356, b: 1870},
      ],
		barColors: ['#fc4b6c', '#26c6da'],
		barSizeRatio: 0.5,
		barGap:5,
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['Job Appling', 'Job Conform'],
		hideHover: 'auto',
		color: '#666666'
    });
	
	
	
	
}); // End of use strict

