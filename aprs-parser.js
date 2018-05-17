var aprs = require("aprs-parser");
var parser = new aprs.APRSParser();

module.exports = function(RED) {
    function APRSParserNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = parser.parse(msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("aprs-parser",APRSParserNode);
}