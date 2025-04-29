<script lang="ts">
	import type { PageData } from './$types';
	import { Icon, Bars3CenterLeft, Cog, Star } from 'svelte-hero-icons';

	let { data }: { data: PageData } = $props();
</script>

<main>
	<section class="hero min-h-[60vh] bg-base-300">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold text-primary">Welcome to Ornate Door Games</h1>
				<p class="py-6 text-lg">Your portal to enhanced tabletop gaming. Discover useful tools for Magic: The Gathering and Dungeons & Dragons, and explore rich lore from ongoing D&D campaigns.</p>
				<a href="#features" class="btn btn-accent">Explore Features</a>
			</div>
		</div>
	</section>

	<section id="features" class="bg-base-100 px-4 py-16">
		<div class="container mx-auto mb-12 text-center">
			<h2 class="mb-4 text-3xl font-bold">What We Offer</h2>
			<p class="text-lg text-base-content/80">Tools and resources to streamline your games and deepen your stories.</p>
		</div>

		<div class="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div id="mtg-tools" class="card bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105">
				<figure class="px-10 pt-10">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10h6c2-1 2.657-1.343 2.657-1.343a8 8 0 010 10z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Magic: The Gathering Tools</h2>
					<p>Streamline your MTG sessions with helpful online utilities. Deck helpers, life counters, and more coming soon!</p>
					<div class="card-actions mt-4">
						<button class="btn btn-outline btn-primary" disabled>Coming Soon</button>
					</div>
				</div>
			</div>

			<div id="dnd-tools" class="card bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105">
				<figure class="px-10 pt-10">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
					</svg>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Dungeons & Dragons Tools</h2>
					<p>Manage your D&D games more easily. Initiative trackers, character sheets aids, dice rollers, and other utilities planned.</p>
					<div class="card-actions mt-4">
						<button class="btn btn-outline btn-primary" disabled>Coming Soon</button>
					</div>
				</div>
			</div>

			<div id="dnd-kb" class="card bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105">
				<figure class="px-10 pt-10">
					<svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">D&D Knowledge Base</h2>
					<p>Delve into the lore, characters, and settings of my custom D&D campaigns. A living wiki for players and enthusiasts.</p>
					<div class="card-actions mt-4">
						<button class="btn btn-outline btn-primary" disabled>Coming Soon</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
