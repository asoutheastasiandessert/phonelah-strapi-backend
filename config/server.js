module.exports = ({ env }) => {
  return ({
    host: env('HOST', '0.0.0.0'),
    // host: "13.251.84.199",
    port: 1337,
    admin: {
      auth: {
        secret: env('ADMIN_JWT_SECRET', 'dc844c7b3e4fe00d74fb09efab425370'),
      },
    },
  })
};
