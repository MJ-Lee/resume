var SkillUtils = (function () {
    'use strict';

    var frontendRadarChartData = {
        labels: ["代码规范", "框架架构", "设计模式应用", "项目管理工具", "个人模块库"],
        datasets: [{
            label: "Java 技能熟练度",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(64,131,44,0.9)",
            pointColor: "rgba(64,131,44,0.9)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [100, 100, 100, 70, 80]
        }, {
            label: "Javascript 技能熟练度",
            fillColor: "rgba(34,115,222,0.2)",
            strokeColor: "rgba(34,115,222,1)",
            pointColor: "rgba(34,115,222,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [100, 90, 100, 90, 100]
        }]
    };

    var drawRadar = function () {

        var chart = new window.Chart(document.getElementById("frontend-radar-canvas").getContext("2d")).Radar(frontendRadarChartData, {
            responsive: true,
            pointLabelFontSize: 10,
            pointLabelFontStyle: "bold"
        });
        return chart;
    };

    return {
        draw: drawRadar
    };

}());

window.onload = function () {
    'use strict';
    SkillUtils.draw();
};
