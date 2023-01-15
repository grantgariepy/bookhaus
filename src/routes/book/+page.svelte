<script>
	import { page } from '$app/stores';
	import BooksHeader from '../components/BooksHeader.svelte';
	import LoggedInHeader from '../components/LoggedIn/LoggedInHeader.svelte';
</script>

{#if $page.data.session}
	<LoggedInHeader />
{:else}
	<BooksHeader />
{/if}
<h1>sorr we can't find this page</h1>
