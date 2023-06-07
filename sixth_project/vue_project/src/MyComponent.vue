<template>
  <div>
    <h2>Актуальная погода в Алматы</h2>
    <div v-if="loading">Загрузка...</div>
    <div v-if="weatherData && weatherData.weather && weatherData.weather.length > 0">
      <p>Погода: {{ weatherData.weather[0].description }}</p>
      <p>Температура: {{ weatherData.main.temp }} К</p>
      <p>Влажность: {{ weatherData.main.humidity }}%</p>
      <p>Скорость ветра: {{ weatherData.wind.speed }} м/с</p>
  </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'WeatherReport',
  components: {},
  props: {},
  setup() {
    const API_KEY = 'My Key for Almaty';
    const lat = '43.238949';
    const lon = '76.889709';
    const weatherData = ref(null);
    const loading = ref(true);

    const getWeather = async () => {
      try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        weatherData.value = data;
        loading.value = false;
      } catch (error) {
        console.error('Ошибка при получении данных', error);
      }
    };

    onMounted(getWeather);

    return {
      weatherData,
      loading
    };
  }
};
</script>

<style scoped>
/* стили компонента */
</style>
