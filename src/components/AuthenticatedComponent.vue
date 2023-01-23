<template>
  <div>
    <DashBoardVue></DashBoardVue>
    <slot></slot>
  </div>
</template>
<script>
import DashBoardVue from "../components/DashboardVue.vue";
export default {
  name: "AuthenticatedComponent",
  components: { DashBoardVue },
  data() {
    return {
      name: "",
    };
  },
};
</script>
