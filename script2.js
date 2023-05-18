let array1 = [1,3,2,5,4,6,7,8,9,10 , 11, 16 ,21 ,181 , 321]
 let evenNum = 0;
 let oddNum =0;
 
 const evenodd = function evenodd (array1) {
    for (let i = 0 ; i < array1.length ; i++) {
        if (array1[i] % 2 === 0 ) {
            evenNum++;
            
        } else {
            oddNum++
            
        }
        
    }
    
 }

 evenodd(array1);

 alert('number of even is : ' + evenNum);
 alert('number of odd is :' + oddNum);

//  EZ :P xD
