<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import LoggedOutHome from './components/LoggedOutHome.svelte';
	import LoggedInHome from './components/LoggedIn/LoggedInHome.svelte';
</script>

{#if $page.data.session}
	<LoggedInHome />
{:else}
	<LoggedOutHome />
{/if}
