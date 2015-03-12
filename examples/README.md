# decaf-hazelcast Examples

These examples are identical to the ones in the Hazelcast documentation at this link:

- http://docs.hazelcast.org/docs/3.4/manual/html-single/hazelcast-documentation.html#starting-the-cluster-and-client

## Setup

```sh
$ bower install
$ ./decaf.sh GettingStartedServer.js

;; in another terminal window:
$ ./decaf.sh GettingStartedServer.js
```

You should see messages logged to the terminal window indicating the maps and queues in the example are working.  Then you can run this in a third window:

```sh
$ ./decaf.sh GettingStartedClient.js
```
