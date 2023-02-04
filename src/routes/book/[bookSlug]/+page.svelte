<script lang="ts">
	import { page } from '$app/stores';
	import BooksHeader from '../../components/BooksHeader.svelte';
	import LoggedInHeader from '../../components/LoggedIn/LoggedInHeader.svelte';
	import BookLayout from './components/BookLayout.svelte';
	import LoggedInBookHeader from './components/LoggedInBookHeader.svelte';
	import LoggedOutBookHeader from './components/LoggedOutBookHeader.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<LoggedOutBookHeader />

<BookLayout {data} />
