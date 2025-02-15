# Face Mask - Challenge for quick workers!
Modified from [cmuems.com/2015b/p5-face-tracking/](http://cmuems.com/2015b/p5-face-tracking/)

## Learning Goals
- Use a third-party library that you didn't write
- Utilize a 2D array

## Mask
**Make a virtual mask with the face tracking system below.**
- Use the points returned by the ctracker to design a mask or other feature instead of just the dots that the start file begins with.
- Optionally, display only the regular image of your face and add something like a hat or a mustache to the image (much like a snapchat or instagram filter)

### Starter Files

Starter files: [p5Face.zip](p5Face.zip)

These are the points in the array returned by `ctracker.getCurrentPosition()`:

![ctracker points reference](images/mask_reference.png)

`ctracker` utilizes a 2D array for the points, where X values are stored in `[0]` and Y values are stored in `[1]`.

So, if you want to track the tip of the nose, these are the coordinates:
```
var noseX = positions[37][0];
var noseY = positions[37][1];
```
