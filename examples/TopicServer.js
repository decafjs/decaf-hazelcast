/**
 * Created by mschwartz on 3/12/15.
 */

/*global require */
var Hazelcast = require('decaf-hazelcast').Server,
    hazelcast = new Hazelcast(),
    topic     = hazelcast.getTopic('example-topic'),
    sleep     = builtin.process.sleep;
;

topic.addMessageListener({
    onMessage : function (message) {
        console.log(message.messageObject);
        console.log(message.source);
    }
});


var i = 0;
while (1) {
    i++;
    topic.publish('hello ' + i);
    sleep(5);
}

console.log('server waiting for messages');
