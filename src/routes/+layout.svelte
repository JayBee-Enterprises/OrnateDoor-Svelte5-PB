<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import '../app.css';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<div class="min-h-screen bg-base-300">
	<!-- Navigation -->
	<nav class="navbar sticky top-0 z-50 bg-base-200 shadow-lg">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000xsvg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
					</svg>
				</label>
				<ul tabindex="0" class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow">
					<li><a>Home</a></li>
					<li>
						<a>Games</a>
						<ul class="p-2">
							<li><a>New Releases</a></li>
							<li><a>RPGs</a></li>
							<li><a>Strategy</a></li>
							<li><a>Indie</a></li>
						</ul>
					</li>
					<li><a>Reviews</a></li>
					<li><a>News</a></li>
					<li><a>Forums</a></li>
				</ul>
			</div>
			<a class="btn btn-ghost text-xl normal-case">
				<span class="text-accent">Ornate</span>Door
			</a>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a>Home</a></li>
				<li tabindex="0">
					<details>
						<summary>Games</summary>
						<ul class="z-[1] bg-base-200 p-2">
							<li><a>New Releases</a></li>
							<li><a>RPGs</a></li>
							<li><a>Strategy</a></li>
							<li><a>Indie</a></li>
						</ul>
					</details>
				</li>
				<li><a>Reviews</a></li>
				<li><a>News</a></li>
				<li><a>Forums</a></li>
			</ul>
		</div>
		<div class="navbar-end">
			<button class="btn btn-circle btn-ghost">
				<i data-feather="search" class="h-5 w-5"></i>
			</button>
			<button class="btn btn-circle btn-ghost">
				<div class="indicator">
					<i data-feather="bell" class="h-5 w-5"></i>
					<span class="badge indicator-item badge-primary badge-xs">3</span>
				</div>
			</button>
			<a class="btn btn-primary ml-2">Sign In</a>
		</div>
	</nav>
	{@render children()}
	<!-- Footer -->
	<footer class="footer bg-neutral p-10 text-neutral-content">
		<div>
			<h3 class="mb-2 text-lg font-bold">
				<span class="text-accent">Ornate</span>Door
			</h3>
			<p>Your Portal to Gaming Excellence<br />Est. 2020</p>
		</div>
		<div>
			<span class="footer-title">Content</span>
			<a class="link-hover link">Games</a>
			<a class="link-hover link">Reviews</a>
			<a class="link-hover link">News</a>
			<a class="link-hover link">Guides</a>
		</div>
		<div>
			<span class="footer-title">Community</span>
			<a class="link-hover link">Forums</a>
			<a class="link-hover link">Discord</a>
			<a class="link-hover link">Tournaments</a>
			<a class="link-hover link">Events</a>
		</div>
		<div>
			<span class="footer-title">Company</span>
			<a class="link-hover link">About Us</a>
			<a class="link-hover link">Contact</a>
			<a class="link-hover link">Careers</a>
			<a class="link-hover link">Advertise</a>
		</div>
		<div>
			<span class="footer-title">Legal</span>
			<a class="link-hover link">Terms of use</a>
			<a class="link-hover link">Privacy policy</a>
			<a class="link-hover link">Cookie policy</a>
		</div>
	</footer>

	<div class="footer footer-center bg-base-300 p-4 text-base-content">
		<div>
			<div class="grid grid-flow-col gap-4">
				<a class="btn btn-circle btn-ghost">
					<i data-feather="twitter" class="h-5 w-5"></i>
				</a>
				<a class="btn btn-circle btn-ghost">
					<i data-feather="instagram" class="h-5 w-5"></i>
				</a>
				<a class="btn btn-circle btn-ghost">
					<i data-feather="youtube" class="h-5 w-5"></i>
				</a>
				<a class="btn btn-circle btn-ghost">
					<i data-feather="twitch" class="h-5 w-5"></i>
				</a>
				<a class="btn btn-circle btn-ghost">
					<i data-feather="discord" class="h-5 w-5"></i>
				</a>
			</div>
			<p class="mt-4">Copyright © 2025 - All rights reserved by OrnateDoor Gaming</p>
		</div>
	</div>
</div>
