<script setup>
import { onMounted, ref, watchEffect } from 'vue'
import JobCard from '@/components/JobCard.vue'
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getEvents = () => {
  return apiClient.get('/jobs')
}

const getFullTimeEvents = () => {
  return apiClient.get('/fulltimejobs')
}

const getFilteredEvents = (title, country) => {
  return apiClient.get('/?title=' + title + '&country=' + country)
}

const data = ref(null)
const jobs = ref(null)
const isFullTime = ref(false)

const titleInput = ref('')
const countryInput = ref('')

onMounted(() => {
  watchEffect(() => {
    data.value = null
    getEvents()
      .then((response) => {
        data.value = response.data
        jobs.value = data.value.jobs
      })
      .catch((err) => {
        console.log(err)
      })
  })
})

watchEffect(() => {
  if (!isFullTime.value) {
    data.value = null
    getEvents()
      .then((response) => {
        data.value = response.data
        jobs.value = data.value.jobs
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    data.value = null
    getFullTimeEvents()
      .then((response) => {
        data.value = response.data
        jobs.value = data.value.jobs
      })
      .catch((err) => {
        console.log(err)
      })
  }
})

const filterJobs = () => {
  data.value = null

  getFilteredEvents(titleInput.value, countryInput.value)
    .then((response) => {
      data.value = response.data
      jobs.value = data.value.jobs
      countryInput.value = ''
      titleInput.value = ''
    })
    .catch((err) => {
      console.log(err)
    })
}
</script>

<template>
  <main>
    <div class="container">
      <div class="filter-bar">
        <input
          type="text"
          class="search"
          placeholder="Filter by title, company, expertise.."
          v-model="titleInput"
        />
        <input
          type="text"
          class="location"
          placeholder="Filter by location.."
          v-model="countryInput"
        />
        <div class="toggle-box">
          <button class="search-btn" @click="filterJobs">Search</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button v-for="item in filterArray" :key="item">{{ item }}</button>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="row-of-3">
        <div v-for="job in jobs" :key="job">
          <JobCard :job="job" />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
.row-of-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
h1 {
  color: white;
  margin-bottom: 1rem 0;
}
.filter-bar {
  display: flex;
  background-color: white;
  width: 100%;
  position: relative;
  bottom: 60px;
}
.search {
  width: 100%;
}
.location {
  width: 100%;
}
.toggle-box {
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
}
input {
  height: 50px;
  border: lightgray solid 1px;
  margin: 0.1px;
  font-size: 12px;
  padding: 10px;
}
input[type='checkbox'] {
  margin: 0 1rem;
  color: rgb(33, 30, 30);
  cursor: pointer;
}
p {
  font-size: 12px;
  color: black;
  font-weight: bold;
}

.search-btn {
  margin: 0 1rem;
  padding: 10px 14px;
  cursor: pointer;
  background-color: rgb(114, 122, 243);
  color: white;
  border: none;
}
.search-btn:hover {
  filter: brightness(1.2);
}

@media (width < 1000px) {
  .row-of-3 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }
}
@media (width < 700px) {
  .row-of-3 {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 50px;
  }
}
</style>
