<script>
	import { page } from '$app/stores';
	// import BooksHeader from '../components/BooksHeader.svelte';
	// import LoggedInHeader from '../components/LoggedIn/LoggedInHeader.svelte';
	// import LoggedInBookHeader from './BookSlug/components/LoggedInBookHeader.svelte';
	import LoggedOutBookHeader from './[bookSlug]/components/LoggedOutBookHeader.svelte';
</script>

<LoggedOutBookHeader />

<h1>sorry we can't find this page</h1>
