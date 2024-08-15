<template>
    <div>Switch language</div>
    <select v-model="language">
        <option v-for="item in locales" :key="item" :value="item.code">
            {{ item.name }}
        </option>
    </select>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();

const language = computed({
    get: () => locale.value,
    set: (value) => setLocale(value),
})
</script>
