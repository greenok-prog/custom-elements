<template>
	<footer class="footer">
		<div class="footer__inner container ">
			<h3 class="footer__text">Footer</h3>
			<p class="footer__copy">© 2023 Artem Frizen</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
.footer {
	height: 90px;
	background: white;
	// .footer__inner

	&__inner {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		height: 100%;
		padding-top: 15px;
		padding-bottom: 15px;
	}

	// .footer__text

	&__text {}

	// .footer__copy

	&__copy {}
}
</style>