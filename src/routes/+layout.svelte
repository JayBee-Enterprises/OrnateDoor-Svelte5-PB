<script>
	import '../app.css';
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import PageTransition from './transition.svelte';

	let { data, children } = $props();
</script>

<div class="min-h-screen bg-base-100 text-base-content">
	<Header />
	<PageTransition url={data.url}>
		{@render children()}
	</PageTransition>
	<Footer />
</div>
