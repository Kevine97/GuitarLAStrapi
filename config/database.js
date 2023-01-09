module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdmo29ta49944a8j777g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ebqe'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'CKJMAivopZypXMpSWS6o0FH4r4xgVrO6'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
