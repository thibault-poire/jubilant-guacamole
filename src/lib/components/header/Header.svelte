<script lang="ts">
</script>

<header class="py-3">
	<div class="container mx-auto flex items-center justify-between">
		{#if $$slots.logo}
			<slot name="logo" />
		{/if}

		<slot />
	</div>
</header>
