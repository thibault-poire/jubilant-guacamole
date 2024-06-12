<script lang="ts">
	import Image from '$lib/components/image/Image.svelte';
	import Title from '$lib/components/title/Title.svelte';
</script>

<article>
	<Title level={1}>Title n°1</Title>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor felis, pulvinar sed varius
		vitae, hendrerit at arcu. Suspendisse dui risus, ultricies vel blandit quis, aliquam et erat.
		Fusce sollicitudin eget lectus ac blandit. Fusce sit amet odio hendrerit, efficitur enim at,
		viverra massa. Fusce sagittis nunc ut vehicula tempus. Fusce tempus lacus at diam porta, non
		malesuada ipsum pharetra. Praesent pharetra arcu ut suscipit fringilla. Quisque non ante nec
		arcu iaculis tincidunt at sed ligula. Vestibulum elementum tortor nisi, vitae eleifend tellus
		cursus in.
	</p>

	<Image width="250" height="auto" class="my-10" src="images/placeholder.jpg" alt="" />

	<p>
		Vestibulum vulputate ornare ultrices. Nullam mattis massa vitae lectus venenatis fermentum.
		Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla ut
		placerat felis. Ut quam odio, semper euismod egestas in, pellentesque sed quam. Nullam cursus
		vulputate ultrices.
	</p>
</article>

<article class="mt-16">
	<Title level={3}>Title n°2</Title>

	<p>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor felis, pulvinar sed varius
		vitae, hendrerit at arcu. Suspendisse dui risus, ultricies vel blandit quis, aliquam et erat.
		Fusce sollicitudin eget lectus ac blandit. Fusce sit amet odio hendrerit, efficitur enim at,
		viverra massa. Fusce sagittis nunc ut vehicula tempus. Fusce tempus lacus at diam porta, non
		malesuada ipsum pharetra. Praesent pharetra arcu ut suscipit fringilla. Quisque non ante nec
		arcu iaculis tincidunt at sed ligula. Vestibulum elementum tortor nisi, vitae eleifend tellus
		cursus in.
	</p>
</article>
