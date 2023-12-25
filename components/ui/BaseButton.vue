<template>
	<button class="base-button">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.base-button {
	background: #f97316;
	color: white;
	padding: 10px 15px;
	border-radius: 20px;
	font-weight: 700;
	cursor: pointer;

	&:hover {
		background: #f46d0d;
	}
}
</style>