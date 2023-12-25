<template>
	<div class="accordion-list">
		<div class="accordion-list__item" v-for="i in items"
			:key="i.title">
			<AccordionItem :item="i" />
		</div>

	</div>
</template>
<script lang="ts" setup>
interface IAccordionItem {
	title: string,
	text: string
}
const items: IAccordionItem[] = [
	{
		title: "title 1",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel architecto modi consequuntur cupiditate consectetur itaque quos rem incidunt odio neque."
	},
	{
		title: "title 2",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel architecto modi consequuntur cupiditate consectetur itaque quos rem incidunt odio neque."
	},
	{
		title: "title 3",
		text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel architecto modi consequuntur cupiditate consectetur itaque quos rem incidunt odio neque."
	},
]


</script>
<style lang="scss" scoped>
.accordion-list {
	display: flex;
	flex-direction: column;
	gap: 10px;

}
</style>