<template>
  <div>
    <div id='HomePage' />
    <div id='mainDiv'>
      <b-container id='content'>
        <Header v-bind:current='current' />
        <Content v-bind:location='location' />
        <Footer v-bind:current='current' />
      </b-container>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { getWeatherCurrent } from '../../constants/Api';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Content
  },
  data() {
    return {
      current: {},
      location: {}
    };
  },
  mounted() {
    getWeatherCurrent('Ha Noi')
      .then(el => {
        this.current = el.current || {};
        this.location = el.location || {};
      })
      .catch(err => console.log(err));
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

#HomePage {
  background-image: url('https://firebasestorage.googleapis.com/v0/b/cinemas-48e3d.appspot.com/o/base%2Fimages%2Flone_tree-wallpaper-1920x1080.jpeg?alt=media&token=2838030d-3062-4d98-8266-9b38e9ece51f');
  position: fixed;
  background-size: cover;
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100%;
  min-height: 100%;
  background-position: center;
}
#mainDiv {
  position: relative;
}
#content {
  width: 500px;
  height: 724px;
}
</style>
