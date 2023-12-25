<template>
	<label class="checkbox">
		<input class="checkbox__input" type="checkbox" v-model="model"
			:value="value" />
		<div class="checkbox__custom">
			<CheckedSvg v-if="model" />
		</div>
		<span class="checkbox__label">{{ label }}</span>
	</label>
</template>
  
<script setup lang="ts">

const props = defineProps<{
	modelValue: [] | boolean,
	value: string | {},
	label: string,
}>()
const emit = defineEmits(["update:modelValue"]);
const model = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emit("update:modelValue", value);
	},
});
</script>

<style lang="scss" scoped>
.checkbox {
	cursor: pointer;
	display: flex;
	align-items: center;
	position: relative;
	// .checkbox__input

	&__input {
		width: 20px;
		height: 20px;
		opacity: 0;
	}

	&__custom {
		width: 20px;
		height: 20px;
		position: absolute;
		left: 0;
		top: 0;
		border: 1px solid #f97316;
		background: white;
		border-radius: 9px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	// .checkbox__label

	&__label {
		margin-left: 10px;
	}
}
</style>