# Getting Started with Looper

This project was made possible by team Kassim

## Netlify URL

https://looper-kassim.netlify.app/

## Github repo

https://github.com/kassimbashir/looper

## App Overview

Looper is multi-track audio player which plays eight audio tracks simultaneously.

## App features

The audio player has 4 kinds of buttons:

### Play button

start playing all channels simultaneously (which
isn’t muted)

### Stop button

stop all playing channels and go back to start.

### Loop button

(toggle on/off) - when active, each time the loop ends
you should immediately go back to start and play again (loop).

### Mute button

Each channel has a mute button (toggle on/off)

## Technologies

### React

React is great for Dynamic single-paged Applications. Dividing elements into reusable components makes coding easier and much more efficient.

### Netlify

Free, easy to use and great for front-end applications hosting service

### Styled-components

Styled Components help keep the concerns of styling and element architecture separated and make components more readable.
Furthermore, Styled Components gives control of states to CSS. For example, I used styled-components to change the color of a selected button.

## Implementation

The app has two main js files:

### App.js

is the main component of the program. It creates the necessary states to control the audio tracks and then renders a list of audios with the appropriate props.

### AudioRow.js

The component for each row in the audio list.
This component creates an HtmlAudioElement for each track, and it's the component that actually controls everything about the audio: muting, playing, stopping and rewinding

## Features

### Cursor

cursor on top of all channels to show your current playing position in real time.

### Progess Bar

Each audio track has it's own progress bar.

### Synchronization

Measures has been taken to amke sure that all audio tracks finish together to avoid synchronization issues.

### Drag and Drop (Bonus)

Meaning drag and drop abilities to the cursor implemented using HTML slider.
