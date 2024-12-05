<script>
	import Header from '$lib/components/header.svelte';
	import '../../app.css';

	const { children } = $props();
</script>

<div>
	<Header title="Aufgabe anlegen" />

	<div class="m-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
		{@render children()}
	</div>
</div>
