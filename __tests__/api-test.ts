import * as difflib from "difflib";
import { AutoSnapshotSuite, registerSnapshots } from "../src/index";

declare var fail: (message: string) => void;
declare var console: any;

describe("api test", () =>
{
    
    it("escapes json newlines", () =>
    {
        registerSnapshots({
            '': ``,
        }, 'api test');
        
        
        const suite = new AutoSnapshotSuite(1, 'newline test');
        
        const userActual = ``;
        const userSnapshot = suite.getSnapshotAutomagically_saveActual();
        
        const suiteActual = suite.getHTML();
        
        const suiteExpected = ``;
        expect(suiteActual).toEqual(``);
    });
    
    
});
