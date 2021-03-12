<template>
  <div>
    <b-row id='footer'>
      <b-col>
        <h6>{{ current.humidity }} %</h6>
        <h6>Humidity</h6></b-col
      >
      <b-col>
        <h6>{{ current.uv_index }}</h6>
        <h6>UV Index</h6></b-col
      >
      <b-col>
        <h6>{{ current.wind_speed }} km/h</h6>
        <h6>Wind speed</h6></b-col
      >
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    current: Object
  }
}
</script>

<style>
#footer {
  padding: 150px 0px 0px 0px;
  text-align: center;
}
h6 {
  font-family: 'Quicksand';
  font-size: 25px;
  font-weight: bold;
  color: rgb(11, 1, 44);
}
</style>
