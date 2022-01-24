const redis = require('redis');

const redisUrl = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

(async () => {
  const client = redis.createClient({
      url: redisUrl
  });

  client.on('error', (err) => {
        console.log('Redis Client Error', err);
        process.exit(1);
  });

  console.log(`connecting to ${redisUrl}...`);
  await client.connect();

  console.log("setting key=value...");
  await client.set('key', 'value');

  console.log("getting key...");
  const value = await client.get('key');

  console.log(`found key=${value}`);

  await client.disconnect();
})();
