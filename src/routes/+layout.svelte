<script>
	import Nav from '$lib/components/nav.svelte';
	import Toast from '$lib/components/toast.svelte';
	import '../app.css';

	const { children } = $props();
</script>

<div class="flex h-screen flex-col justify-between">
	{@render children()}

	<Toast></Toast>

	<Nav />
</div>
