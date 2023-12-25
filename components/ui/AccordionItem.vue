<template>
	<div class="accordion-item">
		<div class="accordion-item__header" @click="openHandler">
			<strong class="accordion-item__title">
				{{ item.title }}
			</strong>
			<AccordionArrow class="accordion-item__icon"
				:class="{ 'accordion-item__icon_active': isOpened }" />
		</div>
		<Transition :duration="200" @beforeEnter="transform.beforeEnter"
			@enter="transform.enter" @beforeLeave="transform.beforeLeave"
			@leave="transform.leave">
			<p class="accordion-item__content" v-show="isOpened">
				{{ item.text }}
			</p>
		</Transition>

	</div>
</template>

<script lang="ts" setup>
interface IAccordion {
	title: string,
	text: string
}
const props = defineProps<{
	item: IAccordion
}>()

const isOpened = ref(false)

const openHandler = () => {
	isOpened.value = !isOpened.value
}
const transform = {
	beforeEnter: function (el: HTMLParagraphElement) {
		el.style.height = '0';
		el.style.paddingTop = '0px'
		el.style.margin = '0px'
	},
	enter: function (el: HTMLParagraphElement) {
		el.style.height = el.scrollHeight + 'px';
		el.style.paddingTop = '10px'
		el.style.marginBottom = '10px'
	},
	beforeLeave: function (el: HTMLParagraphElement) {
		el.style.height = el.scrollHeight + 'px';
		el.style.paddingTop = '10px'
		el.style.marginBottom = '10px'
	},
	leave: function (el: HTMLParagraphElement) {
		el.style.height = '0';
		el.style.paddingTop = '0px'
		el.style.margin = '0px'
	}
}
</script>
<style lang="scss" scoped>
.accordion-item {
	display: flex;
	flex-direction: column;
	overflow: hidden;
	border-bottom: 1px solid white;
	padding-bottom: 10px;
	width: 100%;
	// .accordion-item__title

	&__title {
		color: white;
		font-size: 24px;
		font-weight: 700;
		line-height: 140%;

	}

	&__icon {

		transition: all 0.2s ease-in-out;
		transform: rotate(-90deg);
		width: 40px;
		height: 40px;

		&_active {
			transform: rotate(90deg);
		}
	}

	// .accordion__header

	&__header {
		width: 100%;
		display: flex;
		align-items: flex-start;
		gap: 48px;
		justify-content: space-between;
		cursor: pointer;
	}

	// .accordion__content

	&__content {
		transition: height 0.3s ease, padding 0.4s ease, margin 0.4s ease;

		padding-right: 76px;
		font-size: 18px;
		color: white;
		font-weight: 400;
		line-height: 150%;
		margin-bottom: 20px;

	}
}
</style>