<script lang="ts">
	import clsx from 'clsx';

	let className = '';

	export let src: string;
	export let alt = '';
	export let width;
	export let height;
	export { className as class };
</script>

<img {width} {height} class={clsx(className, 'border-8 border-solid border-black')} {src} {alt} />
