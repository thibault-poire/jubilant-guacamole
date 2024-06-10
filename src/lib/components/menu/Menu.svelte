<script lang="ts">
	import type { Link } from './Menu.types';

	export let links: Link[];
</script>

{#if links?.length}
	<nav aria-label="Main menu">
		<ul class="flex gap-4">
			{#each links as { label, url }}
				<li>
					<a class="p-2 hover:bg-black hover:text-white" href={url}>{label}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
