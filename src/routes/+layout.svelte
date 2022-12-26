<script lang="ts">
	import '../app.css';
</script>

<!-- navbar -->
<div class="bg-gray-900 lg:pb-12">
	<div class="max-w-screen-xl px-4 md:px-8 mx-auto ">
		<header class="flex justify-center py-4 md:py-8">
			<!-- nav - start -->
			<nav class="hidden lg:flex gap-12">
				<a
					href="/"
					class=" text-white text-3xl font-semibold transition duration-100"
					>Bookhaus</a
				>
				<a
					href="/"
					class="text-gray-200 hover:text-white text-md font-semibold transition duration-100"
					>SIGN IN</a
				>
				<a
					href="/"
					class="text-gray-200 hover:text-whitetext-md font-semibold transition duration-100"
				>
					CREATE ACCOUNT
				</a>
				<a
					href="/"
					class="text-gray-200 hover:text-white  text-md font-semibold transition duration-100"
					>FILMS</a
				>
				<a
					href="/"
					class="text-gray-200 hover:text-white text-md font-semibold transition duration-100"
					>LISTS</a
				>
				<a
					href="/"
					class="text-gray-200 hover:text-white  text-md font-semibold transition duration-100"
					>MEMBERS</a
				>
				<a
					href="/"
					class="text-gray-200 hover:text-white text-md font-semibold transition duration-100"
					>JOURNALS</a
				>
				<input
					type="text"
					class="bg-gray-200 rounded-3xl"
				/>
			</nav>
			<!-- nav - end -->
		</header>

		<!-- menu - start -->

		<!-- menu - end -->
	</div>
</div>
<slot />
