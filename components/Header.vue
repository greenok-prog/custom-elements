<template>
	<header class="header" :class="`header--${variant}`">
		<div class="container">
			<div class="header__inner">
				<div class="header__left">
					<h3 class="header__logo">LOGO</h3>
					<nav class="header__navbar">
						<ul class="header__list">
							<li class="header__list-item">
								<NuxtLink to="/">Страница 1</NuxtLink>
							</li>
							<li class="header__list-item">
								<NuxtLink to="/about">Страница 2
								</NuxtLink>
							</li>
						</ul>
					</nav>
				</div>
				<div class="header__right">
					<BaseButton @click="menuIsOpened = true">
						Меню
					</BaseButton>
				</div>
			</div>
		</div>

		<!-- Многоуровневая панель -->
		<Sidepanel title="Меню" v-model="menuIsOpened">
			<!-- Список пунктов первого меню -->
			<ul class="header__menu-list">
				<li v-for="menuLink in menuLinks" :key="menuLink.name"
					@click="selectMenuItemHandler(menuLink)">
					{{ menuLink.name }}
				</li>

			</ul>

			<!-- Вложенное меню -->
			<Sidepanel v-if="activeMenuLink" :title="activeMenuLink.name"
				size="20%" v-model="secondMenu">

				<!-- Список подпунктов выбранного пункта -->
				<ul class="header__menu-list">
					<li v-for="link in activeMenuLink?.links"
						:key="link.name" @click="secondMenu = false">{{
							link.name }}</li>
				</ul>
			</Sidepanel>
		</Sidepanel>
	</header>
</template>
<script lang="ts" setup>
interface MenuLink {
	name: string,
	links: { name: string }[]
}
const props = withDefaults(defineProps<{
	// в зависимости от variant будет меняться фон шапки
	variant?: 'white' | 'transparent'
}>(), {
	variant: 'white'
})
const menuIsOpened = ref(false)
const secondMenu = ref(false)
const menuLinks: MenuLink[] = [
	{
		name: 'Пункт 1', links: [
			{ name: 'Пункт 1, подпункт 1' },
			{ name: 'Пункт 1, подпункт 2' }
		]
	},
	{
		name: 'Пункт 2', links: [
			{ name: 'Пункт 2, подпункт 1' },
			{ name: 'Пункт 2, подпункт 2' }
		]
	}
]
const activeMenuLink = ref<MenuLink | null>(null)
const selectMenuItemHandler = (link: MenuLink) => {
	if (link) {
		activeMenuLink.value = link
		secondMenu.value = true
	}
}

</script>
<style lang="scss" scoped>
.header {
	border-bottom: 1px solid white;

	&--white {
		background: white;
		color: black;

		a {
			color: black;
		}

	}

	&--transparent {
		background: transparent;
		color: white;

		a {
			color: white;
		}
	}

	// .header__inner

	&__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15px 0;
	}

	// .header__left

	&__left {
		display: flex;
		align-items: center;
		gap: 40px;
	}

	&__menu-list {
		display: flex;
		flex-direction: column;
		gap: 7px;

		li {
			cursor: pointer;
			font-size: 18px;
			padding: 7px 0;
			border-bottom: 1px solid grey;

			&:hover {
				background: $main-bg;
			}
		}
	}

	// .header__list

	&__list {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	// .header__list-item

	&__list-item {
		cursor: pointer;
		font-weight: 600;
		font-size: 14px;


	}

	// .header__right

	&__right {}

	// .header__sidebar

	&__sidebar-button {}
}
</style>