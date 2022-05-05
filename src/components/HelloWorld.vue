<script>
import Tweet from "vue-tweet";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<template>
  <Tweet tweet-id="1370027087818461184" />
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
