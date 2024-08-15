<template>
    <div>
        <h1>{{ $t('about_title') }}</h1>
        <NuxtLink :href="localPath('/')">{{ $t('home_btn') }}</NuxtLink>
    </div>
</template>

<script setup>
const localPath = useLocalePath();
</script>