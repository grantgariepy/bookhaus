<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
</script>

<!-- navbar -->

<div class="bg-zinc-900 lg:pb-2 z-10">
	<div class="max-w-screen-xl px-4 md:px-8 mx-auto ">
		<section
			class=" top-0 flex justify-center flex-1 shrink-0  overflow-hidden rounded-lg relative"
		>
			<header class="flex justify-evenly py-2 md:py-8 ">
				<!-- nav - start -->
				<nav
					class="z-10 hidden lg:flex gap-8 absolute top-0 pt-4 bg-zinc-900"
				>
					<a
						href="/"
						class=" text-white text-3xl font-semibold transition duration-100"
						>Bookhaus</a
					>
					<div class="flex flex-row">
						<img
							src={$page.data.session?.user?.image}
							alt=""
							class="w-6 h-6 rounded-full mt-2 mx-1"
						/>
						<p
							class="uppercase cursor-pointer pt-2 text-zinc-300 hover:text-white text-md font-semibold transition duration-100"
						>
							{$page.data.session?.user?.name}
						</p>
					</div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<p
						on:click={() => signOut('discord')}
						class="cursor-pointer pt-2 text-gray-300 hover:text-white text-md font-semibold transition duration-100"
					>
						SIGN OUT
					</p>
					<a
						href="/books"
						class="pt-2 text-gray-300 hover:text-white  text-md font-semibold transition duration-100"
						>BOOKS</a
					>
					<a
						href="/"
						class="pt-2 text-gray-300 hover:text-white text-md font-semibold transition duration-100"
						>LISTS</a
					>
					<a
						href="/"
						class="pt-2 text-gray-300  hover:text-white  text-md font-semibold transition duration-100"
						>MEMBERS</a
					>
					<a
						href="/"
						class="pt-2 text-gray-300 hover:text-white text-md font-semibold transition duration-100"
						>JOURNALS</a
					>
					<div class="flex group">
						<input
							type="text"
							class="form-control transition duration-150 opacity-50 bg-zinc-300  text-zinc-400 focus:text-zinc-900 rounded-3xl border-b border-zinc-500  hover:opacity-70 focus:opacity-100 active:opacity-100 focus:outline-none my-1 pl-2"
						/>
						<div
							class="absolute right-2 pt-3  cursor-pointer"
						>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="search"
								class=" transition duration-150  w-3 fill-white group-focus-within:fill-zinc-700 group-hover:fill-zinc-700"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<path
									d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
								/>
							</svg>
						</div>
					</div>
				</nav>
				<!-- nav - end -->
			</header>

			<!-- image - end -->
		</section>
		<!-- text start -->
	</div>
</div>

<!-- text end -->
