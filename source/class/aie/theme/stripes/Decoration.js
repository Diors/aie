/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Sebastian Werner (wpbasti)
   * Andreas Ecker (ecker)
   * Til Schneider (til132)
   * Martin Wittemann (martinwittemann)

************************************************************************* */

/* ************************************************************************

#asset(qx/decoration/Classic/*)

************************************************************************* */

/**
 * The classic qooxdoo decoration theme.
 */
qx.Theme.define("aie.theme.stripes.Decoration",
{
  aliases : {
    decoration : "aie/decoration/Stripes"
  },

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "main" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        color : "border-dark"
      }
    },


    "keyboard-focus" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : "black",
        style : "dotted"
      }
    },



    /*
    ---------------------------------------------------------------------------
      THREE DIMENSIONAL
    ---------------------------------------------------------------------------
    */

    "inset" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        /*top, right, bottom, left*/
        color : [ "border-default-top", "#DBDFE6", "#E3E9EF", "#E2E3EA" ]
      }
    },

    "outset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-light-shadow", "border-dark", "border-dark", "border-light-shadow" ],
        innerColor : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "groove" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ],
        innerColor : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "ridge" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ],
        innerColor : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ]
      }
    },

    "inset-thin" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ]
      }
    },

    "outset-thin" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "border-light", "border-dark-shadow", "border-dark-shadow", "border-light" ]
      }
    },

    "focused-inset" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#5794BF", "#B7D5EA", "#C7E2F1", "#C5DAED" ]
      }
    },

    "focused-outset" :
    {
      decorator : qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-focused-light-shadow", "border-focused-dark", "border-focused-dark", "border-focused-light-shadow" ],
        innerColor : [ "border-focused-light", "border-focused-dark-shadow", "border-focused-dark-shadow", "border-focused-light" ]
      }
    },

    "border-invalid" :
    {
      decorator: qx.ui.decoration.Double,

      style :
      {
        width : 1,
        innerWidth: 1,
        color : [ "border-dark-shadow", "border-light", "border-light", "border-dark-shadow" ],
        innerColor : "invalid"
      }
    },
    
    "aie-tabview-border" :
    {
      decorator : qx.ui.decoration.Single,
      
      style :
      {
        width : 1,
        /*top, right, bottom, left*/
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ]
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      GROUPBOX
    ---------------------------------------------------------------------------
    */

	"aie-stripes-groupbox" :
    {
      decorator: aie.theme.stripes.decoration.groupbox.GroupBox

      /*style :
      {
        statename : "none"
      }*/
    },


    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        widthLeft : 1,
        colorLeft : "border-separator"
      }
    },

    "separator-vertical" :
    {
      decorator: qx.ui.decoration.Single,

      style :
      {
        widthTop : 1,
        colorTop : "border-separator"
      }
    },



    /*
    ---------------------------------------------------------------------------
      SHADOWS
    ---------------------------------------------------------------------------
    */

    "aie-stripes-shadow-small" :
    {
      decorator : aie.theme.stripes.decoration.shadow.Shadow,

      style : {
        boxshadowhorizontal : 2,
        boxshadowvertical : 3,
        boxshadowcolor : "#919191",
        boxshadowblur : 3,
        boxshadowspread : 0
      }
    },
    
    "shadow" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        //baseImage : "decoration/shadow/shadow.png",
        insets    : [ 4, 8, 8, 4 ]
      }
    },

    "shadow-window" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/shadow/shadow.png",
        insets    : [ 4, 8, 8, 4 ]
      }
    },


    "shadow-small" :
    {
      decorator : qx.ui.decoration.Grid,

      style : {
        baseImage : "decoration/shadow/shadow-small.png",
        insets    : [ 0, 3, 3, 0 ]
      }
    },

    "checkbox-invalid-shadow" :
    {
      decorator : qx.ui.decoration.Beveled,

      style :
      {
        outerColor : "invalid",
        innerColor : "border-focused-invalid",
        insets: [0]
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    "aie-stripes-std-button-disabled" :
    {
      decorator : aie.theme.stripes.decoration.button.Button,

      style :
      {
        statename : "disabled"
      }
    },

    "aie-stripes-std-button-pressed" :
    {
      decorator : aie.theme.stripes.decoration.button.Button,

      style :
      {
        statename : "pressed"
      }
    },
	
	"aie-stripes-std-button-hovered" :
    {
      decorator : aie.theme.stripes.decoration.button.Button,

      style :
      {
        statename : "hovered"
      }
    },
	
	"aie-stripes-std-button-focused" :
    {
      decorator : aie.theme.stripes.decoration.button.Button,

      style :
      {
        statename : "focused"
      }
    },
    
    "aie-stripes-std-button-checked" :
    {
      decorator : aie.theme.stripes.decoration.button.Button,

      style :
      {
        statename : "checked"
      }
    },
	
	"aie-stripes-std-button-default" :
    {
      decorator : aie.theme.stripes.decoration.button.Button,

      style :
      {
        statename : "default"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SCROLLBAR BUTTON
    ---------------------------------------------------------------------------
    */
    
    "aie-stripes-std-scrollbarbuttonup-default" :
    {
      decorator : aie.theme.stripes.decoration.button.ScrollbarButton,

      style :
      {
        statename : "default-up"
      }
    },
    
    
    
    /*
    ---------------------------------------------------------------------------
      BUTTON ARROWS
    ---------------------------------------------------------------------------
    */
    "aie-stripes-selectbox-down-arrow" :
    {
      decorator : aie.theme.stripes.decoration.resource.DownArrow,

      style :
      {}
    },
    
    "aie-stripes-scrollbarbutton-up-arrow" :
    {
      decorator : aie.theme.stripes.decoration.resource.ScrollUpArrow,

      style :
      {}
    },
    
    
    /*
    ---------------------------------------------------------------------------
      COMBO BOX
    ---------------------------------------------------------------------------
    */
    "aie-stripes-std-cbobox-default" :
    {
      decorator : aie.theme.stripes.decoration.textfield.TextField,

      style :
      {
      	statename : "default"
      }
    },
    
    "aie-stripes-std-cbobox-focused" :
    {
      decorator : aie.theme.stripes.decoration.textfield.TextField,

      style :
      {
      	statename : "focused"
      }
    },
    
    "aie-stripes-std-cbobutton-default" :
    {
      decorator : aie.theme.stripes.decoration.resource.DownArrow,

      style :
      {}
    },
    
    "aie-stripes-std-cbobutton-hovered" :
    {
      decorator : aie.theme.stripes.decoration.button.ComboboxButton,

      style :
      {
        statename : "hovered"
      }
    },
    
    "aie-stripes-std-cbobutton-pressed" :
    {
      decorator : aie.theme.stripes.decoration.button.ComboboxButton,

      style :
      {
        statename : "pressed"
      }
    },
    

    
    /*
    ---------------------------------------------------------------------------
      CHECKBOX
    ---------------------------------------------------------------------------
    */

	"aie-stripes-std-checkbox" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default"
      }
    },
    
    "aie-stripes-std-checkbox-chkd" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-checked"
      }
    },
    
    "aie-stripes-std-checkbox-pressed" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-pressed"
      }
    },
    
    "aie-stripes-std-checkbox-chkd-pressed" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-chked-pressed"
      }
    },
    
    "aie-stripes-std-checkbox-chkd-hovered" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-chked-hovered"
      }
    },
    
    "aie-stripes-std-checkbox-mixed" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-mixed"
      }
    },
    
    "aie-stripes-std-checkbox-mixed-disabled" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-mixed-disabled"
      }
    },

    "aie-stripes-std-checkbox-unchkd-hovered" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-hovered"
      }
    },

	"aie-stripes-std-checkbox-disabled" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-disabled"
      }
    },
    
    "aie-stripes-std-checkbox-chkd-disabled" :
    {
      decorator: aie.theme.stripes.decoration.checkbox.CheckBox,
      style :
      {
        statename : "default-chkd-disabled"
      }
    },
    
     /*
    ---------------------------------------------------------------------------
      RADIOBUTTON
    ---------------------------------------------------------------------------
    */

	"aie-stripes-std-radiobutton" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default"
      }
    },
    
    "aie-stripes-std-radiobutton-chkd" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-checked"
      }
    },
    
    "aie-stripes-std-radiobutton-pressed" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-pressed"
      }
    },
    
    "aie-stripes-std-radiobutton-chkd-pressed" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-chked-pressed"
      }
    },
    
    "aie-stripes-std-radiobutton-chkd-hovered" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-chked-hovered"
      }
    },
    
    "aie-stripes-std-radiobutton-mixed" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-mixed"
      }
    },

    "aie-stripes-std-radiobutton-unchkd-hovered" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-hovered"
      }
    },

	"aie-stripes-std-radiobutton-disabled" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-disabled"
      }
    },
    
    "aie-stripes-std-radiobutton-chkd-disabled" :
    {
      decorator: aie.theme.stripes.decoration.radiobutton.RadioButton,
      style :
      {
        statename : "default-chked-disabled"
      }
    },

    
    /*
    ---------------------------------------------------------------------------
      LIST
    ---------------------------------------------------------------------------
    */
    "aie-stripes-std-list-default" :
    {
      decorator : aie.theme.stripes.decoration.list.List,

      style :
      {
      	statename : "default"
      }
    },
    
    "aie-stripes-std-list-focused" :
    {
      decorator : aie.theme.stripes.decoration.list.List,

      style :
      {
      	statename : "focused"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SCROLLBAR
    ---------------------------------------------------------------------------
    */
    "aie-stripes-std-scrollbar-vertical" :
    {
      decorator : aie.theme.stripes.decoration.scrollbar.ScrollBar,

      style :
      {
      	statename : "vertical"
      }
    },
    
    "aie-stripes-std-scrollbar-horizontal" :
    {
      decorator : aie.theme.stripes.decoration.scrollbar.ScrollBar,

      style :
      {
      	statename : "horizontal"
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */

    "aie-stripes-std-window" :
    {
      decorator : aie.theme.stripes.decoration.window.Window,

      style :
      {
        statename : "default",
        basecolorred : 153,
        basecolorgreen : 180,
        basecolorblue : 209,
        aieshadow : true
      }
    },
    
    "aie-stripes-std-window-pane" :
    {
      decorator : aie.theme.stripes.decoration.window.Window,

      style :
      {
        statename : "windowpane"
      }
    },
    
    "aie-stripes-std-window-title" :
    {
      decorator : aie.theme.stripes.decoration.window.Window,

      style :
      {
        statename : "windowtitle"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      LIST ITEM
    ---------------------------------------------------------------------------
    */

    "lead-item" :
    {
      decorator : qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        style : "dotted",
        color : "border-lead"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip" :
    {
      decorator: qx.ui.decoration.Uniform,

      style :
      {
        width : 1,
        color : "tooltip-text"
      }
    },


    "tooltip-error" :
    {
      decorator : qx.ui.decoration.Uniform,

      style : {
        width : 1,
        color : "tooltip-text"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar-separator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthLeft : 1,
        colorLeft : "border-dark-shadow"
      }
    },

    "toolbar-part-handle" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        style : "solid",

        colorTop    : "white",
        colorLeft   : "white",
        colorRight  : "border-dark-shadow",
        colorBottom : "border-dark-shadow"
      }
    },





    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    "menu-separator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop: 1,
        widthBottom: 1,
        colorTop : "border-dark",
        colorBottom : "border-light"
      }
    },





    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */

    "datechooser-date-pane" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop: 1,
        colorTop : "gray",
        style : "solid"
      }
    },


    "datechooser-weekday" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom: 1,
        colorBottom : "gray",
        style : "solid"
      }
    },

    "datechooser-week" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight: 1,
        colorRight : "gray",
        style : "solid"
      }
    },

    "datechooser-week-header" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom : 1,
        colorBottom : "gray",
        widthRight: 1,
        colorRight : "gray",

        style : "solid"
      }
    },





    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */

    "tabview-page-button-top" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthBottom : 0
      }
    },

    "tabview-page-button-bottom" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthTop : 0
      }
    },

    "tabview-page-button-left" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthRight : 0
      }
    },

    "tabview-page-button-right" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 1,
        color : [ "#898C95", "#898C95", "#898C95", "#898C95" ],
        widthLeft : 0
      }
    },
    
    "aie-tabviewbutton-default" :
    {
      decorator : aie.theme.stripes.decoration.button.TabViewButton,

      style :
      {
        statename : "default"
      }
    },

	"aie-tabviewbutton-default-hovered" :
    {
      decorator : aie.theme.stripes.decoration.button.TabViewButton,

      style :
      {
        statename : "hovered"
      }
    },
    
    "aie-tabviewbutton-default-bottom" :
    {
      decorator : aie.theme.stripes.decoration.button.TabViewButton,

      style :
      {
        statename : "defaultbtm"
      }
    },

	"aie-tabviewbutton-default-bottom-hovered" :
    {
      decorator : aie.theme.stripes.decoration.button.TabViewButton,

      style :
      {
        statename : "hoveredbtm"
      }
    },



    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table-statusbar" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthTop : 1,
        colorTop : "border-dark-shadow",
        styleTop : "solid"
      }
    },

    "table-scroller-header" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthBottom : 1,
        colorBottom : "table-header-border",
        styleBottom : "solid"
      }
    },

    "table-scroller-focus-indicator" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        width : 2,
        color : "table-focus-indicator",
        style : "solid"
      }
    },

    "table-header-cell" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight : 1,
        colorRight : "table-header-border",
        styleRight : "solid"
      }
    },

    "table-header-cell-hovered" :
    {
      decorator : qx.ui.decoration.Single,

      style :
      {
        widthRight : 1,
        colorRight : "table-header-border",
        styleRight : "solid",

        widthBottom : 2,
        colorBottom : "effect",
        styleBottom : "solid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar" :
    {
      decorator: qx.ui.decoration.Single,

      style:
      {
        backgroundColor: "#FFF",
        width: 1,
        color: "border-separator"
      }
    }
  }
});
