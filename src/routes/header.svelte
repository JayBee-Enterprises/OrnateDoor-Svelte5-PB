<script>
	import { Icon, Bars3 } from 'svelte-hero-icons';
	import logoImg from '$lib/images/logo.png';
</script>

<!-- Navigation -->
<header class="sticky top-0 z-50">
	<div class="navbar bg-base-200 shadow-md">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<label tabindex="0" class="btn btn-ghost lg:hidden" aria-label="Open Menu">
					<Icon src={Bars3} class="h-5 w-5"></Icon>
				</label>
				<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
				<ul tabindex="0" class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
					<li><a href="#mtg-tools">MTG Tools</a></li>
					<li><a href="#dnd-tools">TTRPG Tools</a></li>
					<li><a href="#dnd-kb">TTRPG Campaigns</a></li>
				</ul>
			</div>
			<div class="h-full w-full">
				<button class="btn btn-ghost h-full">
					<a href="/">
						<img src={logoImg} alt="Logo for Ornate Door Games" class="mx-auto h-20" />
					</a>
				</button>
			</div>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li><a href="#mtg-tools">Magic: The Gathering Tools</a></li>
				<li><a href="#dnd-tools">TTRPG Tools</a></li>
				<li><a href="#dnd-kb">TTRPG Campaigns</a></li>
			</ul>
		</div>
		<div class="navbar-end"></div>
	</div>
</header>
