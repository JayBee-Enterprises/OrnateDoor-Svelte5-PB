<script>
	import { Icon, BookOpen, Wrench, WrenchScrewdriver } from 'svelte-hero-icons';

	let { data } = $props();
</script>

<main>
	<section class="hero min-h-[60vh] bg-base-300">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold text-primary">Welcome to Ornate Door Games</h1>
				<p class="py-6 text-lg">Your portal to enhanced tabletop gaming. Discover useful tools for Magic: The Gathering, Dungeons & Dragons and other Table Top Roleplaying Games, and explore rich lore from ongoing RPG campaigns.</p>
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
					<Icon src={Wrench} class="h-20 w-20"></Icon>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">Magic: The Gathering Tools</h2>
					<p>Streamline your MTG games with helpful online utilities. Deck helpers, life counters, and more coming soon!</p>
					<div class="card-actions mt-4">
						<button class="btn btn-outline btn-primary" disabled>Coming Soon</button>
					</div>
				</div>
			</div>

			<div id="dnd-tools" class="card bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105">
				<figure class="px-10 pt-10">
					<Icon src={WrenchScrewdriver} class="h-20 w-20"></Icon>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">TTRPG Tools</h2>
					<p>Manage your TTRPG games more easily. Initiative trackers, character sheet aids, dice rollers, and other utilities planned.</p>
					<div class="card-actions mt-4">
						<button class="btn btn-outline btn-primary" disabled>Coming Soon</button>
					</div>
				</div>
			</div>

			<div id="dnd-kb" class="card bg-base-200 shadow-xl transition-transform duration-300 hover:scale-105">
				<figure class="px-10 pt-10">
					<Icon src={BookOpen} class="h-20 w-20"></Icon>
				</figure>
				<div class="card-body items-center text-center">
					<h2 class="card-title">TTRPG Campaigns</h2>
					<p>Delve into the lore, characters, and settings of our custom RPG campaigns. A living wiki for players and enthusiasts.</p>
					<div class="card-actions mt-4">
						<button class="btn btn-outline btn-primary" disabled>Coming Soon</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
