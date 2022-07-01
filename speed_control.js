/*
Description: 7 kyu

In John's car the GPS records every s seconds the distance travelled from an 
origin (distances are measured in an arbitrary but consistent unit). 
For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]


The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25

We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]

Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.
Example:

with the above data your function gps(s, x)should return 74
Note

With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

(3600 * delta_distance) / s.

*/

function gps(s, x) {    
    var deltaDistance = [];
    var speed = [];
    if (x.length > 1) {
        for (var i = 0; i < x.length; i++) {
            if (i > 0) {
                if ((x[i] < 0) || (x[i] >= 10)) {
                    return 0;
                }
                var currentDeltaDistance = x[i] - x[i-1];
                //Appending the difference to the distance array
                deltaDistance.push(currentDeltaDistance);

                //Appending the speed to the speed array
                //Converting unit/seconds into unit/hour by multiplying by 3600 seconds
                speed.push((currentDeltaDistance / s) * 3600);                           
            }
        }    
    }
    else
        return 0;
    //Calculating the floor of the max speed
    var maxSpeed = Math.floor(Math.max(...speed));
    console.log(maxSpeed);
    return maxSpeed;
}
