<template>
	<div class="default-layout">
		<Header />
		<main class="main container">
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>


<style lang="scss" scoped>
.default-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	background-color: $main-bg;


}

.main {
	flex-grow: 1;
}
</style>