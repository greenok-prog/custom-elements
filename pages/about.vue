<template>
	<div class="about">
		<CustomCheckbox v-model="checkbox" value="checkbox 1"
			label="checkbox 1" />
		<p v-if="checkbox" class="about__text">Lorem ipsum dolor sit amet
			consectetur
			adipisicing elit. Rerum placeat nisi laborum autem quo.
			Veritatis perferendis velit modi placeat debitis iusto
			repellendus pariatur beatae soluta harum, fugit aliquam
			dolorem doloribus itaque assumenda necessitatibus dolor sit
			nesciunt, at nam, dolorum excepturi rerum architecto quaerat?
			Placeat nihil commodi, facilis, ut, consequatur pariatur amet
			nam rem iste inventore non sed beatae? Dolore laboriosam
			soluta ullam voluptatem fugit. Voluptate tenetur libero autem
			eius enim? Quo eligendi obcaecati harum non magni consequuntur
			corrupti pariatur laborum!</p>

	</div>
</template>
<script lang="ts" setup>
const checkbox = ref(false)


</script>
<style lang="scss" scoped>
.about {
	margin-top: 30px;
	font-size: 18px;
	color: white;
	// .about__text

	&__text {}
}
</style>