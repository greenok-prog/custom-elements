<template>
	<div class="main-layout">
		<Header variant="transparent" />
		<main class="main container">
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>


<style lang="scss" scoped>
.main-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	background: $main-bg;


}

.main {
	flex-grow: 1;
}
</style>