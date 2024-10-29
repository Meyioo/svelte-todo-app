<script>
	let navItems = [
		{ name: 'Offen', link: '/' },
		{ name: 'Abgeschlossen', link: '/abgeschlossen' }
	];
</script>

<nav class="navbar">
	{#each navItems as item}
		<a class="nav-item" href={item.link}>{item.name}</a>
	{/each}
</nav>

<style>
	.navbar {
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #333;
		display: flex;
		justify-content: space-around;
		padding: 1rem 0;
	}

	.nav-item {
		color: white;
		text-decoration: none;
		font-size: 1.2rem;
	}

	.nav-item:hover {
		text-decoration: underline;
	}
</style>
