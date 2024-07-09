<template>
  <div>
    <ul :style="{columns: columns}">
      <li v-for="item in data" style="margin-bottom: 20px;">
        <a :href="item.link" target="_blank">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  columns: {
    type: String,
    default: '2'
  }
})
</script>

<style scoped>
ul {
  columns: 2;
}

li {
  width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  list-style-position: inside;
  list-style-type: square;
}
ul li{
  list-style-type: square;
}


a {
  color: black;
  text-decoration: none;
}
</style>