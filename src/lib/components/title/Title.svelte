<script lang="ts">
	import clsx from 'clsx';

	import type { Level } from './Title.types';

	let className: string = '';

	export let level: Level;
	export { className as class };
</script>

<svelte:element
	this={`h${level}`}
	class={clsx(
		className,
		'flex flex-col after:block after:bg-black after:w-8',
		level === 1 && 'gap-4 mb-10 text-5xl font-bold after:h-2 after:relative after:left-1',
		level === 3 && 'gap-2 mb-5 text-2xl font-bold  after:h-1 after:relative after:left-1'
	)}
>
	<slot />
</svelte:element>
