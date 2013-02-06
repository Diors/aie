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
qx.Class.define("aie.theme.osx.decoration.button.SpinnerButton",
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
		
  		var aiebankdefaultstdbuttonup = self.aiebankdefaultstdbuttonup;
  		var aiebankdefaultstdbuttondown = self.aiebankdefaultstdbuttondown;
		var aiebankdstdbuttonpressed = self.aiebankdstdbuttonpressed;
		var aiebankdstdbuttondisabled = self.aiebankdstdbuttondisabled;
				
		var dechtml;	
		var aiecanvasdiv;
				
		switch (this.getStatename()) {
			case "default-up":
				if (!aiebankdefaultstdbuttonup) {
  					aiebankdefaultstdbuttonup = self.aiebankdefaultstdbuttonup = this._generateBank("na", "default");
  				}
				dechtml = aiebankdefaultstdbuttonup;
				break;
				
			case "default-down":
				if (!aiebankdefaultstdbuttondown) {
  					if (aiebankdefaultstdbuttonup) {
  						aiebankdefaultstdbuttondown = self.aiebankdefaultstdbuttondown = aiebankdefaultstdbuttonup
  					} else {
  						aiebankdefaultstdbuttondown = self.aiebankdefaultstdbuttondown = this._generateBank("na", "default");
  					}
  				}
  				
				dechtml = aiebankdefaultstdbuttondown;
				break;
			
			case "pressed":
				if (!aiebankdstdbuttonpressed) {
  					aiebankdstdbuttonpressed = self.aiebankdstdbuttonpressed = this._generateBank("na", "default-pressed");
  				}
				dechtml = aiebankdstdbuttonpressed;
				break;
				
			case "disabled":
				if (!aiebankdstdbuttondisabled) {
  					aiebankdstdbuttondisabled = self.aiebankdstdbuttondisabled = aiebankdefaultstdbuttonup + this._generateBank("na", "default-disabled");
  				}
				dechtml = aiebankdstdbuttondisabled;
				break;
		}
		
		//aiecanvasdiv = "<div style='width:100%;height:100%;position:absolute;overflow:hidden;left:" + aiechkleft + ";top:" + aiechktop + "'>" + dechtml + "</div>";
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
	  var bp = new aie.theme.osx.painter.button.Button(); 
	  var sa = new aie.theme.osx.painter.resource.SpinnerArrows();
	  var str = "";
	  
	  str = bp.getDefaultButton(s);

	  //** add arrows
	  if (this.getStatename() == "default-up") {
	  	str += sa.getSpinnerArrow("up");
	  } else {
	  	str += sa.getSpinnerArrow("down");
	  }

	  return str;
	}
  }
});
