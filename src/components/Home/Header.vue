<template>
  <div>
    <b-row id='top'>
      <b-col id='bTemp'>
        <b-row>
          <h2 id='temp'>{{ current.temperature }}°C |</h2>
          <h5 id='stt'>{{ calLoc }}</h5>
        </b-row>
      </b-col>
      <b-col id='imgWeather'>
        <!-- <img id='img' :src='image' /> -->
        <img id='img' src='../../assets/sunnyCloud.png' />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    current: Object
  },
  computed: {
    calLoc: function () {
      return this.current.weather_descriptions[0]
    },
    image: function () {
      return this.current.weather_icons[0]
    }
  }
}
</script>

<style scoped>
#temp {
  color: black;
}
#stt {
  color: black;
  margin: 7px 0px 0px 10px;
}
#bTemp {
  display: flex;
  align-items: center;
  margin-left: 15px;
}
#top {
  padding: 150px 0px 70px 0px;
}
#imgWeather {
  text-align: center;
}
#img {
  width: 80px;
  height: 80px;
}
</style>
