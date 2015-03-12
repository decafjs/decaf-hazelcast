/**
 * Created by mschwartz on 3/11/15.
 */

/*global java, Packages, require, module */

var File = require ('File'),
    {ClientConfig} = Packages.com.hazelcast.client.config,
    {Hazelcast} = Packages.com.hazelcast.core;

function isConfigFile(path) {
    if (path) {
        if (!new File(path).exists()) {
            return false;
        }
        return path;
    }
}
function Client(configFilePath) {
    configFilePath = isConfigFile(configFilePath) || isConfigFile('./hazelcast.xml') || isConfigFile('bower_components/decaf-hazelcast/hazelcast.xml');
    if (!configFilePath) {
        throw new Error('Hazelcast: could not find configuration file hazelcast.xml');
    }
    java.lang.System.getProperties().setProperty('hazelcast.config', configFilePath);
    this.hazelcastInstance = Hazelcast.newHazelcastClient(new ClientConfig());
}
decaf.extend(Client.prototype, require('Prototype'));

module.exports = Client;
