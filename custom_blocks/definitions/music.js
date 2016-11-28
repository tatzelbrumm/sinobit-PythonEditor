'use strict';

goog.provide('Blockly.Blocks.music');

goog.require('Blockly.Blocks');

Blockly.Blocks['music_play_built_in'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play built-in melody")
        .appendField(new Blockly.FieldDropdown([["DADADADUM", "DADADADUM"], ["ENTERTAINER", "ENTERTAINER"], ["PRELUDE", "PRELUDE"], ["ODE", "ODE"], ["NYAN", "NYAN"], ["RINGTONE", "RINGTONE"], ["FUNK", "FUNK"], ["BLUES", "BLUES"], ["BIRTHDAY", "BIRTHDAY"], ["WEDDING", "WEDDING"], ["FUNERAL", "FUNERAL"], ["PUNCHLINE", "PUNCHLINE"], ["PYTHON", "PYTHON"], ["BADDY", "BADDY"], ["CHASE", "CHASE"], ["BA_DING", "BA_DING"], ["WAWAWAWAA", "WAWAWAWAA"], ["JUMP_UP", "JUMP_UP"], ["JUMP_DOWN", "JUMP_DOWN"], ["POWER_UP", "POWER_UP"], ["POWER_DOWN", "POWER_DOWN"]]), "melody");
    this.appendDummyInput()
        .appendField("Wait")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "wait");
    this.appendDummyInput()
        .appendField("Loop")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "loop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(95);
    this.setTooltip('Play one of the built-in melodies.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#built-in-melodies');
  }
};

Blockly.Blocks['music_pitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play pitch:")
        .appendField(new Blockly.FieldNumber(440, 0), "pitch");
    this.appendDummyInput()
        .appendField("for")
        .appendField(new Blockly.FieldNumber(1000, 0), "duration")
        .appendField("milliseconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(95);
    this.setTooltip('Play a specific pitch for a certain duration.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#music.pitch');
  }
};

Blockly.Blocks['music_play_list_of_notes'] = {
  init: function() {
    this.appendValueInput("notes")
        .setCheck("Array")
        .appendField("Play notes:");
    this.appendDummyInput()
        .appendField("Wait")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "wait");
    this.appendDummyInput()
        .appendField("Loop")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "loop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(95);
    this.setTooltip('Play a user defined list of notes.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#musical-notation');
  }
};

Blockly.Blocks['music_reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset music.");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(95);
    this.setTooltip('Reset all music related settings.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#music.reset');
  }
};

Blockly.Blocks['music_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Stop music");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(95);
    this.setTooltip('Stop all music.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#music.stop');
  }
};

Blockly.Blocks['music_set_tempo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set tempo with 1 beat the same as")
        .appendField(new Blockly.FieldNumber(4, 1, 16), "ticks")
        .appendField("ticks, at")
        .appendField(new Blockly.FieldNumber(120, 20, 9999), "bpm")
        .appendField("beats per minute.");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(95);
    this.setTooltip('Set the tempo at which the music will play.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#music.set_tempo');
  }
};

Blockly.Blocks['music_get_tempo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get current tempo.");
    this.setColour(95);
    this.setOutput(true);
    this.setTooltip('Return the tick and BPM that defines the tempo.');
    this.setHelpUrl('https://microbit-micropython.readthedocs.io/en/latest/music.html#music.get_tempo');
  }
};
