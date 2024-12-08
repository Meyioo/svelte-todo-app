<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { BottomNav, BottomNavItem } from 'flowbite-svelte';
	import { CirclePlusSolid, ClipboardCheckSolid, HomeSolid } from 'flowbite-svelte-icons';

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
