[mech-home-link]: https://github.com/mechanisms/mech "Home repository for mechanisms"
[mech-core-link]: https://github.com/mechanismsjs/mech-core "Core mechanisms"
[mech-web-link]: https://github.com/mechanismsjs/mech-web "Web centric DOM mechanisms"
[mech-guid-link]: https://github.com/mechanismsjs/mech-guid "Guid mechanisms"
[mech-library-link]: https://github.com/mechanismsjs/mech-library "Clone to easily create new mechanism libraries"

# mech-guid

A library of mechanisms for Guid (Globally unique IDs) data types and the generation of Guids.

[Jsperf](http://jsperf.com/mech-guid) execution speeds.

See [Mechanism Home][mech-home-link] for more information and other libraries.

# Supported Mechanisms

* *[empty](#empty-mechanism)* - An empty guid mechanism
* *[guid](#guid-mechanism)* - Primitive 'guid' mechanism
* *[isValid](#isvalid-mechanism)* - A guid validator mechanism
* *[make](#make-mechanism)* - Generates a random guid (algorithm stolen from e7 of [How To Create  a Guid](https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript))

## <a name="empty-mechanism"></a> empty Mechanism

Represents an empty mechanism.

*empty.go* - Returns an empty guid ("00000000-0000-0000-0000-000000000000")  
*empty.goStr* - Returns an empty guid ("00000000-0000-0000-0000-000000000000")  
*empty.isEmpty* - always true

```javascript
mguid.empty.go; // returns an empty guid
mguid.empty.goStr; // returns an empty guid
mguid.empty.isEmpty; // always returns true
```

## <a name="guid-mechanism"></a> guid Mechanism

A guid primitive.

Create a new guid:

```javascript
var newGuid = mguid.guid(); // the guid is generated right here

newGuid.go; // returns the new guid
newGuid.goStr; // returns the new guid
newGuid.isEmpty; // returns false
```

Create a guid from a string primitive:

```javascript
var newGuid = mguid.guid("60bce630-5a0c-41c1-abd3-f21df4d0290f");

newGuid.go; // returns the guid
newGuid.goStr; // returns the guid
newGuid.isEmpty; // returns false
```

Create an empty guid using the empty mechanism:

```javascript
var newGuid = mguid.guid(mguid.empty);

newGuid.go; // returns an empty guid
newGuid.goStr; // returns an empty guid
newGuid.isEmpty; // returns true
```

Create a guid using *make*. This is the same as making a guid without passing any parameter

```javascript
var newGuid = mguid.guid(mguid.make.go); // the guid is generated right here

newGuid.go; // returns the new guid
newGuid.goStr; // returns the new guid
newGuid.isEmpty; // returns false
```

In the above example, we pass *make.go* to *guid()* meaning newGuid will store the value generated by *make.go*. In the next example, we pass make to guid(). This means, every time we invoke newGuid, newGuid will invoke make causing a new Guid to be generated every time.

```javascript
var newGuid = mguid.guid(mguid.make); // the guid is NOT generated right here

newGuid.go; // returns a new guid
newGuid.goStr; // returns a new guid
newGuid.isEmpty; // returns false
```

The *m.hold* mechanism can be used to retain the value of mguid.make.

```javascript
var newGuid = mguid.guid(m.hold(mguid.make)); // the guid is NOT generated right here

newGuid.go; // the guid is generated here, on the first access
newGuid.goStr; // the guid is NOT generated here, on the second access
newGuid.isEmpty; // returns false
```

Create an invalid guid while validate is true returns an empty guid.

```javascript
var newGuid = mguid.guid("INVALID", true);

newGuid.go; // returns an empty guid
newGuid.goStr; // returns an empty guid
newGuid.isEmpty; // returns true
```

Create an invalid guid while validate is false returns the invalid guid.

```javascript
var newGuid = mguid.guid("SOME VALUE", false);

newGuid.go; // returns "SOME VALUE"
newGuid.goStr; // returns "SOME VALUE"
newGuid.isEmpty; // returns false

// BUT

mguid.isValid(newGuid).go; // returns false
```

## <a name="isvalid-mechanism"></a> isValid Mechanism

Validates a guid.

```javascript
mguid.isValid("").go; // returns false
mguid.isValid("").goBool; // returns false
mguid.isValid("an invalid guid").goBool; // returns false
mguid.isValid(mguid.make).go; // returns true
mguid.isValid(mguid.make).goBool; // returns true
```

## <a name="make-mechanism"></a> make Mechanism

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
