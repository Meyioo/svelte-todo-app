<script>
	import Header from '$lib/components/header.svelte';
	import '../../app.css';

	const { children } = $props();
</script>

<div>
	<Header title="Abgeschlossen" showSearch={true} />

	{@render children()}
</div>
