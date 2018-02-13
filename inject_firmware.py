# Script to inject a firmware.hex file inside editor.html.  This is useful to
# update the firmware built-in to the web editor as it must be provided as
# the contents of a div tag and contain a special marker that signals where
# user code is injects (a line of all :::: values).
import argparse
import sys


# Configuration:
EDITOR_FILE = 'editor.html'
INJECT_HEAD = '<!-- inject_firmware.py injection HEAD -->'
INJECT_TAIL = '<!-- inject_firmware.py injection TAIL -->'
TEMPLATE = """
<div id="firmware" style="display: none;">{0}
:020000040003F7
:::::::::::::::::::::::::::::::::::::::::::
{1}
</div>
"""


# Require an input firmware hex file as the only argument.  If none is provided
# the default of firmware.hex in the current directory will be used.
parser = argparse.ArgumentParser(description="""
Inject a provided firmware hex file into the editor.html file so as to update
the firmware the editor will generate with user code.  Input firmware should be
the exact output of a MicroPython build with no modifications made to it at
all.
""")
parser.add_argument('firmware', nargs='?', default='firmware.hex',
                    help='input firmware .hex file name (default is firmware.hex)')
args = parser.parse_args()

# Read in the editor.html file and find the injection head and tail lines.
with open(EDITOR_FILE, 'r') as infile:
    editor_contents = infile.readlines()
head = None
tail = None
for i, line in enumerate(editor_contents):
    if line.strip().lower() == INJECT_HEAD.lower():
        if head is not None:
            raise RuntimeError('Found multiple injection heads in editor.html!')
        head = i
    if line.strip().lower() == INJECT_TAIL.lower():
        if tail is not None:
            raise RuntimeError('Found multiple injection tails in editor.html!')
        tail = i
if head is None or tail is None:
    raise RuntimeError('Failed to find both an injection head and tail in editor.html!')

# Read in the input firmware hex file and verify its last two lines appear to
# be for a MicroPython firmware.  There isn't much validation this can do right
# now beyond this basic sanity check.
with open(args.firmware, 'r') as infile:
    firmware_contents = infile.readlines()
if len(firmware_contents) < 2:
    raise RuntimeError('Firmware file is too small!')
if not firmware_contents[-2].startswith(':04') or \
   not firmware_contents[-1].strip() == ':00000001FF':
   raise RuntimeError('Firmware does not end with expected data!')

# Now re-write editor.html by opening it for writing and writing out everything
# up to and including the injection head, then insert the template with values
# filled in using the input firmware, and finally the rest of the editor
# contents.
with open(EDITOR_FILE, 'w') as outfile:
    outfile.writelines(editor_contents[:head+1])
    outfile.write(TEMPLATE.format(''.join(firmware_contents[:-2]),
                                  ''.join(firmware_contents[-2:])))
    outfile.writelines(editor_contents[tail:])

print('Successfully injected firmware into editor.html!')
