// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.mohitkumar.info', // use www as it's your canonical domain
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
