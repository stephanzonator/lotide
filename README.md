# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @stephanzonator/lotide`

**Require it:**

`const _ = require('@stephanzonator/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: When passed an array, returns the first element of that array.
* `tail()`: When passed an array, returns the entire erray without the first element in it.
* `middle()`: When passed an array, returns either the middle value (for an odd-numbered array) or the two middle values (for an even-numbered array)
