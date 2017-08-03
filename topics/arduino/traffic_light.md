# Make a traffic light
Adapted from: http://www.makeuseof.com/tag/arduino-traffic-light-controller/

## Learning Goals
- Combine your knowledge from the last few activities into one finished product
- Plan a new feature and then implement it
- Troubleshoot your own code

## You need
- Arduino
- A red, yellow and green LED.
- A breadboard.
- 3 x suitable resistors for the LEDs you have ( probably 220 Ohms is fine).
- Connecting wires.
- A pushbutton switch.
- A high value resistor (10k).
- Wiring

## Schematic
There are three LEDs wired with resistors to three separate input pins, and all connected to the ground.

![Traffic Light Schematic](Arduino_Traffic_Light.png)

## Programming
We’ll start by defining variables so that we can address the lights by name rather than a number.

### Initial Light Change
Start a new Arduino project, and begin with these lines:

```
int red = 13;
int yellow = 12;
int green = 11;
```

Next, let’s add the setup function, where’ll we define the red, yellow and green LEDs to be output mode. Since we’ve created variables to represent the pin numbers, we can now refer to the pins by names instead.

```
void setup() {
  pinMode(red,OUTPUT);
  pinMode(yellow,OUTPUT);
  pinMode(green,OUTPUT);
}
```

Now for the actual logic of a traffic light. Let's create a separate function for changing the lights.

```
void loop() {
  changeLights();
  delay(15000);
}

void changeLights() {
  // green off, yellow for 3 seconds
  digitalWrite(green,HIGH);
  digitalWrite(yellow,LOW);
  delay(3000);

  // turn off yellow, then turn red on for 5 seconds
  digitalWrite(yellow,LOW);
  digitalWrite(red,HIGH);
  delay(5000);

  // red and yellow on for 2 seconds (red is already on though)
  digitalWrite(yellow,HIGH);
  delay(2000);

  // turn off red and yellow, then turn on green
  digitalWrite(yellow,LOW);
  digitalWrite(red,LOW);
  digitalWrite(green,HIGH);
}
```

Now, upload and run. You should have a working traffic light that changes every 15 seconds.

### Pedestrian Button
Let’s add in a pushbutton for pedestrians to change the light whenever they like.

Refer to the updated circuit diagram below:
![Traffic Light Schematic with Button](Arduino_Traffic_Light_With_Button.png)

You’ll notice that the switch has a high-impedance 10k resistor attached to it, and may be wondering why. This is called a pull down resistor. It’s a difficult concept to grasp at first, but bear with me.
A switch either lets the current flow, or doesn’t. This seems simple enough, but in a logic circuit, the current should be always flowing in either a high or low state (remember – 1 or 0, high or low). You might assume that a pushbutton switch that isn’t actually being pushed would be defined as being in a low state, but in fact it’s said to be ‘floating’, because no current is being drawn at all.

In this floating state, it’s possible that a false reading will occur as it fluctuates with electrical interference. In other words, a floating switch is giving neither a reliable high, nor low state reading. A pull down resistor keeps a small amount of current flowing when the switch is closed, thereby ensuring an accurate low state reading. In other logic circuits, you may find a pull-up resistor instead – this works on the same principle, but in reverse, making sure that particular logic gate defaults to high.

Now, in the loop part of the code, instead of changing the lights every 15 seconds, we’re going to read the state of the pushbutton switch instead, and only change the lights when it’s activated.

Start by adding some new variables to the start of the app:

```
int button = 2; // switch is on pin 2
int buttonValue = 0; // switch defaults to 0 or LOW
```

Now, in the setup function, add a new line to declare the switch as an input. Also add a single line to start the traffic lights in the green stage. Without this initial setting, they would be turned off, until the first time a changeLights() was initiated using a function.

```
pinMode(switch,INPUT);
digitalWrite(green,HIGH);
```

Change the entire loop function to the following instead:

```
void loop(){
  // read the value of the switch
  switchValue = digitalRead(button);
  // if the switch is HIGH, ie. pushed down - change the lights!
  if (buttonValue == HIGH){
    changeLights();
    delay(15000); // wait for 15 seconds
  }
}
```

By waiting inside the “if” statement for 15 seconds, we ensure the traffic lights can’t change for at least that duration. Once 15 seconds is up, the loop restarts. Each restart of the loop, we will read the state of the button again, but if it isn’t pressed then the “if” statement never activates, the lights never change, and it simply restarts again.

## Improve on your own
You should add some new features to the traffic light to make it more interesting using the knowledge you have gained this week.

Play around with the code, adjust it, and most importantly have fun.
