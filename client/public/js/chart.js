"use strict";
document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {

        if (document.querySelector("#bigchart")) {
            var options = {
                series: [{
                    data: [{
                        x: new Date(1538778600000),
                        y: [6629.81, 6650.5, 6623.04, 6633.33]
                    },
                    {
                        x: new Date(1538780400000),
                        y: [6632.01, 6643.59, 6620, 6630.11]
                    },
                    {
                        x: new Date(1538782200000),
                        y: [6630.71, 6648.95, 6623.34, 6635.65]
                    },
                    {
                        x: new Date(1538784000000),
                        y: [6635.65, 6651, 6629.67, 6638.24]
                    },
                    {
                        x: new Date(1538785800000),
                        y: [6638.24, 6640, 6620, 6624.47]
                    },
                    {
                        x: new Date(1538787600000),
                        y: [6624.53, 6636.03, 6621.68, 6624.31]
                    },
                    {
                        x: new Date(1538789400000),
                        y: [6624.61, 6632.2, 6617, 6626.02]
                    },
                    {
                        x: new Date(1538791200000),
                        y: [6627, 6627.62, 6584.22, 6603.02]
                    },
                    {
                        x: new Date(1538793000000),
                        y: [6605, 6608.03, 6598.95, 6604.01]
                    },
                    {
                        x: new Date(1538794800000),
                        y: [6604.5, 6614.4, 6602.26, 6608.02]
                    },
                    {
                        x: new Date(1538796600000),
                        y: [6608.02, 6610.68, 6601.99, 6608.91]
                    },
                    {
                        x: new Date(1538798400000),
                        y: [6608.91, 6618.99, 6608.01, 6612]
                    },
                    {
                        x: new Date(1538800200000),
                        y: [6612, 6615.13, 6605.09, 6612]
                    },
                    {
                        x: new Date(1538802000000),
                        y: [6612, 6624.12, 6608.43, 6622.95]
                    },
                    {
                        x: new Date(1538803800000),
                        y: [6623.91, 6623.91, 6615, 6615.67]
                    },
                    {
                        x: new Date(1538805600000),
                        y: [6618.69, 6618.74, 6610, 6610.4]
                    },
                    {
                        x: new Date(1538807400000),
                        y: [6611, 6622.78, 6610.4, 6614.9]
                    },
                    {
                        x: new Date(1538809200000),
                        y: [6614.9, 6626.2, 6613.33, 6623.45]
                    },
                    {
                        x: new Date(1538811000000),
                        y: [6623.48, 6627, 6618.38, 6620.35]
                    },
                    {
                        x: new Date(1538812800000),
                        y: [6619.43, 6620.35, 6610.05, 6615.53]
                    },
                    {
                        x: new Date(1538814600000),
                        y: [6615.53, 6617.93, 6610, 6615.19]
                    },
                    {
                        x: new Date(1538816400000),
                        y: [6615.19, 6621.6, 6608.2, 6620]
                    },
                    {
                        x: new Date(1538818200000),
                        y: [6619.54, 6625.17, 6614.15, 6620]
                    },
                    {
                        x: new Date(1538820000000),
                        y: [6620.33, 6634.15, 6617.24, 6624.61]
                    },
                    {
                        x: new Date(1538821800000),
                        y: [6625.95, 6626, 6611.66, 6617.58]
                    },
                    {
                        x: new Date(1538823600000),
                        y: [6619, 6625.97, 6595.27, 6598.86]
                    },
                    {
                        x: new Date(1538825400000),
                        y: [6598.86, 6598.88, 6570, 6587.16]
                    },
                    {
                        x: new Date(1538827200000),
                        y: [6588.86, 6600, 6580, 6593.4]
                    },
                    {
                        x: new Date(1538829000000),
                        y: [6593.99, 6598.89, 6585, 6587.81]
                    },
                    {
                        x: new Date(1538830800000),
                        y: [6587.81, 6592.73, 6567.14, 6578]
                    },
                    {
                        x: new Date(1538832600000),
                        y: [6578.35, 6581.72, 6567.39, 6579]
                    },
                    {
                        x: new Date(1538834400000),
                        y: [6579.38, 6580.92, 6566.77, 6575.96]
                    },
                    {
                        x: new Date(1538836200000),
                        y: [6575.96, 6589, 6571.77, 6588.92]
                    },
                    {
                        x: new Date(1538838000000),
                        y: [6588.92, 6594, 6577.55, 6589.22]
                    },
                    {
                        x: new Date(1538839800000),
                        y: [6589.3, 6598.89, 6589.1, 6596.08]
                    },
                    {
                        x: new Date(1538841600000),
                        y: [6597.5, 6600, 6588.39, 6596.25]
                    },
                    {
                        x: new Date(1538843400000),
                        y: [6598.03, 6600, 6588.73, 6595.97]
                    },
                    {
                        x: new Date(1538845200000),
                        y: [6595.97, 6602.01, 6588.17, 6602]
                    },
                    {
                        x: new Date(1538847000000),
                        y: [6602, 6607, 6596.51, 6599.95]
                    },
                    {
                        x: new Date(1538848800000),
                        y: [6600.63, 6601.21, 6590.39, 6591.02]
                    },
                    {
                        x: new Date(1538850600000),
                        y: [6591.02, 6603.08, 6591, 6591]
                    },
                    {
                        x: new Date(1538852400000),
                        y: [6591, 6601.32, 6585, 6592]
                    },
                    {
                        x: new Date(1538854200000),
                        y: [6593.13, 6596.01, 6590, 6593.34]
                    },
                    {
                        x: new Date(1538856000000),
                        y: [6593.34, 6604.76, 6582.63, 6593.86]
                    },
                    {
                        x: new Date(1538857800000),
                        y: [6593.86, 6604.28, 6586.57, 6600.01]
                    },
                    {
                        x: new Date(1538859600000),
                        y: [6601.81, 6603.21, 6592.78, 6596.25]
                    },
                    {
                        x: new Date(1538861400000),
                        y: [6596.25, 6604.2, 6590, 6602.99]
                    },
                    {
                        x: new Date(1538863200000),
                        y: [6602.99, 6606, 6584.99, 6587.81]
                    },
                    {
                        x: new Date(1538865000000),
                        y: [6587.81, 6595, 6583.27, 6591.96]
                    },
                    {
                        x: new Date(1538866800000),
                        y: [6591.97, 6596.07, 6585, 6588.39]
                    },
                    {
                        x: new Date(1538868600000),
                        y: [6587.6, 6598.21, 6587.6, 6594.27]
                    },
                    {
                        x: new Date(1538870400000),
                        y: [6596.44, 6601, 6590, 6596.55]
                    },
                    {
                        x: new Date(1538872200000),
                        y: [6598.91, 6605, 6596.61, 6600.02]
                    },
                    {
                        x: new Date(1538874000000),
                        y: [6600.55, 6605, 6589.14, 6593.01]
                    },
                    {
                        x: new Date(1538875800000),
                        y: [6593.15, 6605, 6592, 6603.06]
                    },
                    {
                        x: new Date(1538877600000),
                        y: [6603.07, 6604.5, 6599.09, 6603.89]
                    },
                    {
                        x: new Date(1538879400000),
                        y: [6604.44, 6604.44, 6600, 6603.5]
                    },
                    {
                        x: new Date(1538881200000),
                        y: [6603.5, 6603.99, 6597.5, 6603.86]
                    },
                    {
                        x: new Date(1538883000000),
                        y: [6603.85, 6605, 6600, 6604.07]
                    },
                    {
                        x: new Date(1538884800000),
                        y: [6604.98, 6606, 6604.07, 6606]
                    },
                    ]
                }],
                stroke: {
                    curve: ["smooth", "stepline", "stepline"],
                    colors: ["#BCE70C"],
                    width: 2,
                },
                chart: {
                    type: 'candlestick',
                    height: 350,
                    toolbar: {
                        show: false,
                    },
                },
                grid: {
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    xaxis: {
                        lines: {
                            show: true
                        }
                    },
                },
                plotOptions: {
                    candlestick: {
                        colors: {
                            upward: '#BCE70C',
                        }
                    }
                },
                tooltip: {
                    enabled: false,
                },
                responsive: [
                    {
                        breakpoint: 320,
                        options: {
                            chart: {
                                height: "100%",
                            },
                        },
                    },
                    {
                        breakpoint: 768,
                        options: {
                            chart: {
                                height: "100%",
                            },
                        },
                    },
                ],
                xaxis: {
                    type: 'datetime',
                    labels: {
                        style: {
                            fontSize: "12px",
                            colors: "#D2D9E4",
                            cssClass: "chart-label-x",
                        },
                    },

                },
                yaxis: {
                    opposite: true,
                    labels: {
                        style: {
                            fontSize: "12px",
                            colors: "#D2D9E4",
                            cssClass: "chart-label-x",
                        },
                    },
                },
            };
            var chart = new ApexCharts(document.querySelector("#bigchart"), options);
            chart.render();
        }

        if (document.querySelector("#crm-total-customers")) {
            var cmnchart = {
                chart: {
                    type: 'line',
                    height: 40,
                    width: "50%",
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                series: [{
                    name: 'Value',
                    data: [0, 14, 10, 12, 23, 20, 22, 9, 12]
                }],
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["#BCE70C"],
            }
            document.getElementById('crm-total-customers').innerHTML = '';
            var cmnchart = new ApexCharts(document.querySelector("#crm-total-customers"), cmnchart);
            cmnchart.render();
        }

        if (document.querySelector("#crm-total-customers2")) {
            var cmnchart = {
                chart: {
                    type: 'line',
                    height: 40,
                    width: "50%",
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                series: [{
                    name: 'Value',
                    data: [0, 14, 10, 12, 23, 20, 22, 9, 12]
                }],
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["#BCE70C"],
            }
            document.getElementById('crm-total-customers2').innerHTML = '';
            var cmnchart = new ApexCharts(document.querySelector("#crm-total-customers2"), cmnchart);
            cmnchart.render();
        }

        if (document.querySelector("#crm-total-customers3")) {
            var cmnchart = {
                chart: {
                    type: 'line',
                    height: 40,
                    width: "50%",
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                series: [{
                    name: 'Value',
                    data: [0, 14, 10, 12, 23, 20, 22, 9, 12]
                }],
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["#BCE70C"],
            }
            document.getElementById('crm-total-customers3').innerHTML = '';
            var cmnchart = new ApexCharts(document.querySelector("#crm-total-customers3"), cmnchart);
            cmnchart.render();
        }

        if (document.querySelector("#crm-total-customers4")) {
            var cmnchart = {
                chart: {
                    type: 'line',
                    height: 40,
                    width: "50%",
                    sparkline: {
                        enabled: true
                    }
                },
                stroke: {
                    show: true,
                    curve: 'smooth',
                    lineCap: 'butt',
                    colors: undefined,
                    width: 1.5,
                    dashArray: 0,
                },
                series: [{
                    name: 'Value',
                    data: [0, 14, 10, 12, 23, 20, 22, 9, 12]
                }],
                yaxis: {
                    min: 0,
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                xaxis: {
                    show: false,
                    axisBorder: {
                        show: false
                    },
                },
                tooltip: {
                    enabled: false,
                },
                colors: ["#BCE70C"],
            }
            document.getElementById('crm-total-customers4').innerHTML = '';
            var cmnchart = new ApexCharts(document.querySelector("#crm-total-customers4"), cmnchart);
            cmnchart.render();
        }


        if (document.querySelector("#chart-timeline")) {
            var options = {
                series: [{
                    data: [
                        [1327359600000, 30.95],
                        [1327446000000, 31.34],
                        [1327532400000, 31.18],
                        [1328569200000, 32.28],
                        [1328655600000, 32.10],
                        [1328742000000, 32.65],
                        [1328828400000, 32.21],
                        [1329087600000, 32.35],
                        [1329174000000, 32.44],
                        [1329346800000, 32.86],
                        [1329433200000, 32.75],
                        [1329778800000, 32.54],
                        [1329865200000, 32.33],
                        [1329951600000, 32.97],
                        [1330038000000, 33.41],
                        [1330297200000, 33.27],
                        [1330383600000, 33.27],
                        [1330470000000, 32.89],
                        [1330556400000, 33.10],
                        [1330642800000, 33.73],
                        [1330902000000, 33.22],
                        [1330988400000, 31.99],
                        [1331074800000, 32.41],
                        [1331161200000, 33.05],
                        [1331247600000, 33.64],
                        [1331506800000, 33.56],
                        [1331593200000, 34.22],
                        [1331679600000, 33.77],
                        [1331766000000, 34.17],
                        [1331852400000, 33.82],
                        [1332111600000, 34.51],
                        [1332198000000, 33.16],
                        [1332284400000, 33.56],
                        [1332370800000, 33.71],
                        [1332457200000, 33.81],
                        [1332712800000, 34.40],
                        [1332799200000, 34.63],
                        [1332885600000, 34.46],
                        [1332972000000, 34.48],
                        [1333058400000, 34.31],
                        [1333317600000, 34.70],
                        [1333404000000, 34.31],
                        [1333490400000, 33.46],
                        [1333576800000, 33.59],
                        [1333922400000, 33.22],
                        [1334008800000, 32.61],
                        [1334095200000, 33.01],
                        [1334181600000, 33.55],
                        [1334268000000, 33.18],
                        [1334527200000, 32.84],
                        [1334613600000, 33.84],
                        [1334700000000, 33.39],
                        [1334786400000, 32.91],
                        [1334872800000, 33.06],
                        [1335132000000, 32.62],
                        [1335218400000, 32.40],
                        [1335304800000, 33.13],
                        [1335391200000, 33.26],
                        [1335477600000, 33.58],
                        [1335736800000, 33.55],
                        [1335823200000, 33.77],
                        [1336341600000, 32.52],
                        [1336428000000, 32.67],
                        [1336514400000, 32.52],
                        [1336600800000, 31.92],
                        [1336687200000, 32.20],
                        [1336946400000, 32.23],
                        [1337032800000, 32.33],
                        [1337119200000, 32.36],
                        [1337205600000, 32.01],
                        [1337292000000, 31.31],
                        [1337551200000, 32.01],
                    ]
                }],
                chart: {
                    id: "area-datetime",
                    type: "area",
                    height: 350,
                    zoom: {
                        autoScaleYaxis: true,
                    },
                    toolbar: {
                        show: false,
                    },
                },
                stroke: {
                    curve: ["smooth", "stepline", "stepline"],
                    colors: ["#BCE70C"],
                    width: 2,
                },
                annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: '#999',
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: "#fff",
                                background: '#00E396'
                            }
                        }
                    }],
                    xaxis: [{
                        x: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: "#fff",
                                background: '#775DD0'
                            }
                        }
                    }]
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                },
                xaxis: {
                    type: "datetime",
                    labels: {
                        style: {
                            fontSize: "16px",
                            colors: "#FFFEFC",
                            cssClass: "chart-label-x",
                        },
                    },
                },
                yaxis: {
                    show: true,
                    labels: {
                        show: true,
                        align: 'right',
                        minWidth: 0,
                        maxWidth: 160,
                        style: {
                            fontSize: "16px",
                            colors: "#FFFEFC",
                            cssClass: "chart-label-x",
                        },
                    },
                    tooltip: {
                        enabled: true,
                    },
                },
                tooltip: {
                    enabled: false,
                },
                responsive: [
                    {
                        breakpoint: 320,
                        options: {
                            chart: {
                                height: "100%",
                            },
                        },
                    },
                    {
                        breakpoint: 768,
                        options: {
                            chart: {
                                height: "100%",
                            },
                        },
                    },
                ],
                fill: {
                    type: "gradient",
                    colors: [
                        "rgba(188, 255, 164, 0.20)",
                        "rgba(152, 216, 129, 0.12)",
                        "rgba(90, 190, 54, 0.02)",
                    ],
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 1,
                        opacityTo: 0.6,
                        shade: "dark",
                        stops: [0, 100],
                    },
                },
                grid: {
                    show: true,
                    borderColor: "rgba(255, 255, 255, 0.20)",
                },
                colors: ["#BCE70C"],
            };
            var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
            chart.render();
        }
        if (document.querySelector("#roundedchart")) {
            var options = {
                series: [44, 55, 41, 17, 15],
                chart: {
                    type: 'donut',
                    toolbar: {
                        show: false,
                    },
                },
                labels: ["Swipe", "Uniswap", "Balancer", "Swapcash", "SushiSwap"],
                stroke: {
                    curve: ["smooth", "stepline", "stepline"],
                    width: 0,
                },
                legend: {
                    show: true,
                    showForSingleSeries: false,
                    showForNullSeries: true,
                    showForZeroSeries: true,
                    horizontalAlign: "center",
                    floating: false,
                    fontSize: "16px",
                    fontFamily: "roboto, Arial",
                    fontWeight: 400,
                    inverseOrder: false,
                    customLegendItems: [],
                    offsetX: 8,
                    itemMargin: {
                        vertical: 6,
                    },
                    labels: {
                        colors: "#FFF",
                        useSeriesColors: false,
                    },
                },
                responsive: [
                    {
                        breakpoint: 1400,
                        options: {
                            chart: {
                                width: 380,
                            },
                            legend: {
                                position: "right",
                            },
                        },
                    },
                    {
                        breakpoint: 400,
                        options: {
                            chart: {
                                width: 300,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                    {
                        breakpoint: 320,
                        options: {
                            chart: {
                                width: 270,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            };

            var chart = new ApexCharts(document.querySelector("#roundedchart"), options);
            chart.render();
        }

    });
});