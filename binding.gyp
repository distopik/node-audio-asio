{
	"targets": [
		{
			"target_name": "nodeAudioAsio",
			"sources": [ "./host/pc/asiolist.cpp", "./host/asiodrivers.cpp", "./common/asio.cpp", "Source.cpp" ],
			"include_dirs": [ "asio", "build", "common", "driver", "host", "host/pc", "<!(node -e \"require('nan')\")"],
		
		}
	],

}
