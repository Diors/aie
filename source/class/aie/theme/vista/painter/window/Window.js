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

qx.Class.define("aie.theme.vista.painter.window.Window",
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
    getWindowCaption : function(vS)
    {
  	    var h_whlt = [];
		var h_whlb = [];
		var h_whrt = [];
		var h_whrb = [];
		var h_hlrt = [];
		var h_lrtb = [];
		var h_wltb = [];
		var h_wrtb = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "active-window-blue":
				//*** Left Side
	            h_whlt.push([3,1,2,0,38,39,45],
				[1,1,1,1,55,56,63],
				[1,1,2,1,140,142,148],
				[1,1,3,1,185,187,191],
				[1,1,4,1,204,205,208],
				[1,1,1,2,121,122,129],
				[1,1,2,2,162,163,169],
				[2,1,3,2,165,167,173],
				[1,1,1,3,147,149,155],
				[3,1,2,3,153,154,161],[4,1,1,4,148,150,157],[4,1,1,5,143,145,152],
				[4,1,1,6,137,139,147],[4,1,1,7,132,134,143],[4,1,1,8,127,129,138],
				[4,1,1,9,122,124,133],[4,1,1,10,116,119,128],[1,1,1,11,109,112,122],
				[3,1,2,11,111,114,123],[1,1,1,12,99,101,112],[3,1,2,12,107,109,119],
				[1,1,1,13,85,88,99],[3,1,2,13,101,104,114],[1,1,1,14,77,80,92],
				[1,1,2,14,91,94,105],[2,1,3,14,99,101,112],[2,1,1,15,77,80,92],
				[1,1,3,15,86,88,100],[1,1,4,15,94,97,107],[4,4,1,16,77,80,92],
				[4,1,1,20,79,82,93],[1,1,1,21,83,86,98],[3,1,2,21,84,87,99],
				[1,1,1,22,86,89,100],[3,1,2,22,90,93,104],[1,1,1,23,83,86,97],
				[3,1,2,23,95,98,109],[1,1,1,24,77,80,92],[1,1,2,24,93,95,106],
				[2,1,3,24,101,104,114],[2,1,1,25,77,80,92],[1,1,3,25,88,91,102],
				[1,1,4,25,100,103,113],[1,1,1,26,77,80,92],[3,1,2,26,73,75,87]);
				
				h_wltb.push([1,0,2,0,38,39,45]);
				
				//*** Middle
				var p = 5;
				var r = 5;
				h_hlrt.push([1,p,r,0,38,39,45],[1,p,r,1,215,216,219],[1,p,r,2,165,167,173],
				[1,p,r,3,153,154,161],[1,p,r,4,148,150,157],[1,p,r,5,143,145,152],
				[1,p,r,6,137,139,147],[1,p,r,7,132,134,143],[1,p,r,8,127,129,138],
				[1,p,r,9,122,124,133],[1,p,r,10,116,119,128],[1,p,r,11,111,114,123],
				[1,p,r,12,107,109,119],[1,p,r,13,101,104,114],[1,p,r,14,99,101,112],
				[1,p,r,15,99,101,112],[4,p,r,16,77,80,92],[1,p,r,20,79,82,93],
				[1,p,r,21,84,87,99],[1,p,r,22,90,93,104],[1,p,r,23,95,98,109],
				[1,p,r,24,101,104,114],[1,p,r,25,107,109,119],[1,p,r,26,73,75,87]);
				
				//** Rt Top Corner
	            h_whrt.push([3,1,2,0,38,39,45],[1,1,4,1,204,205,208],[1,1,3,1,185,187,191],
				[1,1,2,1,140,142,148],[1,1,1,1,55,56,63],[2,1,3,2,165,167,173],
				[1,1,2,2,162,163,169],[1,1,1,2,121,122,129],[3,1,2,3,153,154,161],
				[1,1,1,3,147,149,155],[4,1,2,4,148,150,157],[4,1,2,5,143,145,152],
				[4,1,2,6,137,139,147],[4,1,2,7,132,134,143],[4,1,2,8,127,129,138],
				[4,1,2,9,122,124,133],[4,1,2,10,116,119,128],[3,1,2,11,111,114,123],
				[1,1,1,11,109,112,122],[3,1,3,12,107,109,119],[1,1,1,12,99,101,112],
				[3,1,3,13,101,104,114],[1,1,1,13,85,88,99],[2,1,3,14,99,101,112],
				[1,1,2,14,91,94,105],[1,1,1,14,77,80,92],[1,1,3,15,94,97,107],
				[1,1,3,15,86,88,100],[2,1,2,15,77,80,92],[4,4,3,16,77,80,92],
				[4,1,3,20,79,82,93],[3,1,3,21,84,87,99],[1,1,1,21,83,86,98],
				[3,1,3,22,90,93,104],[1,1,1,22,86,89,100],[3,1,3,23,95,98,109],
				[1,1,1,23,83,86,97],[2,1,3,24,101,104,114],[1,1,2,24,93,95,106],
				[1,1,1,24,77,80,92],[1,1,3,25,100,103,113],[1,1,3,25,88,91,102],
				[2,1,2,25,77,80,92],[3,1,3,26,73,75,87],[1,1,1,26,77,80,92]);
			   
				h_wrtb.push([1,0,2,0,38,39,45]);
			
				//*** Body
				h_lrtb.push([2,2,27,2,234,234,234]);
			
				break;
			
			case "inactive-window-gray":
			
				//*** Left Side
	            h_whlt.push([3,1,2,0,111,111,111],[1,1,1,1,134,134,134],[1,1,2,1,219,219,219],
				[1,1,3,1,242,242,242],[1,1,4,1,246,246,246],[1,1,1,2,205,205,205],
				[1,1,2,2,238,238,238],[2,1,3,2,239,239,239],[1,1,1,3,232,232,232],
				[3,1,2,3,237,237,237],[4,1,1,4,236,236,236],[4,1,1,5,235,235,235],
				[4,1,1,6,234,234,234],[4,1,1,7,233,233,233],[4,1,1,8,232,232,232],
				[4,1,1,9,231,231,231],[4,1,1,10,230,230,230],[1,1,1,11,229,229,229],
				[3,1,2,11,230,230,230],[1,1,1,12,227,227,227],[3,1,2,12,229,229,229],
				[1,1,1,13,225,225,225],[3,1,2,13,228,228,228],[1,1,1,14,224,224,224],
				[1,1,2,14,226,226,226],[2,1,3,14,227,227,227],[2,1,1,15,224,224,224],
				[1,1,3,15,225,225,225],[1,1,4,15,227,227,227],[4,2,1,16,224,224,224],
				[4,2,1,21,225,225,225],[3,1,2,22,226,226,226],[1,1,1,23,225,225,225],
				[3,1,2,23,227,227,227],[1,1,1,24,224,224,224],[1,1,2,24,226,226,226],
				[2,1,3,24,228,228,228],[2,1,1,25,224,224,224],[1,1,3,25,226,226,226],
				[1,1,4,25,228,228,228],[1,1,1,26,224,224,224],[3,1,2,26,212,212,212]);
				
				h_wltb.push([1,0,2,0,111,111,111]);
     
	            //** Rt Top Corner
	            h_whrt.push([3,1,4,0,38,39,45],[1,1,4,1,204,205,208],[1,1,3,1,185,187,191],
				[1,1,2,1,140,142,148],[1,1,1,1,55,56,63],[2,1,4,2,165,167,173],
				[1,1,2,2,162,163,169],[1,1,1,2,121,122,129],[3,1,4,3,153,154,161],
				[1,1,1,3,147,149,155],[4,1,4,4,148,150,157],[4,1,4,5,143,145,152],
				[4,1,4,6,137,139,147],[4,1,4,7,132,134,143],[4,1,4,8,127,129,138],
				[4,1,4,9,122,124,133],[4,1,4,10,116,119,128],[3,1,4,11,111,114,123],
				[1,1,1,11,109,112,122],[3,1,4,12,107,109,119],[1,1,1,12,99,101,112],
				[3,1,4,13,101,104,114],[1,1,1,13,85,88,99],[2,1,4,14,99,101,112],
				[1,1,2,14,91,94,105],[1,1,1,14,77,80,92],[1,1,4,15,94,97,107],
				[1,1,3,15,86,88,100],[2,1,2,15,77,80,92],[4,4,4,16,77,80,92],
				[4,1,4,20,79,82,93],[3,1,4,21,84,87,99],[1,1,1,21,83,86,98],
				[3,1,4,22,90,93,104],[1,1,1,22,86,89,100],[3,1,4,23,95,98,109],
				[1,1,1,23,83,86,97],[2,1,4,24,101,104,114],[1,1,2,24,93,95,106],
				[1,1,1,24,77,80,92],[1,1,4,25,100,103,113],[1,1,3,25,88,91,102],
				[2,1,2,25,77,80,92],[3,1,4,26,73,75,87],[1,1,1,26,77,80,92]);
	                  
				h_wrtb.push([1,0,2,0,38,39,45]);
			
				//*** Middle
				var p = 5;
				h_hlrt.push([1,p,p,0,111,111,111],[1,p,p,1,248,248,248],[1,p,p,2,239,239,239],
				[1,p,p,3,237,237,237],[1,p,p,4,236,236,236],[1,p,p,5,235,235,235],
				[1,p,p,6,234,234,234],[1,p,p,7,233,233,233],[1,p,p,8,232,232,232],
				[1,p,p,9,231,231,231],[2,p,p,10,230,230,230],[1,p,p,12,229,229,229],
				[1,p,p,13,228,228,228],[2,p,p,14,227,227,227],[5,p,p,16,224,224,224],
				[1,p,p,21,225,225,225],[1,p,p,22,226,226,226],[1,p,p,23,227,227,227],
				[1,p,p,24,228,228,228],[1,p,p,25,229,229,229],[1,p,p,26,212,212,212]);
				
				//*** Body
				h_lrtb.push([2,2,27,2,234,234,234]);
			
				break;		
		}
    
		var fh_at = h_whlt.map(this._whlt);
	    var fh_at2 = h_wltb.map(this._wltb);
		var fh_at4 = h_wrtb.map(this._wrtb);
		var fh_ab = h_whlb.map(this._whlb);
	    var fh_bt = h_whrt.map(this._whrt);
		var fh_bb = h_whrb.map(this._whrb);	
	    var fh_m = h_hlrt.map(this._hlrt);	
		var fh_bod = h_lrtb.map(this._lrtb);
		
		var fh = fh_at.concat(fh_at2,fh_at4,fh_ab,fh_bt,fh_bb,fh_m,fh_bod);	
		
		fh_str = fh.join("");
		
		return fh_str;
    },
	
	/**
     * TODOC
     *
     * @type member
     */
    getWindowCaptionBlue : function(vS)
    {
  	    var h_whlt = [];
		var h_whrt = [];
		var h_hlrt = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "active-window-blue":
				//*** Top Left Corner
            	h_whlt.push([1,1,3,0,33,90,163],
				[1,1,2,1,3,90,163],
				[1,1,3,1,53,114,190],
				[1,1,1,2,33,90,163],
				[1,1,2,2,80,129,190],
				[1,1,3,2,190,218,245],
				[1,1,0,3,33,90,163],
				[1,1,1,3,53,114,190],
				[2,1,2,3,180,213,245]);
				
				//*** Top
				//* Covered by Middle and Top Corners
				
				//** Top Right Corner
	            h_whrt.push([1,1,3,0,33,90,163],
				[1,1,3,1,53,114,190],
				[1,1,2,1,0,52,137],
				[1,1,3,2,190,218,245],
				[1,1,2,2,80,129,190],
				[1,1,1,2,0,62,147],
				[2,1,2,3,180,213,245],
				[1,1,1,3,53,114,190],
				[1,1,0,3,33,90,163]);
				
				//*** Left Side
	            h_whlt.push([1,24,0,4,33,90,163],
				[3,1,1,4,171,209,245],
				[3,1,1,5,161,203,245],
				[3,1,1,6,151,199,245],
				[3,1,1,7,127,172,231],
				[3,1,1,8,129,175,231],
				[3,1,1,9,133,176,233],
				[3,1,1,10,136,179,234],
				[3,1,1,11,139,181,236],
				[3,1,1,12,143,184,237],
				[3,1,1,13,145,186,239],
				[3,1,1,14,147,188,241],
				[3,1,1,15,150,191,242],
				[3,1,1,16,154,193,242],
				[3,1,1,17,157,196,243],
				[3,1,1,18,161,197,245],
				[3,1,1,19,163,199,245],
				[3,1,1,20,166,202,245],
				[3,1,1,21,169,204,245],
				[3,1,1,22,172,207,245],
				[3,1,1,23,175,208,245],
				[3,1,1,24,178,211,245],
				[4,1,0,25,33,90,163]);
				
				//*** Middle
				var lft = 4;
				var rht = 4;
				h_hlrt.push([1,lft,rht,0,33,90,163],
				[1,lft,rht,1,199,223,245],
				[1,lft,rht,2,190,218,245],
				[1,lft,rht,3,180,213,245],
				[1,lft,rht,4,171,209,245],
				[1,lft,rht,5,161,203,245],
				[1,lft,rht,6,151,199,245],
				[1,lft,rht,7,127,172,231],
				[1,lft,rht,8,129,175,231],
				[1,lft,rht,9,133,176,233],
				[1,lft,rht,10,136,179,234],
				[1,lft,rht,11,139,181,236],
				[1,lft,rht,12,143,184,237],
				[1,lft,rht,13,145,186,239],
				[1,lft,rht,14,147,188,241],
				[1,lft,rht,15,150,191,242],
				[1,lft,rht,16,154,193,242],
				[1,lft,rht,17,157,196,243],
				[1,lft,rht,18,161,197,245],
				[1,lft,rht,19,163,199,245],
				[1,lft,rht,20,166,202,245],
				[1,lft,rht,21,169,204,245],
				[1,lft,rht,22,172,207,245],
				[1,lft,rht,23,175,208,245],
				[1,lft,rht,24,178,211,245],
				[1,lft,rht,25,33,90,163]);
				
				//** Right Side
				h_whrt.push([3,1,1,4,171,209,245],
				[1,25,0,4,33,90,163],
				[3,1,1,5,161,203,245],
				[3,1,1,6,151,199,245],
				[3,1,1,7,127,172,231],
				[3,1,1,8,129,175,231],
				[3,1,1,9,133,176,233],
				[3,1,1,10,136,179,234],
				[3,1,1,11,139,181,236],
				[3,1,1,12,143,184,237],
				[3,1,1,13,145,186,239],
				[3,1,1,14,147,188,241],
				[3,1,1,15,150,191,242],
				[3,1,1,16,154,193,242],
				[3,1,1,17,157,196,243],
				[3,1,1,18,161,197,245],
				[3,1,1,19,163,199,245],
				[3,1,1,20,166,202,245],
				[3,1,1,21,169,204,245],
				[3,1,1,22,172,207,245],
				[3,1,1,23,175,208,245],
				[3,1,1,24,178,211,245],
				[4,1,0,25,33,90,163]);
			   
			
				break;
			
			case "inactive-window-gray":
			
				//*** Top Left Corner
            	h_whlt.push([2,1,3,0,151,165,183],
				[1,1,2,1,151,165,183],
				[1,1,3,1,161,176,195],
				[1,1,4,1,209,214,221],
				[1,1,1,2,151,165,183],
				[1,1,2,2,172,184,199],
				[2,1,3,2,226,230,236],
				[1,1,0,3,151,165,183],
				[1,1,1,3,161,176,195],
				[3,1,2,3,225,230,236],
				[1,1,0,4,151,165,183],
				[1,1,1,4,209,214,221],
				[3,1,2,4,224,229,236],
				[1,21,0,5,151,165,183]);
				
				//*** Top
				var lft = 5;
				var rht = 5;
				h_hlrt.push([1,lft,rht,0,151,165,183],
				[1,lft,rht,1,226,230,236],
				[1,lft,rht,2,226,230,236],
				[1,lft,rht,3,226,230,236],
				[1,lft,rht,4,224,229,236]);
				
				//** Top Right Corner
	            h_whrt.push([2,1,3,0,151,165,183],
				[1,1,4,1,209,214,221],
				[1,1,3,1,161,176,195],
				[1,1,2,1,151,165,183],
				[2,1,3,2,226,230,236],
				[1,1,2,2,172,184,199],
				[1,1,1,2,151,165,183],
				[3,1,2,3,225,230,236],
				[1,1,1,3,161,176,195],
				[1,1,0,3,151,165,183],
				[3,1,2,4,224,229,236],
				[1,1,1,4,209,214,221],
				[1,1,0,4,151,165,183],
				[1,21,0,5,151,165,183]);
				
				//*** Left Side
	            //h_whlt.push();
				
				//*** Middle
				lft = 1;
				rht = 1;
				h_hlrt.push([1,lft,rht,5,223,229,236],
				[1,lft,rht,6,221,228,237],
				[1,lft,rht,7,216,225,236],
				[1,lft,rht,8,216,225,236],
				[1,lft,rht,9,216,225,236],
				[1,lft,rht,10,218,226,236],
				[1,lft,rht,11,218,226,236],
				[1,lft,rht,12,218,226,236],
				[1,lft,rht,13,219,227,237],
				[1,lft,rht,14,220,227,237],
				[1,lft,rht,15,221,228,237],
				[1,lft,rht,16,221,228,237],
				[1,lft,rht,17,221,228,237],
				[1,lft,rht,18,221,228,237],
				[1,lft,rht,19,223,229,238],
				[1,lft,rht,20,225,230,238],
				[1,lft,rht,21,225,230,238],
				[1,lft,rht,22,225,230,238],
				[1,lft,rht,23,225,230,238],
				[1,lft,rht,24,204,218,236],
				[1,lft,rht,25,224,230,236]);
				
				//** Right Side
				//h_whrt.push();
				
				break;	
		}
    
		var fh_at = h_whlt.map(this._whlt);
	    var fh_at2 = h_whrt.map(this._whrt);	
	    var fh_m = h_hlrt.map(this._hlrt);	
		
		var fh = fh_at.concat(fh_at2,fh_m);	
		
		fh_str = fh.join("");
		
		return fh_str;
    },
	
	/**
     * TODOC
     *
     * @type member
     */
    getWindowStatusBarBlue: function(vS){
		
		var h_hlrt = [];
		var h_whlt = [];
		var h_whrt = [];
		var h_whlb = [];
		var h_whrb = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "active-window-statusbar-blue":
				//*** Top
				var lft = 1;
				var rht = 1;
				h_hlrt.push([1,lft,rht,0,255,255,255],[1,lft,rht,1,218,231,247],[1,lft,rht,2,215,228,245],
				[1,lft,rht,3,212,226,243],[1,lft,rht,4,208,223,242],[1,lft,rht,5,205,221,240],
				[1,lft,rht,6,202,218,238],[1,lft,rht,7,199,216,236],[1,lft,rht,8,196,213,235],
				[1,lft,rht,9,193,211,233],[1,lft,rht,10,190,208,231],[1,lft,rht,11,187,206,230],
				[1,lft,rht,12,184,203,228],[1,lft,rht,13,181,201,226],[1,lft,rht,14,178,198,225]);
				
				//*** Middle
				lft = 4;
				rht = 4;
				h_hlrt.push([1,lft,rht,15,175,196,223],[1,lft,rht,16,172,193,221],
				[1,lft,rht,17,169,191,220],[1,lft,rht,18,59,90,130]);
				
				//*** Left Side
	            h_whlt.push([1,16,0,0,59,90,130]);
				
				//*** Right Side
	            h_whrt.push([1,16,0,0,59,90,130]);
				
				//*** Bottom Left
				h_whlb.push([1,1,0,3,59,90,130],[1,1,1,3,187,189,192],[2,1,2,3,175,196,223],
				[1,1,1,2,24,58,105],[2,1,2,2,172,193,221],[1,1,2,1,24,58,105],
				[1,1,3,1,198,200,202],[1,1,3,0,59,90,130]);
				
				//*** Bottom Right
				h_whrb.push([2,1,2,3,175,196,223],[1,1,1,3,180,182,185],[1,1,0,3,59,90,130],
				[2,1,2,2,172,193,221],[1,1,1,2,55,78,109],[1,1,3,1,189,191,193],
				[1,1,2,1,24,58,105],[1,1,3,0,59,90,130]);
				
				break;
				
			case "inactive-window-statusbar-blue":
			
				//*** Top
				var lft = 1;
				var rht = 1;
				h_hlrt.push([1,lft,rht,0,255,255,255],[1,lft,rht,1,218,231,247],[1,lft,rht,2,215,228,245],
				[1,lft,rht,3,212,226,243],[1,lft,rht,4,208,223,242],[1,lft,rht,5,205,221,240],
				[1,lft,rht,6,202,218,238],[1,lft,rht,7,199,216,236],[1,lft,rht,8,196,213,235],
				[1,lft,rht,9,193,211,233],[1,lft,rht,10,190,208,231],[1,lft,rht,11,187,206,230],
				[1,lft,rht,12,184,203,228],[1,lft,rht,13,181,201,226],[1,lft,rht,14,178,198,225]);
				
				//*** Middle
				lft = 4;
				rht = 4;
				h_hlrt.push([1,lft,rht,15,175,196,223],[1,lft,rht,16,172,193,221],
				[1,lft,rht,17,169,191,220],[1,lft,rht,18,192,198,206]);
				
				//*** Left Side
	            h_whlt.push([1,16,0,0,192,198,206]);
				
				//*** Right Side
	            h_whrt.push([1,16,0,0,192,198,206]);
				
				//*** Bottom Left
				h_whlb.push([1,1,0,3,192,198,206],[1,1,1,3,187,189,192],[2,1,2,3,175,196,223],
				[1,1,1,2,151,165,183],[2,1,2,2,172,193,221],[1,1,2,1,151,165,183],
				[1,1,3,1,198,200,202],[1,1,3,0,192,198,206]);
				
				//*** Bottom Right
				h_whrb.push([2,1,2,3,175,196,223],[1,1,1,3,180,182,185],[1,1,0,3,192,198,206],
				[2,1,2,2,172,193,221],[1,1,1,2,151,165,183],[1,1,3,1,189,191,193],
				[1,1,2,1,151,165,183],[1,1,3,0,192,198,206]);
			
				break;
		}
		
		var fh_at = h_whlt.map(this._whlt);
	    var fh_at2 = h_whrt.map(this._whrt);	
	    var fh_m = h_hlrt.map(this._hlrt);	
		var fh_at3 = h_whlb.map(this._whlb);
		var fh_at4 = h_whrb.map(this._whrb);
		
		var fh = fh_at.concat(fh_at2,fh_at3,fh_at4,fh_m);	
		//var fh = fh_m;
		
		fh_str = fh.join("");
		
		return fh_str;
	}
    
  }

});
