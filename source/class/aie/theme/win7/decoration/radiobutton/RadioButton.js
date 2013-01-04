/* ************************************************************************

   AIE - Apperance Is Everything

   http://www.sqville.com/aie

   Copyright:
     2008 SQville, Austin, TX USA http://www.sqville.com

   License:
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * 
 */
qx.Class.define("aie.theme.win7.decoration.radiobutton.RadioButton",
{
  extend : qx.core.Object,
  
  implement : [qx.ui.decoration.IDecorator],
  
    /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {	
	/** Directs Painter on how to paint the Decorator **/
    statename :
    {
      check : "String",
      nullable : true,
	  themeable : true
    }
  },
  
  
  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  /**
   * @param width {Integer} Width of the border
   * @param style {String} Any supported border style
   * @param color {Color} The border color
   */
  construct : function()
  {
    this.base(arguments);
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
  	// interface implementation
    getMarkup : function()
    {
		var self = this.self(arguments);
		
  		var aiebankdefaultstdrdobut = self.aiebankdefaultstdrdobut;
		var aiebankdunchkhov = self.aiebankdunchkhov;
		var aiebankchkchked = self.aiebankchkchked;
		var aiebankdchkdisab = self.aiebankdchkdisab;
		var aiebankdchkpressed = self.aiebankdchkpressed;
		var aiebankdchkchkedpressed = self.aiebankdchkchkedpressed;
		var aiebankdchkhov = self.aiebankdchkhov;
		var aiebankdchkmixed = self.aiebankdchkmixed;
				
		var dechtml;	
		var aiecanvasdiv;
		
		switch (this.getStatename()) {
			case "default":
				if (!aiebankdefaultstdrdobut) {
  					aiebankdefaultstdrdobut = self.aiebankdefaultstdrdobut = this._generateBank("na", "default");
  				}
				dechtml = aiebankdefaultstdrdobut;
				break;
				
			case "default-checked":
				if (!aiebankchkchked) {
  					aiebankchkchked = self.aiebankchkchked = this._generateBank("na", "default-checked");
  				}
				dechtml = aiebankchkchked;
				break;
				
			case "default-pressed":
				if (!aiebankdchkpressed) {
  					aiebankdchkpressed = self.aiebankdchkpressed = this._generateBank("na", "default-pressed");
  				}
				dechtml = aiebankdchkpressed;
				break;
				
			case "default-chked-pressed":
				if (!aiebankdchkchkedpressed) {
  					aiebankdchkchkedpressed = self.aiebankdchkchkedpressed = this._generateBank("na", "default-chked-pressed");
  				}
				dechtml = aiebankdchkchkedpressed;
				break;
				
			case "default-chked-hovered":
				if (!aiebankdchkhov) {
  					aiebankdchkhov = self.aiebankdchkhov = this._generateBank("na", "default-chked-hovered");
  				}
				dechtml = aiebankdchkhov;
				break;
			
			case "default-hovered":
				if (!aiebankdunchkhov) {
  					aiebankdunchkhov = self.aiebankdunchkhov = this._generateBank("na", "default-hovered");
  				}
				dechtml = aiebankdunchkhov;
				break;
				
			case "default-mixed":
				if (!aiebankdchkmixed) {
  					aiebankdchkmixed = self.aiebankdchkmixed = this._generateBank("na", "default-mixed");
  				}
				dechtml = aiebankdchkmixed;
				break;
			
			case "default-disabled":
				if (!aiebankdchkdisab) {
  					aiebankdchkdisab = self.aiebankdchkdisab = this._generateBank("na", "default-disabled");
  				}
				dechtml = aiebankdchkdisab;
				break;
		}
	
		aiecanvasdiv = "<div style='position:absolute;overflow:hidden'>" + dechtml + "</div>";

	  return aiecanvasdiv;	  
	  
    },


     // interface implementation
    resize : function(element, width, height)
    {
	  element.style.width = width + "px";
      element.style.height = height + "px";
    },


    // interface implementation
    tint : function(element, bgcolor)
    {

      /*var Color = qx.theme.manager.Color.getInstance();

      if (bgcolor == null) {
        bgcolor = "yellow";
      }

      element.style.backgroundColor = Color.resolve(bgcolor) || "";*/

    },


    // overridden
    __insets :
    {
      top : 0,
      right : 0,
      bottom : 0,
      left : 0
    },


    // interface implementation
    getInsets : function() {
      return this.__insets;
    },
	
	_generateBank : function(area, s)
	{
	  var bp = new aie.theme.win7.painter.radiobutton.RadioButton(); 
	  var str = "";
	  
	  str = bp.getDefaultRadioButton(s);

	  return str;
	}
  }
});