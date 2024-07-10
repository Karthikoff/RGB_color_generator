# RGB_color_generator

This project is a simple RGB color picker tool that allows users to adjust the red, green, and blue values using sliders and see the resulting color in a color box. The RGB color value can also be copied to the clipboard with a button click.

#Features

Interactive Sliders: Adjust the red, green, and blue values using sliders.
Live Color Preview: See the resulting color in a color box as you adjust the sliders.
Display RGB Values: Display the current RGB values below each slider.
Copy to Clipboard: Copy the current RGB color value to the clipboard with a button click.

#Code Overview

#HTML Elements
Sliders for red, green, and blue values.
Spans to display the current values of each color component.
A color box to show the resulting color.
A button to copy the RGB value to the clipboard.
A span to display the RGB color value in text form.

#JavaScript Functions

updateColor: Updates the background color of the color box and the displayed RGB values when the sliders are adjusted.
copyRGBvalue: Copies the current RGB color value to the clipboard and alerts the user.
Event Listeners
input event listeners on the red, green, and blue sliders to call updateColor.
click event listener on the copy button to call copyRGBvalue.
