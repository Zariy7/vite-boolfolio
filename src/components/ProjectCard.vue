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
        <router-link :to="{ name: 'project', params: { slug: project.slug } }">
        <h2>
            {{ project['title'] }}
        </h2>
        </router-link>
        <div>
            {{ project.desc }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
