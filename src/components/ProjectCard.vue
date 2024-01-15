<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card d-flex column">
        <h2 class="align-self-center">{{ project.project_name }}</h2>
        <p class="card-text">{{ project.description }}</p>
        <div class="d-flex gap-2">
            <span class="fw-bold">Type: </span>
            <!-- <span>{{ project.type.name }}</span> -->
        </div>
        <div class="d-flex gap-2">
            <span class="fw-bold">Status: </span>
            <span>{{ project.project_status }}</span>
        </div>
        <div class="d-flex gap-2">
            <span class="fw-bold">Github Link: </span>
            <span>
                <a :href="project.github_link" target="_blank">{{ project.github_link }}</a>
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.d-flex {
    display: flex;
}
.card {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
}
</style>