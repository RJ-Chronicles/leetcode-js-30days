type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    function toBe(val2: any){
        if ( val === val2) {
            return true;
        }
        throw new Error('Not Equal')
    }
    function notToBe(val2 : any) {
        if ( val !== val2) {
            return true;
        }
        throw new Error('Equal')
    }
    return {toBe, notToBe}
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
