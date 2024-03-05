<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    }
}
</script>

<template>
    <div class="col-3">
        <h2>
            {{ project['title'] }}
        </h2>
        <div>
            {{ project.desc }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
