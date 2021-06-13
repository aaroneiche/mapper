import {latLongDistance} from '../scripts/utils';

describe("Test latLongDistance", () => {
 
  it("Should return 549m (rounds to the nearest meter)",()=>{
    const a = [38.898556, -77.037852];
    const b = [38.897147, -77.043934];   
    expect(latLongDistance(a,b)).toEqual(549);
  });


  it("Should return 778208m (rounds to the nearest meter)",()=>{
    const a = [30.898556, -75.032052];
    const b = [37.897147, -75.043934];   
    expect(latLongDistance(a,b)).toEqual(778209);
    
  });

  it("Should throw an error due to no inputs",()=>{
    expect(()=>{
      latLongDistance();
    }).toThrow('Missing Arguments');
  });

  it("Should throw an error due to invalid inputs",()=>{
    expect(()=>{
      latLongDistance(["bad","input"],["bad","input"]);
    }).toThrow();
  });
});