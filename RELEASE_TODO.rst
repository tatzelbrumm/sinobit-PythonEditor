Checklist for Releases
======================

* Update the version number in the editor.html file.
* Update the CHANGES.rst file with English description of changes made.
* If required, update the firmware.hex file to the correct version of the "vanilla" MicroPython runtime used in this release.
  * To update the firmware follow these steps.  The firmware is ONLY stored in
    the editor.html inside a div tag.  The firmware.hex file in this repo is
    for reference/illustrative puroses only!
    1. Replace firmware.hex with the updated firmware.
    2. Remove ALL of the firmware data in the editor.html div contents.
    3. Copy in your entire firmware.hex contents to replace the editor.html
       div contents.
    4. Find the last two lines, they should look something like:

       :04000005000162BDD7
       :00000001FF

       The exact values will differ, but directly above those lines add the
       following EXACTLY:

       :020000040003F7
       :::::::::::::::::::::::::::::::::::::::::::

       This is the magic bit that will allow the editor to insert a script into
       the firmware that's downloaded.
* Create a tagged release using GitHub.
* Inform those who maintain the versioning manifest. Currently this is @jaustin at the micro:bit foundation.
