## How to mock contact list
* Go to the store.js file.
```
src/store/store.js
```
* Edit the item in contactData array.
```js
// The 'key' attribute must be unique.
contactData: [
        {
            key: '1',
            name: 'Gilles Deleuze',
            age: 32,
        },
        {
            key: '2',
            name: 'George Bataille',
            age: 42,
        },
    ],
```
