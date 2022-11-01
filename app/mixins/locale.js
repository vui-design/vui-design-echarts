import config from "app/config";

export default {
  methods: {
    translate(path) {
      if (!config.useI18n || !this.$te || !this.$t) {
        return path;
      }

      return this.$te(path) ? this.$t(path) : path;
    }
  }
};