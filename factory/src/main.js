import { GadgetFactory } from "gadgetFactory.js";

function main () {
    factory = new GadgetFactory();
    tablet = factory.createGadget('tablet' , {name: 'ms', hdd:90, ram: 12});
    console.log(tablet);
}

main();