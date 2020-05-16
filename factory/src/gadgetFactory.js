import {Tablet} from 'tablet.js';
import {Laptop} from 'laptop.js';

export default class GadgetFactory {


    
    createGadget(type, props) {
        switch(type) {
            case "tablet":
            return new Tablet({props});

            case "tablet":
            return new Laptop({props});
        }

     }
}