/**
 * Created by mschwartz on 3/11/15.
 */

/*global java, Packages, require, module */

var File = require ('File');

function isConfigFile(path) {
    if (path) {
        if (!new File(path).exists()) {
            return false;
        }
        return path;
    }

}
function Hazelcast(configFilePath) {
    configFilePath = isConfigFile(configFilePath) || isConfigFile('./hazelcast.xml') || isConfigFile('bower_components/decaf-hazelcast/hazelcast.xml');
    if (!configFilePath) {
        throw new Error('Hazelcast: could not find configuration file hazelcast.xml');
    }
    java.lang.System.getProperties().setProperty('hazelcast.config', configFilePath);
    this.hazelcastInstance = new Packages.com.hazelcast.core.Hazelcast.newHazelcastInstance();
}
decaf.extend(Hazelcast.prototype, {
    getMap: function(mapName) {
        return this.hazelcastInstance.getMap(mapName);
    },
    getQueue: function(queueName) {
        return this.hazelcastInstance.getQueue(queueName);
    },
    size: function() {
        return this.hazelcastInstance.size();
    }
});

module.exports = Hazelcast;
