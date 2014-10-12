[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"
[mech-core-link]: https://github.com/mechanismsjs/mech-core "Core mechanisms"
[mech-web-link]: https://github.com/mechanismsjs/mech-web "Web centric DOM mechanisms"
[mech-guid-link]: https://github.com/mechanisms/guid "Guid mechanisms"
[mech-library-link]: https://github.com/mechanismsjs/mech-library "Clone to easily create new mechanism libraries"

# mech-guid

Mechanisms are plugins for open source. See [Mechanisms Home](https://github.com/mechanisms/mech) for more information.

This project contains mechanisms for Guids (Globally unique IDs)

[Jsperf](http://jsperf.com/mech-guid) execution speeds.

## Other Libraries

* [Git mech-core][mech-core-link] latest version.
* [Git mech-web][mech-web-link] latest version.
* [Git mech-guid][mech-guid-link] latest version.
* [Git mech-library][mech-library-link] latest version.

# Supported Mechanisms

* *empty* - An empty guid mechanism
* *guid* - Primitive 'guid' mechanism
* *isValid* - A guid validator mechanism
* *make* - Generates a random Guid (algorithm stolen from e7 of [How To Create  a Guid](https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript))

## empty mechanism

Represents an empty mechanism.

empty.go - Returns an empty guid ("00000000-0000-0000-0000-000000000000")  
empty.goStr - Returns an empty guid ("00000000-0000-0000-0000-000000000000")  
empty.isEmpty - always true

```javascript
mguid.empty.go; // returns an empty guid
mguid.empty.goStr; // returns an empty guid
mguid.empty.isEmpty; // always returns true
```

## guid mechanism

A guid primitive.

Create a new guid:

```javascript
var newGuid = mguid.guid();

newGuid.go; // returns the new guid
newGuid.goStr; // returns the new guid
newGuid.isEmpty; // returns false
```

Create a guid from a string primitive:

```javascript
// A guid from a string
var newGuid = mguid.guid("60bce630-5a0c-41c1-abd3-f21df4d0290f");

newGuid.go; // returns the guid
newGuid.goStr; // returns the guid
newGuid.isEmpty; // returns false
```

Create an empty guid using the empty mechanism:

```javascript
var newGuid = mguid.guid(mguid.empty.go);

newGuid.go; // returns an empty guid
newGuid.goStr; // returns an empty guid
newGuid.isEmpty; // returns true
```

Create a guid using *make*. This is the same as making a guid without passing any parameter

```javascript
var newGuid = mguid.guid(mguid.make.go);

newGuid.go; // returns the new guid
newGuid.goStr; // returns the new guid
newGuid.isEmpty; // returns false
```

Try to create an invalid guid and validate is true returns an empty guid.

```javascript
var newGuid = mguid.guid("INVALID", true);

newGuid.go; // returns an empty guid
newGuid.goStr; // returns an empty guid
newGuid.isEmpty; // returns true
```

## isValid mechanism

Validates a guid.

```javascript
mguid.isValid("").go; // returns false
mguid.isValid("").goBool; // returns false
mguid.isValid("an invalid guid").goBool; // returns false
mguid.isValid(mguid.make.go).go; // returns true
mguid.isValid(mguid.make.go).goBool; // returns true
```

## make mechanism

Creates a new guid. This is not stored internally so you will need to do something with it.

```javascript
mguid.make.go; // creates a new guid
mguid.make.goStr; // creates a new guid
```

# Setup

## Using In Your Projects

Change directory to your node project.

    $ npm install --save mech-guid

## Development

### Setup

    $ npm install
    
### Continuous Rebuild and Testing

See ./dist for files we build.

    $ gulp

#### Test

    $ gulp webtests

OR

Right mouse click on /testsweb/index.html and open in browser.