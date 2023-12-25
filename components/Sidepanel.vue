<template>
	<Teleport v-if="modelValue" to="body">
		<div class="sidepanel__bg" @click="closeHandler">
		</div>
		<div class="sidepanel" :style="{ width: size }">
			<div class="sidepanel__header"
				:style="{ justifyContent: title ? 'space-between' : 'flex-end' }">
				<strong v-if="title">{{ title }}</strong>
				<CloseSidepanel @click="closeHandler"
					class="sidepanel__close" />
			</div>
			<div class="sidepanel__content">
				<slot />
			</div>
		</div>
	</Teleport>
</template>
<script lang="ts" setup>

// Принимает размер в виде строки и заголовок
const props = withDefaults(defineProps<{
	modelValue: boolean,
	size?: string,
	title?: string
}>(), {
	size: '30%'
})
const emit = defineEmits(['update:modelValue'])

// обработчик закрытия меню
const closeHandler = () => {
	emit('update:modelValue', false)
}

</script>
<style lang="scss" scoped>
.sidepanel {
	height: 100vh;
	position: absolute;
	right: 0;
	top: 0;
	background: white;
	padding: 15px 10px;

	&__bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background: rgba(5, 0, 0, 0.262);
	}

	&__header {
		display: flex;
		align-items: center;

		strong {
			font-size: 18px;
		}

	}

	&__close {
		cursor: pointer;
	}

	&__content {
		margin-top: 20px;
	}
}
</style>