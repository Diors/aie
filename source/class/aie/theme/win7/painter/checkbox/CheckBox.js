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

qx.Class.define("aie.theme.win7.painter.checkbox.CheckBox",
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
    getDefaultCheckBox: function(vS){
		
		//var h_hlrt = [];
		var h_whlt = [];
		//var h_wltb = [];
		//var h_wrtb = [];
		//var h_hlrb = [];
		//var h_whlb = [];
		//var h_whrb = [];
		//var h_whrt = [];
		
		var fh_str = "";
		
		switch (vS) {
			case "default":
				h_whlt.push([13,1,0,0,142,143,143],
				[1,11,0,1,142,143,143],
				[11,1,1,1,244,244,244],
				[1,11,12,1,142,143,143],
				[1,9,1,2,244,244,244],
				[6,1,2,2,174,179,185],
				[1,1,8,2,175,180,186],
				[1,1,9,2,180,185,189],
				[1,1,10,2,187,190,193],
				[1,9,11,2,244,244,244],
				[1,1,2,3,174,179,185],
				[4,1,3,3,203,207,213],
				[1,1,7,3,208,211,216],
				[1,1,8,3,213,216,220],
				[1,1,9,3,219,221,223],
				[1,1,10,3,193,195,197],
				[1,1,2,4,174,179,185],
				[2,1,3,4,203,207,213],
				[1,1,5,4,205,209,214],
				[1,1,6,4,210,213,218],
				[1,1,7,4,216,219,222],
				[1,1,8,4,221,223,225],
				[1,1,9,4,226,227,228],
				[1,1,10,4,198,199,200],
				[1,1,2,5,174,179,185],
				[1,1,3,5,205,209,215],
				[1,1,4,5,208,212,217],
				[1,1,5,5,212,215,219],
				[1,1,6,5,219,221,223],
				[1,1,7,5,225,226,227],
				[1,1,8,5,229,230,230],
				[1,1,9,5,232,232,232],
				[1,1,10,5,204,205,205],
				[1,1,2,6,178,183,188],
				[1,1,3,6,213,216,220],
				[1,1,4,6,218,220,223],
				[1,1,5,6,224,225,227],
				[1,1,6,6,232,232,232],
				[1,1,7,6,236,236,236],
				[2,1,8,6,237,237,237],
				[1,1,10,6,212,213,214],
				[1,1,2,7,184,187,191],
				[1,1,3,7,221,223,225],
				[1,1,4,7,228,229,229],
				[1,1,5,7,234,234,234],
				[1,1,6,7,239,239,239],
				[3,1,7,7,242,242,242],
				[1,1,10,7,220,221,222],
				[1,1,2,8,188,191,194],
				[1,1,3,8,227,228,229],
				[1,1,4,8,233,233,233],
				[1,1,5,8,237,237,237],
				[1,1,6,8,242,242,242],
				[1,1,7,8,244,244,244],
				[1,1,8,8,245,245,245],
				[1,1,9,8,244,244,244],
				[1,1,10,8,225,226,226],
				[1,1,2,9,194,196,198],
				[1,1,3,9,233,233,233],
				[1,1,4,9,237,237,237],
				[1,1,5,9,240,240,240],
				[1,1,6,9,244,244,244],
				[3,1,7,9,246,246,246],
				[1,1,10,9,230,230,230],
				[1,1,2,10,202,203,204],
				[1,1,3,10,212,212,213],
				[1,1,4,10,219,219,220],
				[1,1,5,10,224,225,225],
				[1,1,6,10,230,231,231],
				[1,1,7,10,234,235,235],
				[1,1,8,10,235,236,236],
				[1,1,9,10,235,235,236],
				[1,1,10,10,233,233,234],
				[11,1,1,11,244,244,244],
				[13,1,0,12,142,143,143]);
				
				break;
				
			case "default-pressed":
				h_whlt.push([13,1,0,0,44,98,139],
				[1,11,0,1,44,98,139],
				[11,1,1,1,194,228,246],
				[1,11,12,1,44,98,139],
				[1,9,1,2,194,228,246],
				[6,1,2,2,94,182,247],
				[1,1,8,2,94,183,247],
				[1,1,9,2,98,186,247],
				[1,1,10,2,102,188,247],
				[1,9,11,2,194,228,246],
				[1,1,2,3,94,182,247],
				[4,1,3,3,157,213,252],
				[1,1,7,3,160,216,252],
				[1,1,8,3,164,218,252],
				[1,1,9,3,169,221,252],
				[1,1,10,3,105,192,247],
				[1,1,2,4,94,182,247],
				[2,1,3,4,157,213,252],
				[1,1,5,4,158,213,252],
				[1,1,6,4,161,217,252],
				[1,1,7,4,166,220,252],
				[1,1,8,4,171,222,252],
				[1,1,9,4,175,225,252],
				[1,1,10,4,107,193,247],
				[1,1,2,5,94,182,247],
				[1,1,3,5,158,215,252],
				[1,1,4,5,160,216,252],
				[1,1,5,5,164,217,252],
				[1,1,6,5,169,221,252],
				[1,1,7,5,173,224,252],
				[1,1,8,5,177,226,252],
				[1,1,9,5,180,227,252],
				[1,1,10,5,119,199,247],
				[1,1,2,6,96,184,247],
				[1,1,3,6,164,218,252],
				[1,1,4,6,169,221,252],
				[1,1,5,6,172,224,252],
				[1,1,6,6,180,227,252],
				[1,1,7,6,191,231,252],
				[1,1,8,6,194,233,252],
				[1,1,9,6,197,234,252],
				[1,1,10,6,140,208,248],
				[1,1,2,7,100,187,247],
				[1,1,3,7,171,222,252],
				[1,1,4,7,176,225,252],
				[1,1,5,7,184,229,252],
				[1,1,6,7,201,235,254],
				[1,1,7,7,211,239,254],
				[1,1,8,7,212,239,254],
				[1,1,9,7,211,239,254],
				[1,1,10,7,160,217,250],
				[1,1,2,8,102,189,247],
				[1,1,3,8,176,225,252],
				[1,1,4,8,184,229,252],
				[1,1,5,8,196,234,252],
				[1,1,6,8,211,239,254],
				[1,1,7,8,218,242,254],
				[1,1,8,8,220,242,254],
				[1,1,9,8,218,242,254],
				[1,1,10,8,172,222,251],
				[1,1,2,9,105,192,247],
				[1,1,3,9,183,229,252],
				[1,1,4,9,196,234,252],
				[1,1,5,9,206,237,254],
				[1,1,6,9,217,242,254],
				[1,1,7,9,224,243,254],
				[1,1,8,9,225,244,254],
				[1,1,9,9,224,244,254],
				[1,1,10,9,184,227,251],
				[1,1,2,10,115,197,247],
				[1,1,3,10,138,208,248],
				[1,1,4,10,157,216,250],
				[1,1,5,10,171,221,251],
				[1,1,6,10,186,227,251],
				[1,1,7,10,197,231,252],
				[2,1,8,10,199,233,252],
				[1,1,10,10,193,230,252],
				[11,1,1,11,194,228,246],
				[13,1,0,12,44,98,139]);
				
				break;
				
			case "default-chked-pressed":
				h_whlt.push([13,1,0,0,44,98,139],
				[1,11,0,1,44,98,139],
				[6,1,1,1,194,228,246],
				[1,1,7,1,195,228,246],
				[1,1,8,1,212,236,249],
				[1,1,9,1,221,240,250],
				[1,1,10,1,204,232,247],
				[1,1,11,1,194,228,246],
				[1,11,12,1,44,98,139],
				[1,9,1,2,194,228,246],
				[5,1,2,2,84,166,213],
				[1,1,7,2,140,195,227],
				[1,1,8,2,130,163,201],
				[1,1,9,2,91,130,179],
				[1,1,10,2,191,219,237],
				[1,1,11,2,198,229,247],
				[1,1,2,3,84,166,213],
				[3,1,3,3,127,186,220],
				[1,1,6,3,129,187,221],
				[1,1,7,3,214,232,243],
				[1,1,8,3,64,100,159],
				[1,1,9,3,44,83,148],
				[1,1,10,3,155,187,217],
				[1,1,11,3,207,234,248],
				[1,1,2,4,84,166,213],
				[2,1,3,4,127,186,220],
				[1,1,5,4,128,188,221],
				[1,1,6,4,171,212,234],
				[1,1,7,4,151,177,208],
				[1,1,8,4,44,83,148],
				[1,1,9,4,76,112,167],
				[1,1,10,4,188,225,245],
				[1,6,11,4,194,228,246],
				[1,1,2,5,84,166,213],
				[1,1,3,5,150,199,227],
				[1,1,4,5,171,211,234],
				[1,1,5,5,137,195,227],
				[1,1,6,5,218,236,246],
				[1,1,7,5,69,106,163],
				[1,1,8,5,46,85,150],
				[1,1,9,5,162,188,217],
				[1,1,10,5,151,209,240],
				[1,1,2,6,128,190,226],
				[1,1,3,6,178,200,223],
				[1,1,4,6,139,167,202],
				[1,1,5,6,188,224,242],
				[1,1,6,6,160,186,215],
				[1,1,7,6,51,88,151],
				[1,1,8,6,80,113,167],
				[1,1,9,6,228,242,250],
				[1,1,10,6,135,203,238],
				[1,1,2,7,178,217,239],
				[1,1,3,7,86,120,172],
				[1,1,4,7,45,85,150],
				[1,1,5,7,183,205,227],
				[1,1,6,7,84,115,168],
				[1,1,7,7,60,92,153],
				[1,1,8,7,169,187,214],
				[1,1,9,7,211,236,249],
				[1,1,10,7,156,212,241],
				[1,1,2,8,132,197,232],
				[1,1,3,8,197,218,235],
				[1,1,4,8,48,87,151],
				[1,1,5,8,54,89,152],
				[1,1,6,8,60,92,153],
				[1,1,7,8,84,112,165],
				[1,1,8,8,236,245,251],
				[1,1,9,8,204,234,247],
				[1,1,10,8,170,218,243],
				[1,1,2,9,103,185,229],
				[1,1,3,9,210,229,242],
				[1,1,4,9,119,147,189],
				[1,1,5,9,58,91,152],
				[1,1,6,9,63,93,153],
				[1,1,7,9,165,182,209],
				[1,1,8,9,227,243,251],
				[1,1,9,9,211,236,249],
				[1,1,10,9,183,223,245],
				[1,1,2,10,104,189,233],
				[1,1,3,10,150,209,240],
				[1,1,4,10,203,223,239],
				[1,1,5,10,123,150,191],
				[1,1,6,10,130,155,193],
				[1,1,7,10,231,242,249],
				[1,1,8,10,200,231,247],
				[1,1,9,10,198,230,247],
				[1,1,10,10,192,227,246],
				[3,1,1,11,194,228,246],
				[1,1,4,11,202,232,247],
				[1,1,5,11,220,239,250],
				[1,1,6,11,219,239,250],
				[1,1,7,11,202,232,247],
				[4,1,8,11,194,228,246],
				[13,1,0,12,44,98,139]);
				
				break;
				
			case "default-checked":
				h_whlt.push([13,1,0,0,142,143,143],
				[1,11,0,1,142,143,143],
				[7,1,1,1,244,244,244],
				[1,1,8,1,248,248,248],
				[1,1,9,1,249,249,249],
				[1,1,10,1,246,246,246],
				[1,1,11,1,244,244,244],
				[1,11,12,1,142,143,143],
				[1,9,1,2,244,244,244],
				[5,1,2,2,174,179,185],
				[1,1,7,2,201,204,208],
				[1,1,8,2,157,167,192],
				[1,1,9,2,119,134,171],
				[1,1,10,2,220,223,228],
				[1,1,11,2,245,245,245],
				[1,1,2,3,174,179,185],
				[3,1,3,3,203,207,213],
				[1,1,6,3,204,208,214],
				[1,1,7,3,237,238,241],
				[1,1,8,3,87,106,157],
				[1,1,9,3,68,90,146],
				[1,1,10,3,185,191,208],
				[1,1,11,3,246,246,246],
				[1,1,2,4,174,179,185],
				[2,1,3,4,203,207,213],
				[1,1,5,4,205,209,214],
				[1,1,6,4,224,226,230],
				[1,1,7,4,175,184,207],
				[1,1,8,4,69,90,146],
				[1,1,9,4,101,119,165],
				[1,1,10,4,231,231,232],
				[1,1,11,4,244,244,244],
				[1,1,2,5,174,179,185],
				[1,1,3,5,213,217,221],
				[1,1,4,5,223,226,229],
				[1,1,5,5,213,216,220],
				[1,1,6,5,242,243,244],
				[1,1,7,5,94,113,161],
				[1,1,8,5,71,92,148],
				[1,1,9,5,188,195,214],
				[1,1,10,5,219,220,220],
				[1,1,2,6,197,201,205],
				[1,1,3,6,201,207,221],
				[1,1,4,6,163,174,200],
				[1,1,5,6,237,238,238],
				[1,1,6,6,186,193,213],
				[1,1,7,6,73,94,150],
				[1,1,8,6,100,118,165],
				[1,1,9,6,248,248,248],
				[1,1,10,6,213,213,214],
				[1,1,2,7,222,224,225],
				[1,1,3,7,110,127,170],
				[1,1,4,7,71,92,148],
				[1,1,5,7,207,212,226],
				[1,1,6,7,103,120,167],
				[1,1,7,7,75,96,151],
				[1,1,8,7,183,191,213],
				[1,1,9,7,246,246,246],
				[1,1,10,7,220,221,222],
				[1,1,2,8,205,207,209],
				[1,1,3,8,222,225,233],
				[1,1,4,8,72,93,149],
				[1,1,5,8,73,95,150],
				[1,1,6,8,75,96,151],
				[1,1,7,8,97,115,164],
				[1,1,8,8,248,249,250],
				[1,1,9,8,244,244,244],
				[1,1,10,8,225,226,226],
				[1,1,2,9,198,200,202],
				[1,1,3,9,234,236,240],
				[1,1,4,9,139,153,187],
				[1,1,5,9,74,95,151],
				[1,1,6,9,76,97,152],
				[1,1,7,9,176,185,209],
				[1,1,8,9,249,249,249],
				[1,1,9,9,246,246,246],
				[1,1,10,9,230,230,230],
				[1,1,2,10,202,203,204],
				[1,1,3,10,218,218,219],
				[1,1,4,10,223,226,233],
				[1,1,5,10,140,153,186],
				[1,1,6,10,144,157,189],
				[1,1,7,10,242,243,246],
				[1,1,8,10,236,237,237],
				[1,1,9,10,235,235,236],
				[1,1,10,10,233,233,234],
				[3,1,1,11,244,244,244],
				[1,1,4,11,245,245,245],
				[1,1,5,11,249,249,249],
				[1,1,6,11,248,248,248],
				[1,1,7,11,245,245,245],
				[4,1,8,11,244,244,244],
				[13,1,0,12,142,143,143]);
				
				break;
			
			case "default-hovered":
				h_whlt.push([13,1,0,0,85,134,163],
				[1,11,0,1,85,134,163],
				[11,1,1,1,222,249,250],
				[1,11,12,1,85,134,163],
				[1,9,1,2,222,249,250],
				[6,1,2,2,121,198,249],
				[1,1,8,2,121,199,249],
				[1,1,9,2,124,201,249],
				[1,1,10,2,128,203,249],
				[1,9,11,2,222,249,250],
				[1,1,2,3,121,198,249],
				[4,1,3,3,177,223,253],
				[1,1,7,3,180,225,253],
				[1,1,8,3,183,227,253],
				[1,1,9,3,187,229,253],
				[1,1,10,3,131,206,249],
				[1,1,2,4,121,198,249],
				[2,1,3,4,177,223,253],
				[1,1,5,4,178,223,253],
				[1,1,6,4,181,226,253],
				[1,1,7,4,185,228,253],
				[1,1,8,4,189,230,253],
				[1,1,9,4,192,232,253],
				[1,1,10,4,133,207,249],
				[1,1,2,5,121,198,249],
				[1,1,3,5,178,224,253],
				[1,1,4,5,180,225,253],
				[1,1,5,5,183,226,253],
				[1,1,6,5,187,229,253],
				[1,1,7,5,191,231,253],
				[1,1,8,5,194,233,253],
				[1,1,9,5,196,234,253],
				[1,1,10,5,144,212,249],
				[1,1,2,6,123,200,249],
				[1,1,3,6,183,227,253],
				[1,1,4,6,187,229,253],
				[1,1,5,6,190,231,253],
				[1,1,6,6,196,234,253],
				[1,1,7,6,205,237,253],
				[1,1,8,6,208,238,253],
				[1,1,9,6,210,239,253],
				[1,1,10,6,163,219,250],
				[1,1,2,7,126,202,249],
				[1,1,3,7,189,230,253],
				[1,1,4,7,193,232,253],
				[1,1,5,7,200,235,253],
				[1,1,6,7,213,240,254],
				[1,1,7,7,221,243,254],
				[1,1,8,7,222,243,254],
				[1,1,9,7,221,243,254],
				[1,1,10,7,180,226,251],
				[1,1,2,8,128,204,249],
				[1,1,3,8,193,232,253],
				[1,1,4,8,200,235,253],
				[1,1,5,8,209,239,253],
				[1,1,6,8,221,243,254],
				[1,1,7,8,227,245,254],
				[1,1,8,8,228,245,254],
				[1,1,9,8,227,245,254],
				[1,1,10,8,190,230,252],
				[1,1,2,9,131,206,249],
				[1,1,3,9,199,235,253],
				[1,1,4,9,209,239,253],
				[1,1,5,9,217,241,254],
				[1,1,6,9,226,245,254],
				[1,1,7,9,231,246,254],
				[1,1,8,9,232,247,254],
				[1,1,9,9,231,247,254],
				[1,1,10,9,200,234,252],
				[1,1,2,10,140,210,249],
				[1,1,3,10,161,219,250],
				[1,1,4,10,177,225,251],
				[1,1,5,10,189,229,252],
				[1,1,6,10,201,234,252],
				[1,1,7,10,210,237,253],
				[2,1,8,10,212,238,253],
				[1,1,10,10,207,236,253],
				[11,1,1,11,222,249,250],
				[13,1,0,12,85,134,163]);
				
				break;
				
				case "default-disabled":
				h_whlt.push([13,1,0,0,177,177,177],
				[1,11,0,1,177,177,177],
				[6,1,1,1,240,240,240],
				[1,1,7,1,241,241,241],
				[1,1,8,1,242,242,242],
				[1,1,9,1,243,243,243],
				[1,1,10,1,244,244,244],
				[1,1,11,1,245,245,245],
				[1,11,12,1,177,177,177],
				[5,1,1,2,240,240,240],
				[1,1,6,2,241,241,241],
				[1,1,7,2,242,242,242],
				[1,1,8,2,243,243,243],
				[1,1,9,2,244,244,244],
				[2,1,10,2,245,245,245],
				[4,1,1,3,240,240,240],
				[1,1,5,3,241,241,241],
				[1,1,6,3,242,242,242],
				[1,1,7,3,243,243,243],
				[1,1,8,3,244,244,244],
				[1,1,9,3,245,245,245],
				[2,1,10,3,246,246,246],
				[3,1,1,4,240,240,240],
				[2,1,4,4,242,242,242],
				[1,1,6,4,244,244,244],
				[1,1,7,4,245,245,245],
				[1,1,8,4,246,246,246],
				[1,1,9,4,247,247,247],
				[2,1,10,4,248,248,248],
				[2,1,1,5,241,241,241],
				[1,1,3,5,242,242,242],
				[1,1,4,5,244,244,244],
				[1,1,5,5,245,245,245],
				[1,1,6,5,246,246,246],
				[1,1,7,5,247,247,247],
				[1,1,8,5,248,248,248],
				[3,1,9,5,249,249,249],
				[1,1,1,6,243,243,243],
				[1,1,2,6,244,244,244],
				[1,1,3,6,245,245,245],
				[1,1,4,6,246,246,246],
				[1,1,5,6,247,247,247],
				[3,1,6,6,249,249,249],
				[3,1,9,6,250,250,250],
				[1,1,1,7,244,244,244],
				[1,1,2,7,245,245,245],
				[1,1,3,7,246,246,246],
				[1,1,4,7,247,247,247],
				[1,1,5,7,249,249,249],
				[3,1,6,7,250,250,250],
				[1,1,9,7,251,251,251],
				[2,1,10,7,250,250,250],
				[1,1,1,8,246,246,246],
				[1,1,2,8,247,247,247],
				[1,1,3,8,248,248,248],
				[1,1,4,8,249,249,249],
				[4,1,5,8,250,250,250],
				[1,1,9,8,251,251,251],
				[2,1,10,8,250,250,250],
				[1,1,1,9,247,247,247],
				[1,1,2,9,248,248,248],
				[1,1,3,9,249,249,249],
				[3,1,4,9,250,250,250],
				[5,1,7,9,251,251,251],
				[1,1,1,10,248,248,248],
				[1,1,2,10,249,249,249],
				[4,1,3,10,250,250,250],
				[5,1,7,10,251,251,251],
				[1,1,1,11,249,249,249],
				[4,1,2,11,250,250,250],
				[6,1,6,11,251,251,251],
				[13,1,0,12,177,177,177]);
				
				break;
				
		}
		
		//var fh = [];
		/*fh_str = fh.concat(
			h_hlrt.map(this._hlrt),
			h_wltb.map(this._wltb),
			h_wrtb.map(this._wrtb),
			h_hlrb.map(this._hlrb),
			h_whlt.map(this._whlt),
			h_whlb.map(this._whlb),
			h_whrb.map(this._whrb),
			h_whrt.map(this._whrt)
		).join("");*/
		fh_str = h_whlt.map(this._whlt).join("");
		
		return fh_str;
	}
    
  }

});
