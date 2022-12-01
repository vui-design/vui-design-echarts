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
    dimension: PropTypes.string,
    metrics: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    titleStyle: PropTypes.object,
    subTitle: PropTypes.string,
    subTitleStyle: PropTypes.object,
    color: PropTypes.array,
    grid: PropTypes.object,
    axis: PropTypes.oneOf(["normal", "reverse"]).def("normal"),
    xAxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    yAxis: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    vm: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    legend: PropTypes.object,
    zoom: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).def(false),
    tooltip: PropTypes.object,
    toolbox: PropTypes.object,
    animation: PropTypes.bool.def(true),
    animationThreshold: PropTypes.number.def(2000),
    animationEasing: PropTypes.string.def("cubicOut"),
    animationEasingUpdate: PropTypes.string.def("cubicInOut"),
    animationDelay: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).def(0),
    animationDelayUpdate: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).def(0),
    animationDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).def(1000),
    animationDurationUpdate: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).def(300),
    xAxisIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).def(0),
    yAxisIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.func]).def(0),
    realtimeSort: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).def(false),
    stack: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    stackStrategy: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    sampling: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    label: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    itemStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    backgroundStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    emphasis: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    markPoint: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    markLine: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    markArea: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    serieType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).def("bar"),
    serie: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    dataFormatter: PropTypes.func,
    options: PropTypes.object
  };
};

const VuiEchartsBar = {
  name: "vui-echarts-bar",
  components: {
    VuiEcharts
  },
  props: createProps(),
  methods: {
    handleInit(instance) {
      this.$emit("init", instance);
    }
  },
  render() {
    const { $props: props, handleInit } = this;

    // Computed options
    let options = utils.getOptions(props);

    // Native options
    if (is.json(props.options)) {
      options = merge(true, {}, options, props.options);
    }

    // Render
    return (
      <VuiEcharts width={props.width} height={props.height} options={options} onInit={handleInit} />
    );
  }
};

export default VuiEchartsBar;