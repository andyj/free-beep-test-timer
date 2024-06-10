#!/bin/bash

# Created using MacOS and Lame
# $ brew install lame
# $ chmod +x convert_say_to_mp3.sh
# ./voices.sh

# Generate the AIFF file for the countdown message
say -o startingin.aiff "Starting in 5.4.3.2.1"

# Convert the AIFF file to MP3 using lame
lame -m m startingin.aiff startingin.mp3

# Generate the AIFF file for the beep sound
say -v Bells -o beep.aiff "beep"

# Convert the AIFF file to MP3 using lame
lame -m m beep.aiff beep.mp3

# Generate the AIFF file for the beep sound
say -o finished.aiff "The beep test has finished. Well done!"

# Convert the AIFF file to MP3 using lame
lame -m m finished.aiff finished.mp3

rm *.aiff

mv *.mp3 ../src/mp3s/

echo "Audio files created and conversion completed"
