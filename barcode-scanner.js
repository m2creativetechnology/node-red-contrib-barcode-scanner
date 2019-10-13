// var KeyboardLines = require('node-hid-stream').KeyboardLines;
// var lines = new KeyboardLines({ vendorId: 0x2010, productId: 0x7638 });
//
// lines.on("data", function(data) {
//   // The user has pressed w, a, s & d, ENTER (simultaneously (why? I don't know))
//   console.log(data); //  "wasd"
// });
//


module.exports = function(RED) {
	"use strict";
	var KeyboardLines = require('node-hid-stream').KeyboardLines;
	var lines = new KeyboardLines({ vendorId: 0x2010, productId: 0x7638 });

	function BarcodeScannerNode(config) {
  	RED.nodes.createNode(this, config);
		var node = this;

		lines.on("data", function(data) {
		  console.log(data);
			msg.topic = node.topic;
			msg.payload = data;
			node.send(msg);
		});
	}

  // Register the node by name. This must be called before overriding any of the
  // Node functions.
  RED.nodes.registerType("barcode-scanner",BarcodeScannerNode);
}
