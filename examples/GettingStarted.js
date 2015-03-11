/**
 * Created by mschwartz on 3/11/15.
 */

/*global require */

/**
 * Implements GettingStarted example from http://docs.hazelcast.org/docs/3.4/manual/html-single/hazelcast-documentation.html#starting-the-cluster-and-client
 *
 * @type {exports.Hazelcast|*}
 */
var Hazelcast = require('..').Hazelcast,
    hazelcast = new Hazelcast('../hazelcast.xml'),
    customers = hazelcast.getMap('customers');

customers.put(1, 'Joe');
customers.put(2, 'Ali');
customers.put(3, 'Avi');

console.log('customer with key 1: ' + customers.get(1));
console.log('Map Size: ' + hazelcast.size());       // should this be customers.size?

var queueCustomers = hazelcast.getQueue('customers');
queueCustomers.offer( 'Tom' );
queueCustomers.offer( 'Mary' );
queueCustomers.offer( 'Jane' );
console( 'First customer: ' + queueCustomers.poll() );
console( 'Second customer: '+ queueCustomers.peek() );
console( 'Queue size: ' + queueCustomers.size() );
