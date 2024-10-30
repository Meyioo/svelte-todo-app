<script>
	import Header from '$lib/components/header.svelte';
	import Nav from '$lib/components/nav.svelte';
	import Searchbar from '$lib/components/searchbar.svelte';
	import '../../app.css';

	let { children } = $props();
</script>

<Header title="Abgeschlossene Aufgaben" />
<Searchbar />

{@render children()}

<Nav />
