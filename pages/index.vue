<template>
    <div>
        <h1>{{ $t('home_title') }}</h1>
        <h2>{{ $t('name') }}</h2>
        <NuxtLink :href="localPath('/about')">{{ $t('about_btn') }}</NuxtLink>
    </div>
</template>

<script setup>
const localPath = useLocalePath();

</script>