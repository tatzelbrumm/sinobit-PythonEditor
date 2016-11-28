'use strict';

goog.provide('Blockly.Python.music');
goog.require('Blockly.Python');

// Any imports need to be reserved words
Blockly.Python.addReservedWords('music');

Blockly.Python['music_play_built_in'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var dropdown_melody = block.getFieldValue('melody');
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var code = 'music.play(music.' + dropdown_melody +', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  return code;
};

Blockly.Python['music_pitch'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var number_pitch = block.getFieldValue('pitch');
  var number_duration = block.getFieldValue('duration');
  var code = 'music.pitch(' + number_pitch + ', ' + number_duration + ')\n';
  return code;
};

Blockly.Python['music_play_list_of_notes'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var checkbox_wait = block.getFieldValue('wait') == 'TRUE' ? 'True' : 'False';
  var checkbox_loop = block.getFieldValue('loop') == 'TRUE' ? 'True' : 'False';
  var value_notes = Blockly.Python.valueToCode(block, 'notes', Blockly.Python.ORDER_ATOMIC);
  var code = 'music.play(' + value_notes + ')\n';
  var code = 'music.play(' + value_notes + ', wait=' + checkbox_wait + ', loop=' + checkbox_loop + ')\n';
  return code;
};

Blockly.Python['music_reset'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.reset()\n';
  return code;
};

Blockly.Python['music_stop'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.stop()\n';
  return code;
};

Blockly.Python['music_set_tempo'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var number_ticks = block.getFieldValue('ticks');
  var number_bpm = block.getFieldValue('bpm');
  var code = 'music.set_tempo(' + numbsr_ticks + ', ' + number_bpm +')\n';
  return code;
};

Blockly.Python['music_get_tempo'] = function(block) {
  Blockly.Python.definitions_['import_music'] = 'import music';
  var code = 'music.get_tempo()\n';
  return [code, Blockly.Python.ORDER_MEMBER];
};
