/*
============================================

                PATTERN
                 *
                * *
               * * *
                
============================================

*/


function pattern(n) {
    for (let i = 1; i <= n; i++) {
        let s = '';
        //loop for spaces 
        for (let j = 1; j <= n - i; j++) {
            s = s + ' '
        }
        for (let k = 0; k < i; k++) {
            s = s + '* '
        }
        console.log(s)
    }
}
// calling pattern with n 
pattern(3)