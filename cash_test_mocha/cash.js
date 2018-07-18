module.exports = function myFunction(x) {

 if (isNaN(x))
 {
   //console.log("Error");
   return ("Enter number only");
 }

 var U =[100,50,20,10];
 var factors = new Array();
 var rem;
 var i,j,a;
 var ans=" ";

 if ( x < 0 )
 {
   return("Invalid number, try again!");
 }

 if ( x % 10 != 0)
 {
   return ("Notes Unavailable, try again!");
 }

 for(i=0;i<4;i++)
 {
   if (x>=U[i])
   {
   factors[i]=Math.trunc(x/U[i]); //console.log("f"+factors[i]+" ");
   rem= x%U[i];
   x=rem;
   }
   a = factors[i];
   for(j=0;j<a;j++)
   {
   ans += "$"+parseFloat(U[i]).toFixed(2)+" ";
   }
 }	//end for

 return(ans);
};
