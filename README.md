soundbank-scale
===

Use with soundbank-inherit to distribute a series of audio-slots across a musical scale.

Use as a value provider in [soundbank](https://github.com/mmckegg/soundbank).

## Install

```bash
$ npm install soundbank-scale
```

## Example

```js
var Soundbank = require('soundbank')
var audioContext = new webkitAudioContext()

audioContext.providers = {
  inherit: require('soundbank-inherit'),
  scale: require('soundbank-scale')
}

audioContext.sources = {
  oscillator: require('soundbank-oscillator')
}

var soundbank = Soundbank(audioContext)
soundbank.connect(audioContext.destination)

// configure the original slot
soundbank.update({
  id: 'note0',
  offset: 0,
  sources: [
    { node: 'oscillator',
      note: {
        node: 'scale',
        scale: 'major'
      }
    }
  ]
})

// inherit from original
soundbank.update({
  id: 'note1',
  node: 'inherit',
  from: 'note0',
  offset: 1
})
soundbank.update({
  id: 'note2',
  node: 'inherit',
  from: 'note0',
  offset: 2
})

// now if any changes are made to the original slot, they will also be applied to any slots that inherit from it
```