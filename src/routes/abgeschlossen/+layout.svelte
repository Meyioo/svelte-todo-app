<script>
	import Header from '$lib/components/header.svelte';
	import Nav from '$lib/components/nav.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<div class="container">
	<Header title="Abgeschlossene Aufgaben" />

	<div class="mb-32 mt-40 flex-1 overflow-y-auto">
		{@render children()}
	</div>

	<Nav />
</div>
