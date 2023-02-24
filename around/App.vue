<script setup>
import { ref } from 'vue'
import Tab from './component/Tab.vue'

const activeTab = ref({ id: 'so', name: '아황산가스' })
const items = [
  { id: 'so', name: '아황산가스' },
  { id: 'no', name: '이산화질소' },
  { id: 'pm10', name: '미세먼지' },
  { id: 'pm25', name: '초미세먼지' },
]

const onClick = (tab) => {
  activeTab.value = tab
}
</script>

<template>
<ul class="overflow_h subtab subtab4">
  <li v-for="item in items" :class="activeTab.id === item.id ? 'on' : ''" @click.prevent="onClick(item)"><a href="">{{ item.name }}</a></li>
  <!-- <li class="on"><a href="">아황산가스</a></li>
  <li><a href="">이산화질소</a></li>
  <li><a href="">미세먼지</a></li>
  <li><a href="">초미세먼지</a></li> -->
</ul>

<h2 class="clear_b  m-t3">{{ activeTab.name }}</h2>
<p class="m-b3">황산화물의 일종으로 물에 잘 녹는 무색의 자극적인 냄새가 나는 물연성 가스이다. <br/>천연으로는 화산, 온천 등에 존재하고 발전소, 난방장치, 금속 제련공장, 정유공장 및 기타 산업공정 등에서 발생한다.</p>
<div class="overflow_h m-b3 txt_center">
  <div class="col-md-6 m-t1 m-b2">
    <div class="position_r">
      <div class="tablethide">
        <dl class="arounddl around1">
          <dt>강원대</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2">
          <dt>임원리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around3">
          <dt>임원리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around4">
          <dt>호산리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around5">
          <dt>월천리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around6">
          <dt>원덕읍</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around7">
          <dt>노곡리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around8">
          <dt>도계읍</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around9">
          <dt>하장면</dt>
          <dd>0.003</dd>
        </dl>
      </div>
    <img src="/images/samcheok.png" alt="" class="img-fluid">
    </div>
    <div class="tablebox tableshow">
        <table class="table-around">
          <thead>
          <tr>
            <th class="col-point">삼척시</th>
            <th>강원대</th>
            <th>임원리</th>
            <th>임원리</th>
            <th>호산리</th>
            <th>월천리</th>
            <th>노곡리</th>
            <th>원덕읍</th>
            <th>도계읍</th>
            <th>하장면</th>
          </tr>
        </thead>  
        <tbody>
          <tr>
            <td>아황산가스 (SO₂,ppm)</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>3.00</td>
          </tr>
          </tbody>
        </table>
    </div>
  </div>

  <div class="col-md-6 m-t1 m-b2">
    <div class=" position_r">
      <div class="tablethide">
        <dl class="arounddl around2-1">
          <dt>북천면</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-2">
          <dt>양보면</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-3">
          <dt>진교면</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-4">
          <dt>진정리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-5">
          <dt>송문리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-6">
          <dt>가덕리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-7">
          <dt>갈사리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-8">
          <dt>금성면</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-9">
          <dt>궁항리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-10">
          <dt>고전면</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-11">
          <dt>목도리</dt>
          <dd>0.003</dd>
        </dl>
        <dl class="arounddl around2-12">
          <dt>악양면</dt>
          <dd>0.003</dd>
        </dl>
      </div>
    <img src="/images/hadong.png" alt="" class="img-fluid">
    </div>
    <div class="tablebox tableshow">
        <table class="table-around">
          <thead>
          <tr>
            <th class="col-point">하동군</th>
            <th>북천면</th>
            <th>양보면</th>
            <th>진교면</th>
            <th>진정리</th>
            <th>송문리</th>
            <th>가덕리</th>
            <th>갈사리</th>
            <th>금성면</th>
            <th>궁항리</th>
            <th>고전면</th>
            <th>목도리</th>
            <th>악양면</th>
          </tr>
        </thead>  
        <tbody>
          <tr>
            <td>아황산가스 (SO₂,ppm)</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>0.15</td>
            <td>3.00</td>
            <td>0.003</td>
            <td>0.003</td>
            <td>0.003</td>
          </tr>
          </tbody>
        </table>
    </div>
  </div>
</div>


<div class="tablebox">
  <table class="table-around">
    <thead>
    <tr>
      <th class="col-point">주요도시 환경농도 비교</th>
      <th>기준치</th>
      <th>서 울</th>
      <th>인 천</th>
      <th>대 전</th>
      <th>대 구</th>
      <th>광 주</th>
      <th>울 산</th>
      <th>부 산</th>
    </tr>
  </thead>  
  <tbody>
    <tr>
      <td>아황산가스 (SO₂,ppm)교</td>
      <td class="col-lightsky">0.15</td>
      <td>0.15</td>
      <td>0.15</td>
      <td>0.15</td>
      <td>0.15</td>
      <td>0.15</td>
      <td>0.15</td>
      <td>0.15</td>
    </tr>
    </tbody>
  </table>
</div>

</template>

<style scoped>

</style>
