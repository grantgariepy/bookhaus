<script lang="ts">
	import ButtonBarAndSearch from '../components/booksComponents/ButtonBarAndSearch.svelte';
	import BooksPopular from '../components/booksComponents/BooksPopular.svelte';
	import JustReviewed from '../components/JustReviewed.svelte';
	import BooksPopularReviews from '../components/booksComponents/BooksPopularReviews.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import LoggedInHeader from '../components/LoggedIn/LoggedInHeader.svelte';
	import BooksHeader from '../components/BooksHeader.svelte';
</script>

{#if $page.data.session}
	<LoggedInHeader />
{:else}
	<BooksHeader />
{/if}
<ButtonBarAndSearch />
<BooksPopular />
<JustReviewed />
<BooksPopularReviews />
