type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));
	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}

export function formatTime(date, locales = 'en') {
	const timeToFormat = new Date(date.replaceAll('-', '/'));
	const timeFormatter = new Intl.DateTimeFormat(locales, {
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	});
	return timeFormatter.format(timeToFormat);
}

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const dateOptions = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric'
};
