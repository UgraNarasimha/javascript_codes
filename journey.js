function myFunction() {

var trips = [["Mysuru","bangalore"],["bangalore","YourPlace"],["Cologne","Berlin"],["Munich","Cologne"],["YourPlace","Munich"]];

var city = new Array();      // List of cities
var x = new Array().fill(0); // List for marking starting route
var y = new Array().fill(0); // List for marking ending route
var index=0;
var i,j;

for (i = 0; i < trips.length; i++)
{
  for (j = 0; j < 2; j++)
  { 
    if (city.indexOf(trips[i][j]) < 0)
    {
      city[index]=trips[i][j];

      if(j==0)
      {
        x[index] = 1;
        y[index] = 2;
      }
      if(j==1)
      {
        x[index] = 2;
        y[index] = 1;
      }
      index ++;
    }
    else
    {
      if(j==0)
      {
        x[city.indexOf(trips[i][j])] = 0;
      }
      if(j==1)
      {
        y[city.indexOf(trips[i][j])] = 0;
      }
    }
  }
}

console.log(x.length);
console.log(y.length);

// to find out that city whose start index is 1 and end index with 2
for (i = 0; i < city.length; i++)
{
  console.log(city[i]);
  if ( x[i] == 1 )
  {
    if (y[i] == 2 )
    {
      return (city[i]);
    }
  }
}

} // end of function
