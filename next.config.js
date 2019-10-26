const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withOffline = require('next-offline');

const nextConfig = {
	workboxOpts: {
		swDest: 'static/service-worker.js',
		runtimeCaching: [
			{
				urlPattern: /^https?.*/,
				handler: 'networkFirst',
				options: {
					cacheName: 'https-calls',
					networkTimeoutSeconds: 15,
					expiration: {
						maxEntries: 150,
						maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
					},
					cacheableResponse: {
						statuses: [0, 200]
					}
				}
			}
		]
	},
	experimental: {
		modern: true,
		granularChunks: true
	}
};

module.exports = withCSS(withFonts(withOffline(nextConfig)));
