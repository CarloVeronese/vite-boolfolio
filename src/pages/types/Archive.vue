<script>
import axios from 'axios';

  export default {
    props: {
      slug: String
    },
    data() {
      return {
        type: null,
        projects: [],
        BASE_URL: 'http://127.0.0.1:8000/api'
      }
    },
    methods: {
      fetchTypedProjects() {
        axios.get(`${ this.BASE_URL }/types/${ this.slug }`)
        .then(res => {
          console.log(res.data)
          this.type = res.data.type
          this.projects = res.data.type.projects
        })
      }
    },
    created() {
      this.fetchTypedProjects()
    }
    
  }
</script>

<template>
    <div v-if="type">
      <div class="container">
        <h1>{{ type.name }}</h1>
      </div>
  
      <div class="container">
        <ul>
          <li v-for="project in projects" :key="project.slug" class="project-list-item">
            <h3>{{ project.project_name }}</h3>
            <p>
              {{ project.technologies.map((technology) => technology.name).join(',') }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  
  </style>