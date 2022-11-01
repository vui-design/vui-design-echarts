import is from "../../../utils/is";
import merge from "../../../utils/merge";
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
    data: data.map(item => item[dimension])
  };

  return merge(true, defaults.xAxis, computed, xAxis);
};

// 获取 yAxis 配置
export const getYAxis = yAxis => {
  return merge(true, defaults.yAxis, yAxis);
};

// 获取 legend 配置
export const getLegend = (legend, metrics) => {
  let computed = {

  };

  if (is.object(metrics) || is.string(metrics)) {
    computed.show = false;
  }

  return merge(true, defaults.legend, computed, legend);
};

// 获取 tooltip 配置
export const getTooltip = (tooltip, metrics) => {
  const computed = {
    trigger: is.array(metrics) ? "axis" : "item"
  };

  return merge(true, defaults.tooltip, computed, tooltip);
};

// 获取 dataZoom 配置
export const getDataZoom = (zoomable, legend) => {
  if (!zoomable) {
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
export const getGrid = (grid, title, subTitle, legend, zoomable) => {
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

  if (zoomable) {
    computed.bottom += legend.show ? 40 : 24;
  }

  return merge(true, defaults.grid, computed, grid);
};

// 获取 data 数据
const getRows = (data, dimension, metrics) => {
  return data.map(row => {
    return {
      name: row[dimension],
      value: row[metrics]
    };
  });
};

// 获取 series 配置
export const getSeries = (data, dimension, metrics, colors) => {
  let series = [];

  if (is.object(metrics) || is.string(metrics)) {
    let serie = {
      type: "bar",
      large: true,
      itemStyle: {},
      emphasis: {
        focus: "series"
      },
      data: getRows(data, dimension, is.object(metrics) ? metrics.key : metrics)
    };

    if (is.array(colors) && colors.length > 0) {
      serie.itemStyle.color = params => colors[params.dataIndex % colors.length];
    }

    series.push(serie);
  }
  else if (is.array(metrics)) {
    series = metrics.map(metric => {
      let serie = {
        type: "bar",
        name: is.object(metric) ? metric.label : metric,
        large: true,
        itemStyle: {},
        emphasis: {
          focus: "series"
        },
        data: getRows(data, dimension, is.object(metric) ? metric.key : metric),
      };
  
      if (is.array(colors) && colors.length > 0) {
        serie.itemStyle.color = params => colors[params.dataIndex % colors.length];
      }

      return serie;
    });
  }

  return series;
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
  getSeries
};