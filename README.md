# TrayioRobot


# Introduction
This program simulates a Roomba cleaning dirty patches in a room.  
Input.txt provides the room dimensions, start position of the roomba, movement directions, and the dirty patches. 

The goal of the program is to take the room dimensions, the locations of the dirt patches, the hoover location and the driving instructions as input and to then output the following:

* The final hoover position (X, Y)
* The number of patches of dirt the robot cleaned up


# Technologies Needed
* Node https://nodejs.org/en/download/

# Usage
  To run this program in command line:  
  
  ```
  cd trayiorobot
  node app.js
  ```
  Make sure input.txt is formatted correctly and in the same dir as app.js. 
  First line is room size, second line is cordinates, last line is directions and in between are the patches. 
  Example:
  ```
  5 5
  1 2
  1 0
  2 2
  2 3
  NNESEESWNWW
  ```
  
# Output
  In command line after you run app.js you should see: 
  
  ```
  [1, 3]
  1
  ```
  Changing the input.txt file will change the result values. 
  
# Misc Notes 
  Generic functions searchForArray and uniqBy partially copied from Stack Overflow.  
  
  
  
   
