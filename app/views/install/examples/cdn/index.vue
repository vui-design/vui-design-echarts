<template>
  <coding>{{code}}</coding>
</template>

<script>
  import Coding from "app/components/coding";
  import code from "./code";

  export default {
    components: {
      Coding
    },
    data() {
      return {
        code
      };
    }
  };
</script>