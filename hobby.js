var HobbyChartUtils = (function () {


    function labelFormatter(label, series) {
        return "<div style='font-size:8pt; text-align:center; padding:2px; color:white;'>" + label + "<br/>" + Math.round(series.percent) + "%</div>";
    }

    var hobbyData = [{
        label: "网球",
        data: 25
    }, {
        label: "游泳",
        data: 8
    }, {
        label: "健身",
        data: 18
    }, {
        label: "摄影",
        data: 12
    }, {
        label: "钢琴",
        data: 22
    }, {
        label: "旅游",
        data: 10
    }, {
        label: "滑雪",
        data: 5
    }];

    var drawHobbyChart = function () {
        $.plot('#hobbyHolder', hobbyData, {
            series: {
                pie: {
                    show: true,
                    radius: 3 / 4,
                    label: {
                        show: true,
                        radius: 3 / 4,
                        formatter: labelFormatter,
                        background: {
                            opacity: 0.5,
                            color: '#000'
                        }
                    }
                }
            },
            legend: {
                show: false
            }
        });
    };

    return {
        draw:drawHobbyChart
    }

}());

HobbyChartUtils.draw();

window.addEventListener("resize", HobbyChartUtils.draw);
