'use strict';

goog.provide('Blockly.Blocks.speech');

goog.require('Blockly.Blocks');

Blockly.Blocks['speech_say'] = {
  init: function() {
    this.appendValueInput("english")
        .setCheck("String")
        .appendField("Say");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('Say something in plain English.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/speech.html');
  }
};

Blockly.Blocks['speech_pronounce'] = {
  init: function() {
    this.appendValueInput("phonemes")
        .setCheck("String")
        .appendField("Pronounce");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('Pronounce a phonetic representation of speech.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/speech.html#phonemes');
  }
};

Blockly.Blocks['speech_sing'] = {
  init: function() {
    this.appendValueInput("song")
        .setCheck("String")
        .appendField("Sing");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('Sing some phonemes.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/speech.html#singing');
  }
};
