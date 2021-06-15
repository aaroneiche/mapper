/* 
latLongDistance - Takes two lat/long values and returns distance in whole meters
Usage: 
let distance = latLongDistance([39.8528, -75.1638],[39.8528, -75.2638]);

Arguments: 
latlong1 - An array consisting of 2 numerical values. Latitude, then longitude.
latlong2 - An array consisting of 2 numerical values. Latitude, then longitude. 

Note: Formula is based off of that found at https://www.movable-type.co.uk/scripts/latlong.html
*/

const latLongDistance = (latlong1, latlong2) => {
    if( latlong1 == undefined || 
        latlong2 == undefined || 
        latlong1.length !== 2 || 
        latlong2.length !== 2 ||
        Array.isArray(latlong1) == false ||
        Array.isArray(latlong2) == false        
    ) {
        
        throw new Error(`latLongDistance call is Missing Arguments`);
    }

    if( isNaN(Number(latlong1[0])) ||
        isNaN(Number(latlong1[1])) ||
        isNaN(Number(latlong2[0])) ||
        isNaN(Number(latlong2[1]))        
    ) {
        throw new Error('latLongDistance call has Invalid arguments');
    }

    //Actual calculation:
    const radian1 = latlong1[0] * Math.PI/180;
    const radian2 = latlong2[0] * Math.PI/180;
    
    const latDelta = (latlong1[0] - latlong2[0]) * Math.PI/180;
    const longDelta = (latlong1[1] - latlong2[1]) * Math.PI/180;

    const a = Math.sin(latDelta/2) * Math.sin(latDelta/2) + // Square the Sine
              Math.cos(radian1) * Math.cos(radian2) * 
              Math.sin(longDelta/2) * Math.sin(longDelta/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Math.round(6371e3 * c); //The distance in meters.
}

/* 
metersToMiles - Takes meters returns distance in miles.
Usage: 
let miles = metersToMiles(1000);

Arguments: 
meters - A number of SI meters.

*/
const metersToMiles = (meters) => {

    if(meters == undefined) {
        throw new Error("Please provide a value to convert");
    }

    if(isNaN(Number(meters))) {
        throw new Error("Input must be numeric");
    }


    //Convert meters to feet:
    let feet = meters * 3.281;
    const miles = feet/5280;

    return miles;
}

export {latLongDistance, metersToMiles};


/* 
bearing - Takes two lat/long values and returns bearing.
Usage: 
let bearing = bearing([39.8528, -75.1638],[39.8528, -75.2638]);

Arguments: 
latlong1 - An array consisting of 2 numerical values. Latitude, then longitude.
latlong2 - An array consisting of 2 numerical values. Latitude, then longitude. 

Note: Based off code found at: https://www.movable-type.co.uk/scripts/latlong.html
*/
const bearing = (latlong1, latlong2) => {

    const y = Math.sin(latlong2[0]-latlong1[0]) * Math.cos(latlong2[1]);

    const x = Math.cos(latlong1[1]) * Math.sin(latlong2[1]) -
              Math.sin(latlong1[1]) * Math.cos(latlong2[1]) * Math.cos(latlong2[0]-latlong1[0]);

    const radAngle = Math.atan2(y, x);
    return (radAngle * 180/Math.PI + 360) % 360;
}

export {latLongDistance, bearing}