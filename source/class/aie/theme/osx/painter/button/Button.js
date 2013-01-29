/* ************************************************************************

   Appearance is Everything (AIE) - Advanced themes for the Qooxdoo Ajax framework

   http://www.sqville.com/aie/index.html
   
   Copyright (C) 2008 SQville, Chris Eskew

   License:
     * LGPL: http://www.gnu.org/licenses/lgpl.html
     * See the LICENSE file in the project's top-level directory for details.

   Author:
     * Chris Eskew
     * Email: chris.eskew@sqville.com

************************************************************************ */

/* ************************************************************************


************************************************************************ */

qx.Class.define("aie.theme.osx.painter.button.Button",
{
  extend : aie.theme.Painter,

  construct : function()
  {
    this.base(arguments);    
  },
 
   members :
  {
	/**
     * TODOC
     *
     * @type member
     */
    getDefaultButton: function(vS){
					
		var h_hlrt = [];
		var h_whlt = [];
		var h_lrtb = [];
		//var h_wrtb = [];
		//var h_hlrb = [];
		var h_whlb = [];
		var h_whrb = [];
		var h_whrt = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "default":
				//*** Left Top Corner
				h_whlt.push([1,1,1,0,0,0,0,.034],
		        [1,1,2,0,182,182,182,1],
		        [1,1,3,0,163,163,163,1],
		        [1,1,0,1,0,0,0,.034],
		        [1,1,1,1,160,160,160,1],
		        [1,1,2,1,206,206,206,1],
		        [1,1,3,1,243,243,243,1],
		        [1,1,0,2,180,180,180,1],
		        [1,1,1,2,210,210,210,1],
		        [1,1,0,3,158,158,158,1],
		        [1,1,1,3,246,246,246,1]);
			
				//** Left Bottom Corner
				h_whlb.push([1,1,0,4,158,158,158,1],
		        [1,1,1,4,231,231,231,1],
		        [1,1,0,3,175,175,175,1],
		        [1,1,1,3,202,202,202,1],
		        [1,1,0,2,0,0,0,.1],
		        [1,1,1,2,159,159,159,1],
		        [1,1,2,2,197,197,197,1],
		        [1,1,3,2,229,229,229,1],
		        [1,1,0,1,0,0,0,.03],
		        [1,1,1,1,0,0,0,.1],
		        [1,1,2,1,176,176,176,1],
		        [1,1,3,1,160,160,160,1],
		        [1,1,1,0,0,0,0,.03],
		        [1,1,2,0,0,0,0,.1]);
	  
		        
		        //*** Middle
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,4,4,0,154,154,154,1],
				[1,1,1,1,254,254,254,1],
				[1,1,1,2,253,253,253,1],
				[1,1,1,3,252,252,252,1],
				[1,1,1,4,251,251,251,1],
				[1,1,1,5,250,250,250,1],
				[1,1,1,6,248,248,248,1],
				[1,1,1,7,247,247,247,1],
				[1,1,1,8,246,246,246,1],
				[1,1,1,9,245,245,245,1],
				[1,1,1,10,244,244,244,1],
				[1,1,1,11,236,236,236,1],
				[1,1,1,12,236,236,236,1],
				[1,1,1,13,236,236,236,1],
				[1,1,1,14,236,236,236,1],
				[1,1,1,15,236,236,236,1],
				[1,1,1,16,236,236,236,1],
				[1,1,1,17,236,236,236,1],
				[1,1,1,18,237,237,237,1],
				[1,1,1,19,237,237,237,1],
				[1,4,4,20,154,154,154,1],
				[1,3,3,21,0,0,0,.09]);
				
				
				//*** Left Side  
		        h_whlt.push([1,13,0,4,154,154,154]);
				
				
				break;
				
			case "default-pressed":
				//*** Left Top Corner
				h_whlt.push([1,1,1,0,0,0,0,.034],
		        [1,1,2,0,139,141,195,1],
		        [1,1,3,0,104,107,181,1],
		        [1,1,0,1,0,0,0,.034],
		        [1,1,1,1,98,101,176,1],
		        [1,1,2,1,151,161,211,1],
		        [1,1,3,1,196,213,240,1],
		        [1,1,0,2,135,138,191,1],
		        [1,1,1,2,153,166,213,1],
		        [1,1,2,2,192,217,245,1],
		        [1,1,0,3,95,99,171,1],
		        [1,1,1,3,176,204,240,1]);
			
				//** Left Bottom Corner
				h_whlb.push([1,1,0,4,89,91,132,1],
		        [1,1,1,4,159,203,237,1],
		        [1,1,0,3,125,126,154,1],
		        [1,1,1,3,134,159,193,1],
		        [1,1,0,2,0,0,0,.1],
		        [1,1,1,2,90,92,128,1],
		        [1,1,2,2,132,154,185,1],
		        [1,1,3,2,171,208,232,1],
		        [1,1,0,1,0,0,0,.03],
		        [1,1,1,1,0,0,0,.1],
		        [1,1,2,1,125,127,152,1],
		        [1,1,3,1,92,95,129,1],
		        [1,1,1,0,0,0,0,.03],
		        [1,1,2,0,0,0,0,.1]);
	  
		        
		        //*** Middle
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,4,4,0,88,92,174,1],
				[1,1,1,1,209,227,248],
				[1,1,1,2,185,213,244],
				[1,1,1,3,181,210,244],
				[1,1,1,4,176,208,244],
				[1,1,1,5,171,205,243],
				[1,1,1,6,165,202,243],
				[1,1,1,7,160,199,242],
				[1,1,1,8,155,197,242],
				[1,1,1,9,150,194,241],
				[1,1,1,10,146,192,241],
				[1,1,1,11,117,179,241],
				[1,1,1,12,122,182,241],
				[1,1,1,13,128,187,242],
				[1,1,1,14,136,192,242],
				[1,1,1,15,145,198,243],
				[1,1,1,16,155,204,243],
				[1,1,1,17,164,210,244],
				[1,1,1,18,173,216,244],
				[1,1,1,19,181,221,244],
				[1,4,4,20,79,82,119,1],
				[1,3,3,21,0,0,0,.09]);
				
				
				//*** Left Side  
		        h_whlt.push([1,13,0,4,85,89,157]);
				
				break;
			
			case "default-disabled":
				h_hlrt.push([1,2,2,0,0,0,0,.1],
					[1,2,2,21,0,0,0,.1]);
					
				h_lrtb.push([0,0,2,2,0,0,0,.1]);
			
			break;
		}
		
		
		var fh = [];
		fh_str = fh.concat(
			h_hlrt.map(this._hlrt_op),
			h_whlt.map(this._whlt_op),
			h_whlb.map(this._whlb_op),
			h_whlb.map(this._whrb_op),
			h_whlt.map(this._whrt_op)
		).join("");
		//fh_str = h_whlt.map(this._whlt).join("");
		
		return fh_str;
	}
    
  }

});
