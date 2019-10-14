module.exports = function(RED) {
    function BarcodeScannerNode(config) {
        RED.nodes.createNode(this,config);

        var node = this;
        var msg = {};
        var KeyboardLines = require('node-hid-stream').KeyboardLines;
        var lines = new KeyboardLines({ vendorId: config.vendorId, productId: config.productId });

        lines.on("data", function(data) {
    			msg.topic = config.topic;
    			msg.payload = data;
    			node.send(msg);
    		});

        node.on('close', function() {
          // tidy up any state
          lines.close();
        });
    }
    RED.nodes.registerType("barcode-scanner",BarcodeScannerNode);
}
