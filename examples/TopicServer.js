/**
 * Created by mschwartz on 3/12/15.
 */

/*global require */
var Hazelcast   = require('decaf-hazelcast').Server,
    hazelcast   = new Hazelcast(),
    topic       = hazelcast.getMap('example-topic'),
    setInterval = require('Timers');

topic.addMessageListener({
    onMessage : function (message) {
        console.dir(message);
    }
});

var i = 0;
setInterval(function() {
    i++;
    topic.publish('hello ' + i);
});

console.log('server waiting for messages');
