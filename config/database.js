module.exports = ({ env }) => {
  let password = "Kopigao0!"
  return ({
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          // host: env('DATABASE_HOST', 'cluster-sg-1-shard-00-00.5mn4z.mongodb.net'),
          // host: 'cluster-sg-1-shard-00-02.5mn4z.mongodb.net',
          // host: 'cluster-sg-1-shard-00-01.5mn4z.mongodb.net',
          uri: "mongodb://phonelah:" + password + "@cluster-sg-1-shard-00-00.5mn4z.mongodb.net:27017,cluster-sg-1-shard-00-01.5mn4z.mongodb.net:27017,cluster-sg-1-shard-00-02.5mn4z.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-i3t2rg-shard-0&authSource=admin&retryWrites=true&w=majority",
          srv: env.bool('DATABASE_SRV', false),
          port: env.int('DATABASE_PORT', 27017),
          database: env('DATABASE_NAME', 'blog'),
          username: env('DATABASE_USERNAME', 'phonelah'),
          password: env('DATABASE_PASSWORD', 'Kopigao0!'),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', true),
        },
      },
    },
  })
};
