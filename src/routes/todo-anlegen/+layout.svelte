<script>
	import Header from '$lib/components/header.svelte';
	import Nav from '$lib/components/nav.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<Header title="Aufgabe anlegen" />

{@render children()}

<Nav />
