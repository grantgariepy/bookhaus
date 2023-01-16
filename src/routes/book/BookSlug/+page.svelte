<script>
	import { page } from '$app/stores';
	import BooksHeader from '../../components/BooksHeader.svelte';
	import LoggedInHeader from '../../components/LoggedIn/LoggedInHeader.svelte';
	import BookLayout from './components/BookLayout.svelte';
	import LoggedInBookHeader from './components/LoggedInBookHeader.svelte';
	import LoggedOutBookHeader from './components/LoggedOutBookHeader.svelte';
</script>

{#if $page.data.session}
	<LoggedInBookHeader />
{:else}
	<LoggedOutBookHeader />
{/if}
<BookLayout />
