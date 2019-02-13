module.exports = {
	'basic': {
		message: 'supports basic usage'
	},
	'basic:ignore-1': {
		message: 'supports { ignore: "" } usage',
		options: {
			ignore: 'slot'
		}
	},
	'basic:ignore-2': {
		message: 'supports { ignore: [] } usage',
		options: {
			ignore: ['div', 'slot']
		}
	}
};
