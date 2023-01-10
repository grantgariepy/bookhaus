<script lang="ts">
	import HomeHeader from './components/HomeHeader.svelte';
	import CallToAction from './components/CallToAction.svelte';
	import FeaturedItems from './components/FeaturedItems.svelte';
	import Features from './components/Features.svelte';
	import JustReviewed from './components/JustReviewed.svelte';
	import BreakText from './components/BreakText.svelte';
	import Popular from './components/Popular.svelte';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<h1>SvelteKit Auth Example</h1>
<p>
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span
				style="background-image: url('{$page.data.session
					.user.image}')"
				class="avatar"
			/>
		{/if}
		<span class="signedInText">
			<small>Signed in as</small><br />
			<strong
				>{$page.data.session.user?.name ?? 'User'}</strong
			>
		</span>
		<button on:click={() => signOut()} class="button"
			>Sign out</button
		>
	{:else}
		<span class="notSignedInText"
			>You are not signed in</span
		>
		<br />
		<button on:click={() => signIn('github')}
			>Sign In with Discord</button
		>
	{/if}
</p>
<HomeHeader />
<CallToAction />
<FeaturedItems />
<Features />
<JustReviewed />
<BreakText />
<Popular />
