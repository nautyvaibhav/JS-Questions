/*
Think about a spinwheel. A spinwheel has different valued items (10Rs, 5 Rs, 2 Rs, 1Re etc..) Everytime the spinwheel is spun, you will get different items. The probability of each item is pre-determined

1Rs - 0.1




5Rs - 0.2

2Rs - 0.3
1 Re - 0.4
*/
function minimizeGift() {

    let items = [

        [1, 0.1],
        [2, 0.3],
        [5, 0.2],
        [10, 0.4]
    ]

    let a = Math.floor(Math.random() * 4);
    console.log(a)
    let userValue = items[a][0];

    let count = 5;  
    let random =Math.floor(Math.random()*2);
    let prev=0;
    while(count){
        if(random==1 && prev!==1){
            prev=a;
            count--;
            //give the precious  gift 
            return userValue;
        }
        else{
// give the normal gifts
        }
    }   
 }



minimizeGift()
