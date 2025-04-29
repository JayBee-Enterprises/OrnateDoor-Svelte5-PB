export type Categories = 'event' | 'news' | 'site-update' | 'pioneer-dgc';

export type Post = {
	title: string;
	slug: string;
	content: string;
	date: string;
	published: boolean;
};

export type Event = {
	name: string;
	description: string;
	startDate: string;
	endDate: string;
	checkInTime: string;
	location: string;
	type: string;
	imageURL: string;
	registrationURL: string;
	pdgaURL: string;
	discGolfSceneURL: string;
	eventInfoURL: string;
	resultsURL: string;
};

export type Course = {
	name: string;
	description: string;
	location: string;
	imageURL: string;
};

export type Board = {
	name: string;
	role: string;
	bio: string;
	imageURL: string;
}