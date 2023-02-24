<script setup>
const { office } = defineProps(['office'])
// console.log('props:', office)
</script>

<template>
<h2 class="clear_b txt_center m-tb3">{{ office.name }}</h2>

<div class="tablebox ">
  <table class="basictable">
    <thead>
    <tr>
      <th rowspan="2">호기</th>
      <th rowspan="2">연료</th>
      <th colspan="2">질소산화물<br/>(NOx,ppm)</th>
      <th rowspan="2">운전현황</th>
      <th rowspan="2">전송시각</th>
    </tr>
    <tr>
      <td>배출기준</td>
      <td>배출농도</td>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td>1 호기</td>
      <td>LNG</td>
      <td>34</td>
      <td>-</td>
      <td>정지</td>
      <td>2022.11.30  11:30</td>
    </tr>
    <tr>
      <td>1 호기</td>
      <td>LNG</td>
      <td>34</td>
      <td>-</td>
      <td>정지</td>
      <td>2022.11.30  11:30</td>
    </tr>
    </tbody>
  </table>
</div>
</template>

<style scoped>

</style>