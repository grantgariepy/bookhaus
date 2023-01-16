<script>
	import { page } from '$app/stores';
	import BooksHeader from '../components/BooksHeader.svelte';
	import LoggedInHeader from '../components/LoggedIn/LoggedInHeader.svelte';
	import LoggedInBookHeader from './BookSlug/components/LoggedInBookHeader.svelte';
	import LoggedOutBookHeader from './BookSlug/components/LoggedOutBookHeader.svelte';
</script>

{#if $page.data.session}
	<LoggedInBookHeader />
{:else}
	<LoggedOutBookHeader />
{/if}
<h1>sorr we can't find this page</h1>
