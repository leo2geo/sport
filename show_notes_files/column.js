/*
	by Paul@YellowPencil.com and Scott@YellowPencil.com
	includes TextResizeDetector by Lawrence Carvalho <carvalho@uk.yahoo-inc.com>
	feel free to delete all comments except for the above credit
*/

// Replace 'center' 'right' and 'left' with the ID names of the columns you want to balance.
// The last one is there to show how you can add more columns.  Just delete the ones you're not using.
var divs = new Array('col1', 'col2', 'col3');

// Initialize Scripts - is this a browser that understands DOM?
function scriptInit() { if (!document.getElementById) { return; } }

// Set up Event Listener
function addEvent(elm, evType, fn, useCapture) { 
	if (elm.addEventListener) { elm.addEventListener(evType, fn, useCapture); return true; } 
	else if (elm.attachEvent) { var r = elm.attachEvent('on' + evType, fn); return r; }
	else { elm['on' + evType] = fn; }
}

// Start Column Script
function setTall() {
	if (document.getElementById) { var maxHeight = 0; for (var i = 0; i < divs.length; i++) {
			if (document.getElementById(divs[i]) != null)
			{ var div = document.getElementById(divs[i]); div.style.height = null; if (div.offsetHeight > maxHeight) maxHeight = div.offsetHeight; }
		}
	for (var i = 0; i < divs.length; i++) {
			if (document.getElementById(divs[i]) != null)
			{ var div = document.getElementById(divs[i]); div.style.height = maxHeight + 'px'; if (div.offsetHeight > maxHeight) { div.style.height = (maxHeight - (div.offsetHeight - maxHeight)) + 'px'; } }
		}
	}
}

// Assign one of the columns to the TextResizeDetector.
function initTall() {
	if (document.getElementById) { for (var i = 0; i < divs.length; i++)
		{ if (document.getElementById(divs[i]) != null) { TextResizeDetector.TARGET_ELEMENT_ID = divs[i]; break; } }
	setTall(); } 
}

// Fire Events
addEvent(window, 'load', initTall, false);
addEvent(window, 'resize', setTall, false);

/*	Detects changes to font sizes when user changes browser settings
	Fires a custom event with the following data:
	iBase  : base font size
	iDelta : difference in pixels from previous setting
	iSize  : size in pixel of text
	author Lawrence Carvalho carvalho@uk.yahoo-inc.com */

// @constructor
TextResizeDetector = function() {
    var el  = null;
	var iIntervalDelay  = 200;
	var iInterval = null;
	var iCurrSize = -1;
	var iBase = -1;
 	var aListeners = [];
 	var createControlElement = function() {
	 	el = document.createElement('span');
		el.id='textResizeControl';
		el.innerHTML='&nbsp;';
		el.style.position="absolute";
		el.style.left="-9999px";
		var elC = document.getElementById(TextResizeDetector.TARGET_ELEMENT_ID);
		// insert before firstChild
		if (elC)
			elC.insertBefore(el,elC.firstChild);
		iBase = iCurrSize = TextResizeDetector.getSize();
 	};

 	function _stopDetector() {
		window.clearInterval(iInterval);
		iInterval=null;
	};
	function _startDetector() {
		if (!iInterval) {
			iInterval = window.setInterval('TextResizeDetector.detect()',iIntervalDelay);
		}
	};

 	 function _detect() {
 		var iNewSize = TextResizeDetector.getSize();

 		if(iNewSize!== iCurrSize) {
			for (var 	i=0;i <aListeners.length;i++) {
				aListnr = aListeners[i];
				var oArgs = {  iBase: iBase,iDelta:((iCurrSize!=-1) ? iNewSize - iCurrSize + 'px' : "0px"),iSize:iCurrSize = iNewSize};
				if (!aListnr.obj) {
					aListnr.fn('textSizeChanged',[oArgs]);
				}
				else  {
					aListnr.fn.apply(aListnr.obj,['textSizeChanged',[oArgs]]);
				}
			}

 		}
 		return iCurrSize;
 	};
	var onAvailable = function() {
		if (!TextResizeDetector.onAvailableCount_i ) {
			TextResizeDetector.onAvailableCount_i =0;
		}

		if (document.getElementById(TextResizeDetector.TARGET_ELEMENT_ID)) {
			TextResizeDetector.init();
			if (TextResizeDetector.USER_INIT_FUNC){
				TextResizeDetector.USER_INIT_FUNC();
			}
			TextResizeDetector.onAvailableCount_i = null;
		}
		else {
			if (TextResizeDetector.onAvailableCount_i<600) {
	  	 	    TextResizeDetector.onAvailableCount_i++;
				setTimeout(onAvailable,200)
			}
		}
	};
	setTimeout(onAvailable,500);

 	return {
		 	/*
		 	 * Initializes the detector
		 	 *
		 	 * @param {String} sId The id of the element in which to create the control element
		 	 */
		 	init: function() {

		 		createControlElement();
				_startDetector();
 			},
			/**
			 * Adds listeners to the ontextsizechange event.
			 * Returns the base font size
			 *
			 */
 			addEventListener:function(fn,obj,bScope) {
				aListeners[aListeners.length] = {
					fn: fn,
					obj: obj
				}
				return iBase;
			},
			/**
			 * performs the detection and fires textSizeChanged event
			 * @return the current font size
			 * @type {integer}
			 */
 			detect:function() {
 				return _detect();
 			},
 			/**
 			 * Returns the height of the control element
 			 *
			 * @return the current height of control element
			 * @type {integer}
 			 */
 			getSize:function() {
	 				var iSize;
			 		return el.offsetHeight;


 			},
 			/**
 			 * Stops the detector
 			 */
 			stopDetector:function() {
				return _stopDetector();
			},
			/*
			 * Starts the detector
			 */
 			startDetector:function() {
				return _startDetector();
			}
 	}
 }();

/*** end TextResizeDetector */

TextResizeDetector.TARGET_ELEMENT_ID = 'doc';
TextResizeDetector.USER_INIT_FUNC = function() {
	var iBase = TextResizeDetector.addEventListener(setTall, null);
};

