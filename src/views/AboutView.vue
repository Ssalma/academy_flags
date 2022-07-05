<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import { myData } from "../api/data";
export default {
  data: () => ({
    dummyData: myData,
  }),
  mounted() {
    console.log(this.dummyData);
  },
};
</script>

