/**
 * Created by mschwartz on 3/11/15.
 */

/*global module*/
/**
 * prototype for Hazelcast Client and Server
 */
module.exports = {
    getMap: function(mapName) {
        return this.hazelcastInstance.getMap(mapName);
    },
    getQueue: function(queueName) {
        return this.hazelcastInstance.getQueue(queueName);
    },
    getTopic: function(topicName) {
        return this.hazelcastInstance.getTopic(topicName);
    }
};
