<script setup>
import axios from 'axios'
import { onMounted, ref, watchEffect, computed } from 'vue'

const props = defineProps(['id'])
const data = ref(null)
const job = ref(null)

const apiClient = axios.create({
  baseURL: 'https://job-board-fn9g.onrender.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getEventById = (id) => {
  return apiClient(`/${id}`)
}

onMounted(() => {
  watchEffect(() => {
    getEventById(props.id)
      .then((response) => {
        data.value = response.data
        job.value = data.value.job
      })
      .catch((err) => {
        console.log(err)
      })
  })
})

const jobLength = computed(() => {
  if (job.value.fullTime === true) {
    return 'Full-time'
  } else {
    return 'Part-time'
  }
})
</script>

<template>
  <main v-if="job">
    <div class="top-container details-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s"
        alt=""
        class="details-img"
      />
      <div class="details-cont">
        <div>
          <h2>{{ job.company.companyName }}</h2>
        </div>
        <button>Company Site</button>
      </div>
    </div>

    <div class="top-container info-container">
      <div class="top-row">
        <div class="titles-col">
          <p>{{ jobLength }}</p>
          <h2>{{ job.jobTitle }}</h2>
          <h3>{{ job.country }}</h3>
        </div>
        <button class="apply-btn">Apply Now</button>
      </div>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius nam facere quod nulla
          officiis dolorem at, labore est qui, unde ipsam obcaecati exercitationem eligendi suscipit
          dicta corporis. Quae, totam. Nesciunt! Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. In, non, necessitatibus culpa ad ducimus porro itaque blanditiis perferendis ipsum
          voluptatem distinctio asperiores numquam, rem quidem nisi. Similique optio voluptate
          sapiente.
        </p>
      </div>
      <h3>Requirements</h3>
      <div class="content">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo odio id sapiente totam
          eligendi error distinctio accusantium nihil aperiam, ea cum amet cumque, porro officia!
          Tempora nihil vitae possimus quod. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Sint magni ea voluptate necessitatibus quam? Nulla, ab. Dolor quibusdam eos,
          assumenda maxime mollitia odit placeat blanditiis unde voluptatibus beatae excepturi iste.
        </p>
        <ul class="content">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
        </ul>
      </div>
      <h3>What You Will Do</h3>
      <div class="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui, sint, minima nam
          dolorum inventore suscipit, velit cum enim ex totam blanditiis quos culpa. Doloremque
          similique enim accusamus accusantium quibusdam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis nulla architecto mollitia aliquam soluta tempora veritatis
          minima rerum error. Beatae ea sint culpa nulla eum neque illo voluptatibus necessitatibus
          officia!
        </p>
        <ol class="content">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil repellat placeat, impedit
            hic eius necessita
          </li>
        </ol>
      </div>
    </div>
    <div class="footer">
      <div class="top-container">
        <div class="footer-container">
          <div>
            <h2>{{ job.jobTitle }}</h2>
            <p>{{ job.company.companyName }}</p>
          </div>
          <button class="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.top-container {
  max-width: 800px;
  width: 60%;
  margin: 0 auto;
}
.details-container {
  display: flex;
  align-items: center;
  background-color: white;
  height: 100px;
  position: relative;
  bottom: 30px;
}
.details-img {
  height: 100px;
  width: 100px;
}
.details-cont {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
}
button {
  background-color: rgb(199, 202, 246);
  padding: 8px;
  color: rgb(17, 32, 238);
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
}
h2 {
  font-size: 18px;
}
p {
  font-size: 14px;
}
button:hover {
  filter: brightness(0.9);
}
.info-container {
  padding: 20px;
  background-color: white;
}
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.apply-btn {
  background-color: rgb(114, 122, 243);
  color: white;
  width: 25%;
}

.titles-col {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.titles-col h3 {
  color: rgb(114, 122, 243);
}
.content {
  margin: 1.5rem 0;
  line-height: 20px;
}
li {
  margin-left: 10px;
  padding-left: 10px;
  font-size: 12px;
}
ol li::marker {
  color: rgb(114, 122, 243);
  font-weight: bold;
}
.footer {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-top: 3rem;
  display: flex;
  align-items: center;
}
.footer-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (width < 700px) {
  .footer {
  }
  .details-container {
    height: 60px;
  }
  h2 {
    font-size: 14px;
  }
  button {
    padding: 4px;
    font-size: 10px;
  }
  .details-img {
    width: 60px;
    height: 60px;
  }
}
</style>
