"use strict";

/**
 * A panel inspector is used to inspect and change the attributes of an object.
 *
 * The panel has a form element that should be used to place the object attribute editing GUI.
 *
 * @constructor
 * @class Panel
 * @extends {Element}
 * @param {Element} parent
 * @param {Object} object Object to be edited by this inspector panel.
 */
function Panel(parent, object)
{
	Element.call(this, parent, "div");

	this.element.style.overflow = "auto";
	this.preventDragEvents();

	/**
	 * Object attached to this panel.
	 * 
	 * @property object
	 * @type {Object3D}
	 */ 
	this.object = null;
	this.attach(object);

	/**
	 * Panel form.
	 *
	 * @property form
	 * @type {TableForm}
	 */
	this.form = new TableForm(this);
	this.form.setAutoSize(false);
}

Panel.prototype = Object.create(Element.prototype);

/** 
 * Attach object to panel.
 *
 * @method attach
 * @param {Object3D} object
 */
Panel.prototype.attach = function(object)
{
	this.object = object;
};

/**
 * Update panel information to match the attached object.
 *
 * @method updatePanel
 */
Panel.prototype.updatePanel = function(){};

Panel.prototype.updateSize = function()
{
	Element.prototype.updateSize.call(this);

	this.form.size.copy(this.size);
	this.form.updateInterface();
};
