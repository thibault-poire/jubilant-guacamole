module.exports = {
	ci: {
		collect: {
			numberOfRuns: 5
		},

		url: ['http://localhost:5173/', 'http://localhost:5173/examples'],

		settings: {
			onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo']
		},

		assert: {
			assertions: {
				'categories:performance': ['error', { minScore: 0.9, aggregationMethod: 'median-run' }],
				'categories:accessibility': ['error', { minScore: 1, aggregationMethod: 'pessimistic' }],
				'categories:best-practices': ['error', { minScore: 1, aggregationMethod: 'pessimistic' }],
				'categories:seo': ['error', { minScore: 1, aggregationMethod: 'pessimistic' }]
			}
		}
	}
};
