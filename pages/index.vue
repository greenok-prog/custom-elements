<template>
	<div class="main-page">
		<h1>Main page</h1>
		<AccordionList class="main-page__accordion" />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'main'
})

</script>

<style lang="scss" scoped>
.main-page {
	margin-top: 30px;

	h1 {
		color: white;
	}

	&__accordion {
		max-width: 800px;
		margin-top: 40px;
	}
}
</style>