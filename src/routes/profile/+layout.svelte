<script>
	import BooksHeader from '../components/BooksHeader.svelte';
	import { page } from '$app/stores';
	import LoggedInHeader from '../components/LoggedIn/LoggedInHeader.svelte';
</script>

{#if $page.data.session}
	<LoggedInHeader />
{:else}
	<BooksHeader />
{/if}
<slot />
