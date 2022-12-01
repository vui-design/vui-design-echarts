import echarts from "../../../libs/echarts";
import is from "../../../utils/is";
import merge from "../../../utils/merge";
import getValueByPath from "../../../utils/getValueByPath";
import defaults from "./defaults";

// 获取 title 配置
export const getTitle = (title, titleStyle, subTitle, subTitleStyle) => {
  return {
    show: !!title || !!subTitle,
    left: "center",
    padding: [4, 0, 32, 0],
    itemGap: 8,
    text: title,
    textStyle: {
      color: "#262626",
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 16,
      ...titleStyle
    },
    subtext: subTitle,
    subtextStyle: {
      color: "#8c8c8c",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 12,
      ...subTitleStyle
    }
  };
};


// 获取 grid 配置
export const getGrid = grid => {
  return merge(true, {}, defaults.grid, grid);
};


// 获取 xAxis 配置
export const getXAxis = (data, dimension, xAxis) => {
  if (is.array(xAxis)) {
    return xAxis;
  }
  else {
    xAxis = merge(true, {}, defaults.xAxis, xAxis);

    if (xAxis.type === "category" && !xAxis.data) {
      xAxis.data = data.map(item => getValueByPath(item, dimension));
    }

    return xAxis;
  }
};

// 获取 yAxis 配置
export const getYAxis = (data, dimension, yAxis) => {
  if (is.array(yAxis)) {
    return yAxis;
  }
  else {
    yAxis = merge(true, {}, defaults.yAxis, yAxis);

    if (yAxis.type === "category" && !yAxis.data) {
      yAxis.data = data.map(item => getValueByPath(item, dimension));
    }

    return yAxis;
  }
};

// 获取 legend 配置
export const getLegend = (legend, metrics) => {
  let computed = {

  };

  if (is.json(metrics) || is.string(metrics)) {
    computed.show = false;
  }

  return merge(true, {}, defaults.legend, computed, legend);
};

// 获取 tooltip 配置
export const getTooltip = tooltip => {
  return merge(true, {}, defaults.tooltip, tooltip);
};

// 获取 data 数据
const getRows = (data, dimension, metric, dataFormatter) => {
  const metricKey = is.json(metric) ? metric.key : metric;

  return data.map(row => {
    let others = {};

    if (is.function(dataFormatter)) {
      others = dataFormatter(row, metric);
    }

    return {
      name: dimension ? getValueByPath(row, dimension) : undefined,
      value: getValueByPath(row, metricKey),
      ...others
    };
  });
};

// 获取 series 配置
export const getSeries = props => {
  const metrics = is.array(props.metrics) ? props.metrics : [props.metrics];

  return metrics.map((metric, metricIndex) => {
    const name = is.json(metric) ? metric.name : metric;
    let serie = {
      name: name,
      data: getRows(props.data, props.dimension, metric, props.dataFormatter),
      large: true
    };

    if (is.number(props.xAxisIndex)) {
      serie.xAxisIndex = props.xAxisIndex;
    }
    else if (is.function(props.xAxisIndex)) {
      serie.xAxisIndex = props.xAxisIndex(metric, metricIndex);
    }

    if (is.number(props.yAxisIndex)) {
      serie.yAxisIndex = props.yAxisIndex;
    }
    else if (is.function(props.yAxisIndex)) {
      serie.yAxisIndex = props.yAxisIndex(metric, metricIndex);
    }

    if (is.boolean(props.realtimeSort)) {
      serie.realtimeSort = props.realtimeSort;
    }
    else if (is.function(props.realtimeSort)) {
      serie.realtimeSort = props.realtimeSort(metric, metricIndex);
    }

    if (is.string(props.stack)) {
      serie.stack = props.stack;
    }
    else if (is.function(props.stack)) {
      serie.stack = props.stack(echarts, metric, metricIndex);
    }

    if (is.string(props.stackStrategy)) {
      serie.stackStrategy = props.stackStrategy;
    }
    else if (is.function(props.stackStrategy)) {
      serie.stackStrategy = props.stackStrategy(echarts, metric, metricIndex);
    }

    if (is.string(props.sampling)) {
      serie.sampling = props.sampling;
    }
    else if (is.function(props.sampling)) {
      serie.sampling = props.sampling(echarts, metric, metricIndex);
    }

    if (is.json(props.label)) {
      serie.label = props.label;
    }
    else if (is.function(props.label)) {
      serie.label = props.label(echarts, metric, metricIndex);
    }

    if (is.json(props.itemStyle)) {
      serie.itemStyle = props.itemStyle;
    }
    else if (is.function(props.itemStyle)) {
      serie.itemStyle = props.itemStyle(echarts, metric, metricIndex);
    }

    if (is.json(props.backgroundStyle)) {
      serie.showBackground = true;
      serie.backgroundStyle = props.backgroundStyle;
    }
    else if (is.function(props.backgroundStyle)) {
      serie.showBackground = true;
      serie.backgroundStyle = props.backgroundStyle(echarts, metric, metricIndex);
    }

    if (is.json(props.emphasis)) {
      serie.emphasis = props.emphasis;
    }
    else if (is.function(props.emphasis)) {
      serie.emphasis = props.emphasis(echarts, metric, metricIndex);
    }

    if (is.json(props.markPoint)) {
      serie.markPoint = props.markPoint;
    }
    else if (is.function(props.markPoint)) {
      serie.markPoint = props.markPoint(echarts, metric, metricIndex);
    }

    if (is.json(props.markLine)) {
      serie.markLine = props.markLine;
    }
    else if (is.function(props.markLine)) {
      serie.markLine = props.markLine(echarts, metric, metricIndex);
    }

    if (is.json(props.markArea)) {
      serie.markArea = props.markArea;
    }
    else if (is.function(props.markArea)) {
      serie.markArea = props.markArea(echarts, metric, metricIndex);
    }

    if (is.string(props.serieType)) {
      serie.type = props.serieType;
    }
    else if (is.function(props.serieType)) {
      serie.type = props.serieType(metric, metricIndex);
    }

    let others = {};

    if (is.json(props.serie)) {
      others = props.serie;
    }
    else if (is.function(props.serie)) {
      others = props.serie(metric, metricIndex);
    }

    return {
      ...serie,
      ...others
    };
  });
};

// 获取 ECharts 选项配置
export const getOptions = props => {
  return {
    title: getTitle(props.title, props.titleStyle, props.subTitle, props.subTitleStyle),
    color: props.color,
    grid: getGrid(props.grid),
    xAxis: getXAxis(props.data, props.dimension, props.xAxis),
    yAxis: getYAxis(props.data, props.dimension, props.yAxis),
    visualMap: props.vm,
    legend: getLegend(props.legend, props.metrics),
    dataZoom: props.zoom,
    tooltip: getTooltip(props.tooltip),
    toolbox: props.toolbox,
    animation: props.animation,
    animationThreshold: props.animationThreshold,
    animationEasing: props.animationEasing,
    animationEasingUpdate: props.animationEasingUpdate,
    animationDelay: props.animationDelay,
    animationDelayUpdate: props.animationDelayUpdate,
    animationDuration: props.animationDuration,
    animationDurationUpdate: props.animationDurationUpdate,
    series: getSeries(props)
  };
};

// 
export default {
  getTitle,
  getGrid,
  getXAxis,
  getYAxis,
  getLegend,
  getTooltip,
  getSeries,
  getOptions
};