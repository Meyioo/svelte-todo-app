<script>
	import Header from '$lib/components/header.svelte';
	import '../../app.css';

	const { children } = $props();
</script>

<div>
	<Header title="Abgeschlossene Aufgaben" showSearch={true} />

	{@render children()}
</div>
