/**
 * Created by mschwartz on 3/11/15.
 */

/*global require */
var Hazelcast = require('decaf-hazelcast').Client,
    hazelcast = new Hazelcast(),
    customers = hazelcast.getMap('customers');

console.log('Map Size: ' + customers.size());
