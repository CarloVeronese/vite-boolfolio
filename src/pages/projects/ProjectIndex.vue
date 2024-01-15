<script>
import axios from 'axios';
import ProjectCard from '../../components/ProjectCard.vue';
export default {
    components: {
        ProjectCard
    },
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios
            .get('http://127.0.0.1:8000/api/projects')
            .then((res) => {
                console.log(res.data.results.data);
                this.projects = res.data.results.data;
            })
        }
    },
    created() {
        this.fetchProjects()
    }

}
</script>

<template>
    <div class="container">
        <div class="column">
                <ProjectCard  v-for="project in projects" :project="project" />
        </div>
    </div>
</template>

<style lang="scss">
    .container {
        max-width: 1020px;
        margin: 0 auto;
        .column {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
    }
</style>