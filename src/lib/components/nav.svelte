<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import CirclePlusSolid from 'flowbite-svelte-icons/CirclePlusSolid.svelte';
	import ClipboardCheckSolid from 'flowbite-svelte-icons/ClipboardCheckSolid.svelte';
	import HomeSolid from 'flowbite-svelte-icons/HomeSolid.svelte';
	import BottomNav from 'flowbite-svelte/BottomNav.svelte';
	import BottomNavItem from 'flowbite-svelte/BottomNavItem.svelte';

	const activeUrl = $state(page);
</script>

<BottomNav
	activeUrl={$activeUrl.url.pathname}
	position="sticky"
	classInner="grid-cols-3 h-16"
	classActive="active:text-primary-600 group-hover:text-primary-600"
>
	<BottomNavItem btnName="Offen" href="{base}/">
		<HomeSolid class="mb-1 h-6 w-6" />
	</BottomNavItem>
	<BottomNavItem btnName="Abgeschlossen" href="{base}/abgeschlossen">
		<ClipboardCheckSolid class="mb-1 h-6 w-6" />
	</BottomNavItem>
	<BottomNavItem btnName="Anlegen" href="{base}/anlegen">
		<CirclePlusSolid class="mb-1 h-6 w-6" />
	</BottomNavItem>
</BottomNav>
