# decaf-hazelcast
Hazelcast module for decafjs

See http://docs.hazelcast.org/docs/3.4/manual/html-single/hazelcast-documentation.htm for detailed Hazelcast documentation.

## Server:

```javascript
var Hazelcast= require('decaf-hazelcast').Server,
    hazelcast = new Hazelcast('path/to/hazelcast.xml');
```

## Client:

```javascript
var Hazelcast= require('decaf-hazelcast').Client,
    hazelcast = new Hazelcast('path/to/hazelcast.xml');
```

## About hazelcast.xml

The argument to new Hazelcast() constructor for client or server is optional.  If not present, the following paths are tried:

- ./hazelcast.xml
- bower_components/decaf-hazelcast/hazelcast.xml

See the Hazelcast documentation for configuration details (editing the xml file).

## Supported methods

Once you have a client or server instance, you may call one of:

```javascript
var map = hazelcast.getMap(map_name);
var queue = hazelcast.getQueue(queue_name);
var topic = hazelcast.getTopic(topic_name);
```

The methods on the map and queue are described in the Hazelcast documentation at the link above.

## Examples

See the README in the examples/ directory.


