function solution(number){
  
    var sum = 0;
    
   for(i =0;i < number;i++){
     
     if(i % 3 == 0 || i % 5 ==0 ) {
       sum+=i;
       continue;
     } else if(i % 5 == 0) {
       sum+=i;
       continue;
     } else {
       continue;
   }
  
  }
      return sum;
  }