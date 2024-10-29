<script>
	import Nav from '$lib/components/nav.svelte';
	import '../app.css';

	let { children } = $props();
</script>

{@render children()}

<Nav />
