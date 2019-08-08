const redis = require("redis");

const redisClient = redis.createClient(process.env.REDIS_URL);

module.exports = {
  actionTopicPost: function(data) {
    redisClient.publish("nodebb.topic.post", JSON.stringify(data));
  },
  actionTopicReply: function(data) {
    redisClient.publish("nodebb.topic.reply", JSON.stringify(data));
  },
  actionCategoryCreate: function(data) {
    redisClient.publish("nodebb.category.create", JSON.stringify(data));
  },
  actionGroupCreate: function(data) {
    redisClient.publish("nodebb.group.create", JSON.stringify(data));
  },
  actionGroupJoin: function(data) {
    redisClient.publish("nodebb.group.join", JSON.stringify(data));
  }
};
