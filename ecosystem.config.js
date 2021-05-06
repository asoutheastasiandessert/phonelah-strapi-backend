let password = "Kopigao0!"
module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/home/ec2-user/environment/blog-strapi/backend',
      script: 'npm',
      // from this
      args: 'start',
      // to this
      // args: 'run strapi develop',
      env: {
        NODE_ENV: 'production',
        // DATABASE_HOST: 'cluster-sg-1-shard-00-02.5mn4z.mongodb.net',
        DATABASE_HOST: 'cluster-sg-1-shard-00-00.5mn4z.mongodb.net',
        DATABASE_PORT: 27017,
        DATABASE_NAME: 'blog', // DB name under 'Configuration' tab
        DATABASE_USERNAME: 'phonelah', // default username
        DATABASE_PASSWORD: 'Kopigao0!',
        AWS_ACCESS_KEY_ID: 'AKIAIYOIB4NBNXH5MI5A',
        AWS_ACCESS_SECRET: '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', // Find it in Amazon S3 Dashboard
        AWS_REGION: 'ap-southeast-1',
        AWS_BUCKET_NAME: 'strapi-blogs',
      },
    },
  ],
};
