'use strict';

goog.provide('Blockly.Python.speech');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('speech');


Blockly.Python['speech_say'] = function(block) {
  Blockly.Python.definitions_['import_speech'] = 'import speech';
  var value_english = Blockly.Python.valueToCode(block, 'english', Blockly.Python.ORDER_ATOMIC);
  var code = 'speech.say(' + value_english + ')\n';
  return code;
};

Blockly.Python['speech_pronounce'] = function(block) {
  Blockly.Python.definitions_['import_speech'] = 'import speech';
  var value_phonemes = Blockly.Python.valueToCode(block, 'phonemes', Blockly.Python.ORDER_ATOMIC);
  var code = 'speech.pronounce(' + value_english + ')\n';
  return code;
};

Blockly.Python['speech_sing'] = function(block) {
  Blockly.Python.definitions_['import_speech'] = 'import speech';
  var value_song = Blockly.Python.valueToCode(block, 'song', Blockly.Python.ORDER_ATOMIC);
  var code = 'speech.sing(' + value_english + ')\n';
  return code;
};
