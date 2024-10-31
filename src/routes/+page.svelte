<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	if (browser) {
		// if we are in the browser
		goto('/offen');
	}
</script>
