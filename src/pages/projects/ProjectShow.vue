<script>
import axios from 'axios'
export default {
    props: {
        id: String
    },
    data() {
        return {
            project: null,
            BASE_URL: 'http://127.0.0.1:8000/api'
        }
    },
    methods: {
        fetchproject() {
            axios.get(`${this.BASE_URL}/projects/${this.id}`)
                .then(res => {
                    this.project = res.data.project
                }).catch((error) => {
                    console.log('project not found', error.response)
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' })
                    }
                })
        }
    },
    created() {
        this.fetchproject()
    }
}
</script>

<template>
    <div v-if="project">
        <div class="container">
            <h1>{{ project.project_name }}</h1>
            <p>{{ project.id }}</p>
            <p>{{ project.type?.name }}</p>
            <ul class="technologies">
                <li v-for="tech in project.technologies" :key="tech.id">
                    {{ tech.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<style lang="scss" scoped>
.technologies {
    padding: 10px 0;
    display: flex;
    gap: 24px;
}
</style>