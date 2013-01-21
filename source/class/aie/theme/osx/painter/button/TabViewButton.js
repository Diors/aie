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

qx.Class.define("aie.theme.osx.painter.button.TabViewButton",
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
		
		var h_whlt_op = [];
		var h_hlrt = [];
		var h_hlrb_op = [];
		var h_whlt = [];
		var h_wltb_op = [];
		var h_wrtb = [];
		var h_whrt = [];
		var h_whlb_op = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "default-first":
				//*** Top bar
				h_hlrt.push([1,4,1,0,158,158,158]);
				
				//*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,2,1,1,255,255,255],
					[1,1,1,2,254,254,254],
					[1,1,1,3,253,253,253],
					[1,1,1,4,252,252,252],
					[1,1,1,5,251,251,251],
					[1,1,1,6,250,250,250],
					[1,1,1,7,248,248,248],
					[1,1,1,8,247,247,247],
					[1,1,1,9,246,246,246],
					[1,1,1,10,245,245,245],
					[4,1,1,11,236,236,236],
					[2,1,1,16,237,237,237],
					[2,1,1,18,238,238,238],
					[1,2,1,20,238,238,238]);
				
				//*** Left Top Corner
				h_whlt_op.push([1,1,2,0,0,0,0,.04],
					[1,1,3,0,185,185,185,1],
					[1,1,4,0,166,166,166,1],
					[1,1,1,1,0,0,0,.04],
					[1,1,2,1,168,168,168,1],
					[1,1,3,1,0,0,0,.034],
					[1,1,4,1,0,0,0,.01],
					[1,1,0,2,0,0,0,.04],
					[1,1,2,2,173,173,173,1],
					[1,1,3,2,0,0,0,.01],
					[1,1,0,3,182,182,182,1],
					[1,1,1,3,0,0,0,.034],
					[1,1,1,4,0,0,0,.008]);
				
				//*** Left side
				h_wltb_op.push([1,0,4,5,0,0,0,.3],
					[1,1,5,5,0,0,0,.005]);
		        
				//*** Right side
				h_wrtb.push([1,0,0,0,158,158,158]);
				
				//*** Left Bottom Corner
				h_whlb_op.push([1,1,0,4,167,167,167,1],
					[1,1,1,4,0,0,0,.034],
					[1,1,0,3,0,0,0,.034],
					[1,1,1,3,161,161,161,1],
					[1,1,0,2,0,0,0,.009],
					[1,1,1,2,173,173,173,1],
					[1,1,2,2,152,152,152,1],
					[1,1,3,2,0,0,0,.034],
					[1,1,4,2,0,0,0,.009],
					[1,1,0,3,182,182,182,1],
					[1,1,1,1,0,0,0,.009],
					[1,1,2,1,0,0,0,.034],
					[1,1,3,1,156,156,156,1],
					[1,1,2,0,0,0,0,.005],
					[1,1,3,0,0,0,0,.009]);
					
				//*** Bottom
				h_hlrb_op.push([1,4,1,0,0,0,0,.01]);
				
				break;
			
			case "default-hovered":
				//*** Top two bars
				h_hlrt.push([1,0,0,0,60,127,177],
					[1,1,1,1,250,253,254]);
				
				//*** Left side
				h_wltb.push([1,0,0,0,60,127,177]);
				
				//*** Left side white gradient
				h_whlt.push([1,2,1,2,250,253,254],
					[1,3,1,4,247,252,254],
					[1,3,1,7,245,251,254],
					[1,3,1,10,239,249,254],
					[1,4,1,13,236,247,253],
					[1,2,1,17,233,246,253]);
		        
		        //*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,2,2,2,234,246,253],
					[1,2,2,3,232,246,253],
					[1,2,2,4,230,245,253],
					[1,2,2,5,228,244,252],
					[1,2,2,6,225,243,252],
					[1,2,2,7,222,242,252],
					[1,2,2,8,220,241,252],
					[1,2,2,9,217,240,252],
					[1,2,2,10,190,230,253],
					[1,2,2,11,188,229,252],
					[1,2,2,12,185,227,251],
					[1,2,2,13,181,226,250],
					[1,2,2,14,178,224,249],
					[1,2,2,15,175,222,248],
					[1,2,2,16,172,220,247],
					[1,2,2,17,169,219,246],
					[1,2,2,18,167,217,245]);
					
				//*** Right side
				h_wrtb.push([1,0,0,0,60,127,177]);
				
				//*** Right Side white gradient bar  
		        h_whrt.push([1,2,1,2,250,253,254],
					[1,3,1,4,247,252,254],
					[1,3,1,7,245,251,254],
					[1,3,1,10,239,249,254],
					[1,4,1,13,236,247,253],
					[1,2,1,17,233,246,253]);
					
				break;
				
			case "defaultbtm":
				//*** Bottom two bars
				h_hlrt.push([1,0,0,18,137,140,149],
					[1,1,1,17,252,252,252]);
				
				//*** Left side
				h_wltb.push([1,0,0,0,137,140,149]);
				
				//*** Left side white gradient
				h_whlt.push([1,2,1,0,252,252,252],
					[1,3,1,2,251,251,251],
					[1,3,1,5,250,250,250],
					[1,3,1,8,246,246,246],
					[1,4,1,11,244,244,244],
					[1,2,1,15,243,243,243]);
		        
		        //*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push([2,2,2,0,242,242,242],
					[1,2,2,2,241,241,241],
					[1,2,2,3,240,240,240],
					[1,2,2,4,239,239,239],
					[1,2,2,5,237,237,237],
					[1,2,2,6,236,236,236],
					[1,2,2,7,235,235,235],
					[1,2,2,8,221,221,221],
					[1,2,2,9,219,219,219],
					[1,2,2,10,218,218,218],
					[1,2,2,11,216,216,216],
					[1,2,2,12,214,214,214],
					[1,2,2,13,212,212,212],
					[1,2,2,14,210,210,210],
					[1,2,2,15,209,209,209],
					[1,2,2,16,207,207,207]);
					
				//*** Right side
				h_wrtb.push([1,0,0,0,137,140,149]);
				
				//*** Right Side white gradient bar  
		        h_whrt.push([1,2,1,0,252,252,252],
					[1,3,1,2,251,251,251],
					[1,3,1,5,250,250,250],
					[1,3,1,8,246,246,246],
					[1,4,1,11,244,244,244],
					[1,2,1,15,243,243,243]);
				
				break;
				
			case "default-hoveredbtm":
				//*** Bottom two bars
				h_hlrt.push([1,0,0,18,60,127,177],
					[1,1,1,17,250,253,254]);
				
				//*** Left side
				h_wltb.push([1,0,0,0,60,127,177]);
				
				//*** Left side white gradient
				h_whlt.push([1,2,1,0,250,253,254],
					[1,3,1,2,247,252,254],
					[1,3,1,5,245,251,254],
					[1,3,1,8,239,249,254],
					[1,4,1,11,236,247,253],
					[1,2,1,15,233,246,253]);
		        
		        //*** Middle gradient
				//hight,left,right,top,r,g,b			
				h_hlrt.push([1,2,2,0,234,246,253],
					[1,2,2,2,232,246,253],
					[1,2,2,3,230,245,253],
					[1,2,2,4,228,244,252],
					[1,2,2,5,225,243,252],
					[1,2,2,6,222,242,252],
					[1,2,2,7,220,241,252],
					[1,2,2,8,217,240,252],
					[1,2,2,9,190,230,253],
					[1,2,2,10,188,229,252],
					[1,2,2,11,185,227,251],
					[1,2,2,12,181,226,250],
					[1,2,2,13,178,224,249],
					[1,2,2,14,175,222,248],
					[1,2,2,15,172,220,247],
					[1,2,2,16,169,219,246]);
					
				//*** Right side
				h_wrtb.push([1,0,0,0,60,127,177]);
				
				//*** Right Side white gradient bar  
		        h_whrt.push([1,2,1,0,250,253,254],
					[1,3,1,2,247,252,254],
					[1,3,1,5,245,251,254],
					[1,3,1,8,239,249,254],
					[1,4,1,11,236,247,253],
					[1,2,1,15,233,246,253]);
					
				break;
		
		}
		
		
		var fh = [];
		fh_str = fh.concat(
			h_hlrt.map(this._hlrt),
			h_whlt_op.map(this._whlt_op),
			h_wltb_op.map(this._wltb_op),
			h_wrtb.map(this._wrtb),
			h_whrt.map(this._whrt),
			h_whlb_op.map(this._whlb_op),
			h_hlrb_op.map(this._hlrb_op)
		).join("");
		//fh_str = h_whlt.map(this._whlt).join("");
		
		return fh_str;
	}
    
  }

});