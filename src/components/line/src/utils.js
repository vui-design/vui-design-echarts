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

// 获取 xAxis 配置
export const getXAxis = (data, dimension, xAxis) => {
  let computed = {
    data: data.map(item => getValueByPath(item, dimension))
  };

  return merge(true, {}, defaults.xAxis, computed, xAxis);
};

// 获取 yAxis 配置
export const getYAxis = yAxis => {
  return merge(true, {}, defaults.yAxis, yAxis);
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

// 获取 dataZoom 配置
export const getDataZoom = (zoom, legend) => {
  if (!zoom) {
    return;
  }

  const inside = {
    type: "inside"
  };
  let slider = {
    type: "slider",
    handleSize: 24,
    height: 24,
    bottom: 8
  };

  if (legend.show) {
    slider.bottom = 40;
  }

  return [inside, slider];
};

// 获取 grid 配置
export const getGrid = (grid, title, subTitle, legend, zoom) => {
  const computed = {
    top: 24,
    bottom: 16
  };

  if (title) {
    computed.top += 16;
  }

  if (subTitle) {
    computed.top += 20;
  }

  if (legend.show) {
    computed.bottom += 16;
  }

  if (zoom) {
    computed.bottom += legend.show ? 40 : 24;
  }

  return merge(true, {}, defaults.grid, computed, grid);
};

// 获取 data 数据
const getRows = (data, dimension, metricKey) => {
  return data.map(row => {
    return {
      name: getValueByPath(row, dimension),
      value: getValueByPath(row, metricKey)
    };
  });
};

// 获取 series 配置
export const getSeries = props => {
  const { serieColors, symbol, showSymbol, smooth, stack, stackStrategy, sampling, label, lineStyle, itemStyle, areaStyle, markPoint, markLine, markArea, data, dimension } = props;
  const metrics = is.array(props.metrics) ? props.metrics : [props.metrics];

  return metrics.map((metric, metricIndex) => {
    const metricKey = is.json(metric) ? metric.key : metric;
    const metricName = is.json(metric) ? metric.name : metric;
    let serie = {
      type: "line",
      name: metricName,
      showSymbol: showSymbol,
      smooth: smooth,
      stackStrategy: stackStrategy,
      sampling: sampling,
      data: getRows(data, dimension, metricKey)
    };

    if (is.string(symbol)) {
      serie.symbol = symbol;
    }
    else if (is.function(symbol)) {
      serie.symbol = symbol(echarts, metric, metricIndex);
    }

    if (is.string(stack)) {
      serie.stack = stack;
    }
    else if (is.function(stack)) {
      serie.stack = stack(echarts, metric, metricIndex);
    }

    if (is.json(label)) {
      serie.label = label;
    }
    else if (is.function(label)) {
      serie.label = label(echarts, metric, metricIndex);
    }

    if (is.json(lineStyle)) {
      serie.lineStyle = lineStyle;
    }
    else if (is.function(lineStyle)) {
      serie.lineStyle = lineStyle(echarts, metric, metricIndex);
    }

    if (is.json(itemStyle)) {
      serie.itemStyle = itemStyle;
    }
    else if (is.function(itemStyle)) {
      serie.itemStyle = itemStyle(echarts, metric, metricIndex);
    }

    if (is.json(areaStyle)) {
      serie.areaStyle = areaStyle;
    }
    else if (is.function(areaStyle)) {
      serie.areaStyle = areaStyle(echarts, metric, metricIndex);
    }

    if (is.json(markPoint)) {
      serie.markPoint = markPoint;
    }
    else if (is.function(markPoint)) {
      serie.markPoint = markPoint(echarts, metric, metricIndex);
    }

    if (is.json(markLine)) {
      serie.markLine = markLine;
    }
    else if (is.function(markLine)) {
      serie.markLine = markLine(echarts, metric, metricIndex);
    }

    if (is.json(markArea)) {
      serie.markArea = markArea;
    }
    else if (is.function(markArea)) {
      serie.markArea = markArea(echarts, metric, metricIndex);
    }

    return serie;
  });
};

// 获取 ECharts 选项配置
export const getOptions = props => {
  const title = getTitle(props.title, props.titleStyle, props.subTitle, props.subTitleStyle);
  const color = props.color;
  const xAxis = getXAxis(props.data, props.dimension, props.xAxis);
  const yAxis = getYAxis(props.yAxis);
  const legend = getLegend(props.legend, props.metrics);
  const tooltip = getTooltip(props.tooltip);
  const toolbox = props.toolbox;
  const visualMap = props.vm;
  const dataZoom = getDataZoom(props.zoom, legend);
  const grid = getGrid(props.grid, props.title, props.subTitle, legend, props.zoom);
  const series = getSeries(props);

  return {
    title,
    color,
    xAxis,
    yAxis,
    legend,
    tooltip,
    toolbox,
    dataZoom,
    visualMap,
    grid,
    series
  };
};

// 
export default {
  getTitle,
  getXAxis,
  getYAxis,
  getLegend,
  getTooltip,
  getDataZoom,
  getGrid,
  getSeries,
  getOptions
};