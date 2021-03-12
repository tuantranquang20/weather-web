<template>
  <div id='nameCountry'>
    <img id='pin' src='../../assets/pin.png' />
    <div>
      <h3 id='city'>{{ location.name }}</h3>
      <h5 id='country'>{{ location.name }}, {{ location.country }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content',
  props: {
    location: Object
  }
}
</script>

<style>
#city {
  color: black;
  font-family: 'Quicksand';
  font-size: 30px;
  font-weight: 600;
}
#pin {
  width: 30px;
  float: left;
  margin-right: 10px;
}
#country {
  color: black;
  font-family: 'Quicksand';
  font-size: 22px;
}
</style>
