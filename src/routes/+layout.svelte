<script lang="ts">
	import Header from '$lib/components/header/Header.svelte';
	import Logo from '$lib/components/logo/Logo.svelte';
	import Menu from '$lib/components/menu/Menu.svelte';

	import type { Link } from '$lib/components/menu/Menu.types';

	import '../index.css';

	const links: Link[] = [{ label: 'Examples', url: '/examples' }];
</script>

<Header>
	<a slot="logo" href="/">
		<Logo height={48} />
	</a>

	<Menu {links} />
</Header>

<main class="container mx-auto mt-10">
	<slot />
</main>
