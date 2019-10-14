# Barcode scanner node for Node-RED

This node-red node is inspired by the project [SteampunkProfessor/node-red-contrib-barcode-scanner](https://github.com/SteampunkProfessor/node-red-contrib-barcode-scanner), but after struggeling with the dependencies of that project we decided to rewrite it from scratch. We base our node on the [node-hid-stream](https://github.com/agirorn/node-hid-stream) library.

### Installation

#### Install Dependencies
Make sure you install first [node-hid](https://github.com/node-hid/node-hid) library in your node-red folder. On Raspberry Pi it will be necessary to build it from sources.
