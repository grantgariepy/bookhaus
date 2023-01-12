<script lang="ts">
	import BooksHeader from './booksComponents/BooksHeader.svelte';
	import ButtonBarAndSearch from './booksComponents/ButtonBarAndSearch.svelte';
	import BooksPopular from './booksComponents/BooksPopular.svelte';
	import JustReviewed from '../components/JustReviewed.svelte';
	import BooksPopularReviews from './booksComponents/BooksPopularReviews.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import LoggedInHeader from '../components/LoggedIn/LoggedInHeader.svelte';
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
