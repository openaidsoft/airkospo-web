<script setup>
import { ref } from 'vue'
import Tab from './component/Tab.vue'

const activeTab = ref({ id: 'si', name: '신인천 빛드림본부' })
const offices = [
  { id: 'si', name: '신인천 빛드림본부' },
  { id: 'yw', name: '영월 빛드림본부' },
  { id: 'ad', name: '안동 빛드림본부' },
  { id: 'sc', name: '삼척 빛드림본부' },
  { id: 'bs', name: '부산 빛드림본부' },
  { id: 'hd', name: '하동 빛드림본부' },
  { id: 'nj', name: '남제주 빛드림본부' },
  { id: 'hr', name: '한림 빛드림발전소' },
]

const onClick = (tab) => {
  activeTab.value = tab
}

</script>

<template>
  <!-- <ul class="overflow_h subtab">
		<li class="on"><a href="">신인천<span class="br"> 빛드림본부</a></li>
		<li><a href="">영월<span class="br"> 빛드림본부</a></li>
		<li><a href="">안동<span class="br"> 빛드림본부</a></li>
		<li><a href="">삼척<span class="br"> 빛드림본부</a></li>
		<li><a href="">부산<span class="br"> 빛드림본부</a></li>
		<li><a href="">하동<span class="br"> 빛드림본부</a></li>
		<li><a href="">남제주<span class="br"> 빛드림본부</a></li>
		<li><a href="">한림<span class="br"> 빛드림본부</a></li>
	</ul> -->
  <ul class="overflow_h subtab">
    <li v-for="o in offices" :class="activeTab.id === o.id ? 'on' : ''" @click.prevent="onClick(o)"><a href="">{{ o.name }}</a></li>
		<!-- <li class="on"><a href="">신인천 빛드림본부</a></li>
		<li><a href="">영월 빛드림본부</a></li>
		<li><a href="">안동 빛드림본부</a></li>
		<li><a href="">삼척 빛드림본부</a></li>
		<li><a href="">부산 빛드림본부</a></li>
		<li><a href="">하동 빛드림본부</a></li>
		<li><a href="">남제주 빛드림본부</a></li>
		<li><a href="">한림 빛드림발전소</a></li> -->
	</ul>

	<Tab :office="activeTab" />
</template>

<style scoped>

</style>
