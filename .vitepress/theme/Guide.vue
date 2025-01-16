<template>
  <div></div>
</template>

<script>
export default {
  name: "Guide",
};
</script>

<style>
.callout {
  --callout-title-color: #f5a402;
  --callout-border-color: #eb9834;
  border: 1px solid #202127;
  border-left: 10px solid var(--callout-border-color);
  background-color: #202127;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.callout .title {
  font-weight: bold;
  color: var(--callout-title-color);
  margin-bottom: 10px;
  font-size: 1.2em;
}

.callout .content {
  color: rgb(255 255 245 / 86%);
  line-height: 1.5;
}

.callout.info {
  --callout-title-color: #70a7ff;
  --callout-border-color: #2760b6;
}

.label {
  font-size: 16px;
  padding: 6px;
  padding-top: 0px;
  padding-bottom: 0px;
  font-family: sans-serif;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  display: inline-block;
  margin: 2px;
  transform: translate(1px, -1.25px);
}

.guide {
  background-color: #00965e;
}

.easy {
  background-color: #2760b6;
}

.advanced {
  background-color: rgb(141, 48, 228);
}

.difficult {
  background-color: #ff3526;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none !important;
}
</style>
