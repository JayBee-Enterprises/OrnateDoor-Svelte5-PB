<script lang="ts">
	import type { PageData } from './$types';
    import { Icon, Bars3CenterLeft, Cog, Star } from 'svelte-hero-icons'

	let { data }: { data: PageData } = $props();
</script>



    <!-- Hero Section -->
    <div class="hero min-h-[70vh] bg-base-100" style="background-image: url('https://placehold.co/1200x600');">
        <div class="hero-overlay bg-opacity-70"></div>
        <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
                <h1 class="mb-5 text-5xl font-bold">Enter A New Realm</h1>
                <p class="mb-5">OrnateDoor.com is your portal to gaming excellence. Discover new worlds, conquer challenges, and join a community of passionate gamers.</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button class="btn btn-primary">Featured Games</button>
                    <button class="btn btn-outline">Latest Reviews</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Featured Games -->
    <section class="py-12 bg-base-200">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold">Featured Games</h2>
                <a class="link link-primary">View All</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Game Card 1 -->
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://placehold.co/400x250" alt="Ethereal Kingdoms" /></figure>
                    <div class="card-body">
                        <div class="flex justify-between items-start">
                            <h3 class="card-title">Ethereal Kingdoms</h3>
                            <div class="badge badge-secondary">NEW</div>
                        </div>
                        <p>A vast open-world RPG with breathtaking visuals and an intricate storyline.</p>
                        <div class="flex items-center mt-2">
                            <div class="rating rating-sm">
                                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-1" class="mask mask-star-2 bg-orange-400" checked />
                            </div>
                            <span class="ml-2 text-sm">5.0</span>
                        </div>
                        <div class="card-actions justify-end mt-3">
                            <button class="btn btn-primary btn-sm">Read Review</button>
                        </div>
                    </div>
                </div>
                
                <!-- Game Card 2 -->
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://placehold.co/400x250" alt="Neon Horizons" /></figure>
                    <div class="card-body">
                        <div class="flex justify-between items-start">
                            <h3 class="card-title">Neon Horizons</h3>
                            <div class="badge badge-accent">POPULAR</div>
                        </div>
                        <p>A cyberpunk racing game with stunning visuals and innovative gameplay mechanics.</p>
                        <div class="flex items-center mt-2">
                            <div class="rating rating-sm">
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <span class="ml-2 text-sm">4.2</span>
                        </div>
                        <div class="card-actions justify-end mt-3">
                            <button class="btn btn-primary btn-sm">Read Review</button>
                        </div>
                    </div>
                </div>
                
                <!-- Game Card 3 -->
                <div class="card bg-base-100 shadow-xl">
                    <figure><img src="https://placehold.co/400x250" alt="Tactical Legacy" /></figure>
                    <div class="card-body">
                        <div class="flex justify-between items-start">
                            <h3 class="card-title">Tactical Legacy</h3>
                            <div class="badge badge-primary">SALE</div>
                        </div>
                        <p>A turn-based strategy game that challenges your tactical thinking and resource management.</p>
                        <div class="flex items-center mt-2">
                            <div class="rating rating-sm">
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-3" class="mask mask-star-2 bg-orange-400" />
                            </div>
                            <span class="ml-2 text-sm">4.5</span>
                        </div>
                        <div class="card-actions justify-end mt-3">
                            <button class="btn btn-primary btn-sm">Read Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest News Section -->
    <section class="py-12 bg-base-300">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold">Latest Gaming News</h2>
                <a class="link link-primary">All News</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- News Item 1 -->
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure class="lg:w-1/3"><img src="https://placehold.co/300x200" alt="News" class="h-full w-full object-cover" /></figure>
                    <div class="card-body lg:w-2/3">
                        <h3 class="card-title">Major Update Coming to Ethereal Kingdoms</h3>
                        <p>Developers announce a massive expansion with new regions, storylines, and gameplay features.</p>
                        <div class="card-actions justify-between items-center">
                            <span class="text-sm opacity-70">April 26, 2025</span>
                            <button class="btn btn-primary btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
                
                <!-- News Item 2 -->
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure class="lg:w-1/3"><img src="https://placehold.co/300x200" alt="News" class="h-full w-full object-cover" /></figure>
                    <div class="card-body lg:w-2/3">
                        <h3 class="card-title">E-Sports Championship Finals Set for Next Month</h3>
                        <p>The world's top gaming teams prepare to compete for the largest prize pool in e-sports history.</p>
                        <div class="card-actions justify-between items-center">
                            <span class="text-sm opacity-70">April 24, 2025</span>
                            <button class="btn btn-primary btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
                
                <!-- News Item 3 -->
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure class="lg:w-1/3"><img src="https://placehold.co/300x200" alt="News" class="h-full w-full object-cover" /></figure>
                    <div class="card-body lg:w-2/3">
                        <h3 class="card-title">Indie Spotlight: Rising Star Studios</h3>
                        <p>Meet the small team behind one of this year's most innovative and acclaimed indie titles.</p>
                        <div class="card-actions justify-between items-center">
                            <span class="text-sm opacity-70">April 22, 2025</span>
                            <button class="btn btn-primary btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
                
                <!-- News Item 4 -->
                <div class="card lg:card-side bg-base-100 shadow-xl">
                    <figure class="lg:w-1/3"><img src="https://placehold.co/300x200" alt="News" class="h-full w-full object-cover" /></figure>
                    <div class="card-body lg:w-2/3">
                        <h3 class="card-title">Next-Gen Console Rumors Intensify</h3>
                        <p>Industry insiders leak potential specifications and features for upcoming gaming hardware.</p>
                        <div class="card-actions justify-between items-center">
                            <span class="text-sm opacity-70">April 20, 2025</span>
                            <button class="btn btn-primary btn-sm">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Reviews Section -->
    <section class="py-12 bg-base-200">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold">Latest Reviews</h2>
                <a class="link link-primary">All Reviews</a>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Review Card 1 -->
                <div class="card bg-base-100 shadow-xl">
                    <figure class="relative">
                        <img src="https://placehold.co/400x225" alt="Game Review" />
                        <div class="absolute top-0 right-0 m-4">
                            <div class="badge badge-lg bg-accent">9.5</div>
                        </div>
                    </figure>
                    <div class="card-body">
                        <h3 class="card-title">Cosmic Odyssey</h3>
                        <p>A masterful space exploration game that redefines the genre with its stunning visuals and engaging storyline.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm">Read Full Review</button>
                        </div>
                    </div>
                </div>
                
                <!-- Review Card 2 -->
                <div class="card bg-base-100 shadow-xl">
                    <figure class="relative">
                        <img src="https://placehold.co/400x225" alt="Game Review" />
                        <div class="absolute top-0 right-0 m-4">
                            <div class="badge badge-lg bg-accent">8.7</div>
                        </div>
                    </figure>
                    <div class="card-body">
                        <h3 class="card-title">Shadow Legends</h3>
                        <p>An atmospheric action-adventure with deep combat mechanics and a haunting art style.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm">Read Full Review</button>
                        </div>
                    </div>
                </div>
                
                <!-- Review Card 3 -->
                <div class="card bg-base-100 shadow-xl">
                    <figure class="relative">
                        <img src="https://placehold.co/400x225" alt="Game Review" />
                        <div class="absolute top-0 right-0 m-4">
                            <div class="badge badge-lg bg-accent">7.8</div>
                        </div>
                    </figure>
                    <div class="card-body">
                        <h3 class="card-title">Pixelated Dreams</h3>
                        <p>A charming retro-inspired platformer that delivers old-school challenge with modern conveniences.</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary btn-sm">Read Full Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Section -->
    <section class="py-12 bg-base-300">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">Join Our Gaming Community</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Feature 1 -->
                <div class="card bg-base-100">
                    <div class="card-body items-center text-center">
                        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                            <i data-feather="users" class="text-primary-content"></i>
                        </div>
                        <h3 class="card-title">Active Forums</h3>
                        <p>Join discussions with fellow gamers, share tips, and find gaming partners.</p>
                    </div>
                </div>
                
                <!-- Feature 2 -->
                <div class="card bg-base-100">
                    <div class="card-body items-center text-center">
                        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                            <i data-feather="video" class="text-primary-content"></i>
                        </div>
                        <h3 class="card-title">Live Streams</h3>
                        <p>Watch live gameplay, tutorials, and exclusive interviews with game developers.</p>
                    </div>
                </div>
                
                <!-- Feature 3 -->
                <div class="card bg-base-100">
                    <div class="card-body items-center text-center">
                        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                            <i data-feather="award" class="text-primary-content"></i>
                        </div>
                        <h3 class="card-title">Weekly Tournaments</h3>
                        <p>Compete in our weekly gaming tournaments for prizes and recognition.</p>
                    </div>
                </div>
                
                <!-- Feature 4 -->
                <div class="card bg-base-100">
                    <div class="card-body items-center text-center">
                        <div class="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                            <i data-feather="gift" class="text-primary-content"></i>
                        </div>
                        <h3 class="card-title">Exclusive Giveaways</h3>
                        <p>Get access to exclusive game keys, merchandise, and early access opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-12 bg-primary text-primary-content">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-4">Stay in the Game</h2>
            <p class="max-w-2xl mx-auto mb-6">Subscribe to our newsletter for weekly gaming updates, exclusive content, and early access to reviews.</p>
            <div class="form-control w-full max-w-md mx-auto">
                <div class="input-group">
                    <input type="text" placeholder="Your email address" class="input input-bordered w-full" />
                    <button class="btn btn-secondary">Subscribe</button>
                </div>
            </div>
        </div>
    </section>

    