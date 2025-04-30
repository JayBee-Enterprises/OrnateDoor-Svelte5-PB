export function formatDate(date, dateStyle = 'medium', locales = 'en') {
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

export const Dice = {
	singleDie: function (dieSize) {
		return Math.floor(Math.random() * dieSize) + 1;
	},
	// Used for rolling multiple dice with an optional modifier, (e.g. 2d4+3 would mean num=2, die=4, mod=3)
	multipleDice: function (num, die, mod) {
		const results = [];
		for (let rollCount = 0; rollCount < num; rollCount++) {
			const dieResult = Math.floor(Math.random() * die) + 1;
			results.push(dieResult);
		}
		const sum = results.reduce((a, b) => a + b);
		return sum + mod;
	}
};

export const weightedRandom = (max, numRolls) => {
	let num = 0;
	for (let i = 0; i < numRolls; i++) {
		num += Math.random() * (max / numRolls);
	}
	return num;
}

export const preventDefault = (handler) => {
	return (e) => {
		e.preventDefault();
		handler(e);
	};
}