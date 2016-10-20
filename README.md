# `node-audio-asio` for Node 6
This package enables NodeJS programs to access audio devices that come with ASIO drivers. The ASIO drivers follow an API by Steinberg and are geared toward professional applications that need low-latency, low-overhead access on Windows hosts.

## Usage
```javascript
const nodeAsio = require('node-audio-asio'),
      samplesPerBlock  = 256,
      bitsPerSample    = 24,
      sampleRate       = 44100,
      channelBufferLen = samplesPerBlock * bitsPerSample / 8,
      buf              = new Buffer(channelBufferLen),
      initial          = [buf, buf]

const asioErr = nodeAsio.initAsio({
  driver: 'ASIO4ALL v2',
  sampleRate,
  bitsPerSample,
  samplesPerBlock,
  endianess: 'little',
  inputChannels: [0], // first channel
  outputChannels: [0, 1] // first two channels
});
nodeAsio.start(initial, function(bufs) {
  // bufs[0] contains the recorded samples
  // TODO: what we return here are will be
  // propagated to the output
  return [buf, buf]
})

// ... when ready
nodeAsio.stop()
nodeAsio.deInit()
```

## Compiling
Download the ASIO SDK and extract its contents over the repository, then compile and link globally using `npm link`.

If you know of a good way how to include the ASIO SDK (either in binary or source form) without breaking the EULA of the SDK, please submit a pull request.

## Features and Bugs
This is alpha-quality software and a proof of concept. However, with the help of the community we are looking forward to make this a battle-hardened library for professional audio development on NodeJS under Windows.

## About Distopik
`node-audio-asio` is sponsored by Distopik.

[Distopik](http://www.distopiksound.com) is a company with vested interest in professional audio programming, NodeJS and Javascript platforms in general. Check out our mix:analog product at http://www.mixanalog.com
