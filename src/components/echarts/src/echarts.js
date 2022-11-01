import VuiEchartsResizeObserver from "../../resize-observer";
import PropTypes from "../../../utils/prop-types";
import is from "../../../utils/is";
import echarts from "../../../libs/echarts";

export const createProps = () => {
  return {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("auto"),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def("300px"),
    options: PropTypes.object
  };
};

const VuiEcharts = {
  name: "vui-echarts",
  components: {
    VuiEchartsResizeObserver
  },
  props: createProps(),
  data() {
    return {
      chart: undefined
    };
  },
  methods: {
    init() {
      if (!is.object(this.options)) {
        return this.destroy();
      }

      if (this.chart) {
        this.chart.setOption(this.options, {
          notMerge: true
        });
      }
      else {
        this.chart = echarts.init(this.$el, "default");
        this.chart.setOption(this.options);
      }
    },
    resize() {
      if (!this.chart) {
        return;
      }

      this.chart.resize();
    },
    destroy() {
      if (!this.chart) {
        return;
      }

      this.chart.dispose();
      this.chart = undefined;
    },
    handleResize() {
      this.resize();
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.destroy();
  },
  render() {
    const { $props: props, handleResize } = this;
    const style = {
      width: is.string(props.width) ? props.width : (props.width + "px"),
      height: is.string(props.height) ? props.height : (props.height + "px")
    };

    return (
      <VuiEchartsResizeObserver onResize={handleResize}>
        <div style={style}></div>
      </VuiEchartsResizeObserver>
    );
  }
};

export default VuiEcharts;