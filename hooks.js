const redis = require("redis");

const redisClient = redis.createClient(process.env.REDIS_URL);

module.exports = {
  actionTopicPost: function(data) {
    console.debug(data);
  },
  actionTopicReply: function(data) {
    console.debug(data);
  },
  actionCategoryCreate: function(data) {
    console.debug(data);
  },
  actionGroupCreate: function(data) {
    console.debug(data);
  },
  actionGroupJoin: function(data) {
    console.debug(data);
  }
};
