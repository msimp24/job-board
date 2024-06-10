<script setup>
import { ref, computed } from 'vue'
defineProps(['job'])

const randomLogos = ref([
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX////yUCKAugECpO//uQIAoO7/tgD1fmSeyVnySxjxRAH6wLXO47B5twCw2/j/47BZufL/yVn0d1z7zcXZ6cCax0/A4/r/6cBPtvIAnu7/xk/3nYu11YLyRgvxNwByswD95eDr897e8Pz/896CyfX/1YI2EaRvAAABJElEQVR4nO3bSU5CUQBEUUQ//afvbQCb/W/R5EWnDIrwjMm5C6jkLKA6HUmSJEmSJEmSJEmSJEmSJEnXeu7HLVdlYb0ZxL1UEPZfh2mjcVmYtN20dlBDOHxIu13YJSQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJKwvXI7i3n6EpzZuU0G4Guedy8JlkreuIJSk+7ed5r2XhY9Z3q6CcH9o0g7TsjDr5R0rCOfNY1rzK3yKWxASEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhL+gfD2z0wM7NUQfs7j9tuysDsu4r4qCCVJkiRJkiRJkiRJkiRJkqT/3DcwNcgMSDZlbgAAAABJRU5ErkJggg==',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/900px-Amazon_icon.svg.png?20210720180728',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/640px-EBay_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvzC_QRv6moAhgNb5C6e3yicKgFND1g2RwA&s'
])

const randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * max)
}
const randomImage = computed(() => {
  return randomLogos.value[randomNumberGenerator(randomLogos.value.length)]
})
</script>

<template>
  <RouterLink class="job-link" :to="{ name: 'Details', params: { id: job._id } }">
    <div v-if="job">
      <div class="card">
        <img :src="randomImage" />

        <p v-if="job.fullTime == true">Full time</p>
        <p v-else>Part Time</p>
        <h1>{{ job.jobTitle }}</h1>
        <p>{{ job.company.companyName }}</p>
        <h2>{{ job.country }}</h2>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  max-width: 300px;
  min-height: 290px;
  margin-top: 30px;
  border-radius: 10px;
}
img {
  height: 60px;
  width: 60px;
  border-radius: 30%;
  transform: translateY(-50px);
}
h1 {
  font-size: 16px;
}
h2 {
  margin-top: 30px;
  font-size: 20px;
  color: rgb(114, 122, 243);
}
.job-link {
  text-decoration: none;
  color: black;
}

@media (width < 1000px) {
  .card {
    margin: 0 auto;
    max-width: 400px;
  }
}
@media (width < 700px) {
  .card {
    margin: 0 auto;
    max-width: 400px;
  }
}
</style>
