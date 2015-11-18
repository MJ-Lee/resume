var productRadarChartData = {
    labels: ["学习能力", "执行能力", "沟通能力", "行业融入感+主人翁精神", "心态和情商", "技术基础修养", "项目管理", "专业设计能力", "数据分析", "关联知识", "产品规划，版本发布", "市场分析能力", "商务沟通(BD)", "市场营销", "渠道管理", "市场/用户的调研与分析", "方法论建设", "知识传承"],
    datasets: [{
        label: "产品技能",
        fillColor: "rgba(151,187,205,0.2)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        data: [95, 90, 90, 100, 90, 100, 85, 60, 60, 70, 0, 0, 0, 0, 0, 0, 85, 60]
    }]
};


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

window.onload = function() {
    window.productRadar = new Chart(document.getElementById("product-radar-canvas").getContext("2d")).Radar(productRadarChartData, {
        responsive: true,
        pointLabelFontSize: 10,
        pointLabelFontStyle: "bold"
    });
};


$('#collapseOne').on('shown.bs.collapse', function() {
    window.productRadar = new Chart(document.getElementById("product-radar-canvas").getContext("2d")).Radar(productRadarChartData, {
        responsive: true,
        pointLabelFontSize: 10,
        pointLabelFontStyle: "bold"
    });
});


$('#collapseTwo').on('shown.bs.collapse', function() {
    window.frontendRadar = new Chart(document.getElementById("frontend-radar-canvas").getContext("2d")).Radar(frontendRadarChartData, {
        responsive: true,
        pointLabelFontSize: 10,
        pointLabelFontStyle: "bold"
    });
});
