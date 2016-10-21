const nodeAsio= require('./build/Release/nodeAudioAsio'),
      fs      = require('fs')

const samplesPerBlock  = 256,
      bitsPerSample    = 32,
      channelBufferLen = samplesPerBlock * bitsPerSample / 8,
      buf              = new Buffer(1024)

var out = 0


fs.open('output.raw', 'w', (err, fd) => {
  out = fd

  const asioErr = nodeAsio.init({
  	driver: 'ASIO4ALL v2',
  	sampleRate: 44100,
  	bitsPerSample: bitsPerSample,
  	samplesPerBlock: samplesPerBlock,
  	endianess: 'little',
  	inputChannels: [0, 1], // first two channels
  	outputChannels: [0, 1] // first two channels
  });
  nodeAsio.start({}, function(bufs){
    var locBuf = bufs[0]
    fs.write(out, locBuf, 0, locBuf.length, $ => $)
  	return [buf];
  });
})

setTimeout(E =>nodeAsio.stop(),10000 );