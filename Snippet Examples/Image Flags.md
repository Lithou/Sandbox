# Overview: 
This File showcases the "Image Flags.CSS": 

## Contributions:
This is a collaboration with several people on the forums. If I missed your name and would like it included, please let me know. 


## How to use: 
Once the snippet is enabled, you can call any item with the use of a flag or multiple flags by adding a pipe "|" to the end of an embedded image then typing the desired flag.

Example: ```![[test.jpg|-flag -anotherflag]]```

Placement of the image does matter. Generally you will want to place the image before the paragraph with which you want the image appear in-line. For those that are fixed or absolute, I suggest the bottom of the page in case there is any other CSS that relies on number of elements before the first heading. 

## No Flags (default for images)

If an image is linked with no extra flags, it appears as default without any styling. This is the example image we will be using: 
![[test.jpg]]

# Decoration Types
Each of these flags will call a flavour of decoration and some default values. These values can be further modified with additional flags (discussed below). Note: if you are modifying the CSS please be aware that the order of the code is important as the items further down will override those further up if both are enabled. 

---
## Tape

![[test.jpg|-tape]]
This flag will tilt the image and apply an effect so that the image appears to be attached to the background by a piece of scotch tape. 

By default it is floated to the right and is 400 pixels wide. The [[#Size Flags|Size]]and [[#Orientation and Position Flags|Orientation]] flags will override these values. 

You can also apply [[#Color Flags]] to the color of the tape, but will need to specify the "::before" element in order to do so. 

---
## Push Pin

![[test.jpg|-pin]]

This flag is similar to the tape flag, but will apply an effect that looks like the image is instead held too the background by a push pin. 

It is also by default floated to the right and 400 pixels wide. The [[#Size Flags|Size]]and [[#Orientation and Position Flags|Orientation]] flags will override these values. 

You can also apply [[#Color Flags]] to the color of the tape, but will need to specify the "::before" element in order to do so. 

---





# Size Flags: 
By default the image will take up the entire width of the screen. If you want the image to be a different size, use the appropriate size flags:
## Thumbnail: 
"-thumb"  will create a thumbnail size (50 pixels wide by default) 
![[test.jpg|-thumb]]

---
## Small:
"-sm"  will call the small size (20% by default)
![[test.jpg|-sm]]

---
## Medium:
"-med" will call the medium size (35% by default)
	![[test.jpg|-med]]
	
---
## Large: 
"-lg" will call the large size (50% by default)
	- ![[test.jpg|-lg]]






# Orientation and Position Flags


# Color Flags