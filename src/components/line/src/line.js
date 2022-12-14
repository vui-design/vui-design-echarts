import VuiEcharts from "../../echarts";
import PropTypes from "../../../utils/prop-types";
import is from "../../../utils/is";
import merge from "../../../utils/merge";
import utils from "./utils";

export const createProps = () => {
  return {
    loading: PropTypes.bool.def(false),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("auto"),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("320px"),
    data: PropTypes.array.def([]),
    dimension: PropTypes.string.def("name"),
    metrics: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]).def("value"),
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    subTitle: PropTypes.string,
    subTitleStyle: PropTypes.object,
    color: PropTypes.array,
    grid: PropTypes.object,
    xAxis: PropTypes.object,
    yAxis: PropTypes.object,
    legend: PropTypes.object,
    tooltip: PropTypes.object,
    toolbox: PropTypes.object,
    vm: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    zoom: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).def(false),
    symbol: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    showSymbol: PropTypes.bool.def(true),
    smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]).def(false),
    stack: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    stackStrategy: PropTypes.string,
    sampling: PropTypes.oneOf(["lttb", "average", "max", "min", "sum"]),
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    itemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    lineStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    areaStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    markPoint: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    markLine: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    markArea: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    options: PropTypes.object
  };
};

const VuiEchartsLine = {
  name: "vui-echarts-line",
  components: {
    VuiEcharts
  },
  props: createProps(),
  render() {
    const { $props: props } = this;

    // Computed options
    let options = utils.getOptions(props);

    // Native options
    if (is.json(props.options)) {
      options = merge(true, {}, options, props.options);
    }

    // Render
    return (
      <VuiEcharts width={props.width} height={props.height} options={options} />
    );
  }
};

export default VuiEchartsLine;