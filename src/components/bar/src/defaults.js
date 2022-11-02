
export default {
  // 默认 xAxis 配置
  xAxis: {
    type: "category"
  },
  // 默认 yAxis 配置
  yAxis: {
    type: "value",
    nameLocation: "center"
  },
  // 默认 legend 配置
  legend: {
    show: true,
    type: "scroll",
    orient: "horizontal",
    left: "center",
    top: "bottom",
    height: 20,
    itemGap: 12,
    itemWidth: 12,
    itemHeight: 8,
    pageButtonGap: 16,
    pageButtonItemGap: 4,
    pageIconSize: 12,
    pageIconColor: "#595959",
    pageIconInactiveColor: "#bfbfbf",
    pageTextStyle: {
      color: "#595959",
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 20
    },
    textStyle: {
      padding: [0, 0, -2, 2],
      color: "#8c8c8c",
      fontSize: 12,
      lineHeight: 20,
      rich: {
        a: {
          verticalAlign: "middle"
        }
      }
    }
  },
  // 默认 tooltip 配置
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      label: {
        backgroundColor: "auto",
        padding: [2, 8, 0, 8],
        fontSize: 12,
        lineHeight: 20
      }
    },
    borderWidth: 0,
    backgroundColor: "#fff",
    extraCssText: "box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1)",
    padding: 12,
    textStyle: {
      color: "#595959",
      fontSize: 12,
      fontWeight: 400
    }
  },
  // 默认 grid 配置
  grid: {
    containLabel: true,
    left: 24,
    right: 8
  }
};