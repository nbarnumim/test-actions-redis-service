const redis = require('redis');

(async () => {
  const client = redis.createClient({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
  });

  client.on('error', (err) => {
        console.log('Redis Client Error', err);
        process.exit(1);
  });

  console.log("connecting...");
  await client.connect();

  console.log("setting key=value...");
  await client.set('key', 'value');

  console.log("getting key...");
  const value = await client.get('key');

  console.log(`found key=${value}`);

  await client.disconnect();
})();
