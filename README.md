# Barcode scanner node for Node-RED

This node-red node is inspired by the project [SteampunkProfessor/node-red-contrib-barcode-scanner](https://github.com/SteampunkProfessor/node-red-contrib-barcode-scanner), but after struggeling with the dependencies of that project we decided to rewrite it from scratch. We base our node on the [node-hid-stream](https://github.com/agirorn/node-hid-stream) library.

### Installation

#### Install Dependencies
Make sure you install first [node-hid](https://github.com/node-hid/node-hid) library in your node-red folder. On Raspberry Pi it will be necessary to build it from sources. You will need to install the following packages to compile it:

`sudo apt-get -y install build-essential git libudev-dev libusb-1.0-0 libusb-1.0-0-dev`

Then you can install node-hid:

`npm install node-hid`

And finally the node-red-contrib-barcode-scanner:

`npm install git+https://github.com/m2creativetechnology/node-red-contrib-barcode-scanner.git`

To not run node-red as root you can copy the file `51-scanner.rules` to the folder `/etc/udev/rules.d/` and reload the rules by `sudo udevadm control --reload-rules` and reboot the system.
