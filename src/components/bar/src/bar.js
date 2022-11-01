import VuiEcharts from "../../echarts";
import PropTypes from "../../../utils/prop-types";
import is from "../../../utils/is";
import utils from "./utils";

export const createProps = () => {
  return {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("auto"),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("300px"),
    data: PropTypes.array.def([]),
    dimension: PropTypes.string.def("name"),
    metrics: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).def("value"),
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    subTitle: PropTypes.string,
    subTitleStyle: PropTypes.object,
    colors: PropTypes.array,
    xAxis: PropTypes.object,
    yAxis: PropTypes.object,
    legend: PropTypes.object,
    tooltip: PropTypes.object,
    zoomable: PropTypes.bool.def(false),
    grid: PropTypes.object,
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]).def("60%"),
    label: PropTypes.object,
    percentage: PropTypes.bool.def(true)
  };
};

const VuiEchartsBar = {
  name: "vui-echarts-bar",
  components: {
    VuiEcharts
  },
  props: createProps(),
  methods: {
    
  },
  render() {
    const { $props: props } = this;

    // options
    const title = utils.getTitle(props.title, props.titleStyle, props.subTitle, props.subTitleStyle);
    const xAxis = utils.getXAxis(props.data, props.dimension, props.xAxis);
    const yAxis = utils.getYAxis(props.yAxis);
    const legend = utils.getLegend(props.legend, props.metrics);
    const tooltip = utils.getTooltip(props.tooltip, props.metrics);
    const dataZoom = utils.getDataZoom(props.zoomable, legend);
    const grid = utils.getGrid(props.grid, props.title, props.subTitle, legend, props.zoomable);
    const series = utils.getSeries(props.data, props.dimension, props.metrics, props.colors);
    const options = {
      title,
      xAxis,
      yAxis,
      dataZoom,
      legend,
      tooltip,
      grid,
      series
    };

    console.log(options)

    // render
    return (
      <VuiEcharts width={props.width} height={props.height} options={options} />
    );
  }
};

export default VuiEchartsBar;