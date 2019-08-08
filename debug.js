const redis = require("redis");

const redisClient = redis.createClient("//localhost:6379");

redisClient.on("pmessage", (pattern, channel, message) => {
  console.debug("pattern", pattern, "channel", channel, "message", message);
});

redisClient.psubscribe("*");
