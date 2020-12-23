---


#todo
- add div borders 
- create glow effects
- shadow effects
- brainstorm other effects
- complete the quick reference table
- explain fixed vs variable values for width (400px vs 35%) 
- further sepperate the basic/complex functions into sepperate sections for different user types. 
- Spelling / Grammar check
- Overall Layout and asthetics. 
---


> ==Please Note that this is a work in progress and items are being added/modified as work progresses. Items left todo still are in the meta data. Please feel free to leave any feedback here on github or on discord (Lithou#7447)==
> *last updated: 12/22/2020*

# Overview: 
This File showcases the "Image Flags.CSS": 


## Contributions:
This is a collaboration with several people on the forums. If I missed your name and would like it included, please let me know. 

Thanks to Gabroel, Death_AU, and Klaas for helping make this snippet the best it can be.
Thanks to Silver and Licat for making Obsidian a great tool 

---
## How to use: 
1. Make sure the snippet is enabled,
2. Embed an image like normal
3. add a pipe "|" character to the end of the embedded image filename
4. Add a "core" flag 
5. Add any modifier flags to change the baviour of that core element. 

*Note: Core flags start with a "+" and Modifier flags start with a "-"*

 
Example: ```![[test.jpg|+coreflag -modifierflag -anothermodifierflag]]```

---
## Image Placement

Placement of the image does matter. Generally you will want to place the image before the paragraph with which you want the image appear in-line. 

You can put a blank line between the image and the paragraph to have the top of the image and the top of the paragraph line up vertically with each other. 

If you put the image at the start of the paragraph, the renderer will shift your text down and the top of the paragraph will be a line below the top of the image. This can be desirable when using some ofset images like the "tape" flag. 

For those that are fixed or absolute, I suggest the bottom of the page in case there is any other CSS that relies on number of elements before the first heading.

---
## No Flags (image left unchanged)

If an image is linked with no extra flags, it appears as default without any change to its styling. Enabling the snippet will have no impact on any of these images unless you add flags to them.  

This is the example image we will be using and is shown without flags: 
![[test.jpg]]

# Core Flags
Each of these core flags will call a flavour of decoration and some default values. Think of them as your starting place. These templates be further modified with additional flags (discussed below). 

*Note: if you are modifying/tinkering the CSS code, please be aware that the order of the code is important as the items further down will override those further up if both are enabled. Therefore, modifiers are listed later than the core items. *

---
## Side

![[test.jpg|+side]]

This flag will set the object to float so that the text in the following elements will flow around it.  

By Default it will be floated to the right and have a width of 40% of the page.  

This is the most basic core flag and other modifiers are highly encouraged to be used. 


## Tape

![[test.jpg|+tape]]

This flag will tilt the image and apply an effect so that the image appears to be attached to the background by a piece of scotch tape. 

By default it is floated to the right and is 400 pixels wide. The [[#Size Flags|Size]]and [[#Orientation and Position Flags|Orientation]] flags will override these values. 

You can also apply [[#Color Flags]] to the color of the tape, but will need to specify the "::before" element in order to do so. 

---
## Push Pin

![[test.jpg|+pin]]

This flag is similar to the tape flag, but will apply an effect that looks like the image is instead held too the background by a push pin. 

It is also by default floated to the right and 400 pixels wide. The [[#Size Flags|Size]]and [[#Orientation and Position Flags|Orientation]] flags will override these values. 

You can also apply [[#Color Flags]] to the color of the tape, but will need to specify the "::before" element in order to do so. 

---

## Portrait

![[avatar.jpg|+portrait]]
The portrait flag will create an oval cutout around the image and float it to the right. This is most often used for pictures of real or fictional characters at the top of a biographical page, but ou can use it however you like. 

By default it will be floated right with a width of 200px and an elliptical cutout. It works best for images that are taller than they are wide or you will get some odd results with the clip path. For those, use Landscape instead. 

---
## Landscape

![[test.jpg|+landscape]]
The landscape flag is similar to the portrait flag in that it will create an oval cutout around the image and float it to the right. The difference is the oval is shaped to match a landscape image and is thus wider than it is tall.

By default it will be floated right with a width of 400px and an elliptical cutout. It works best for images that are wider than they are tall or you will get some odd results with the clip path. For those, use Portrait instead. 

---
## Banner and HR

![[test.jpg|+banner]]

The "+banner" attribute will put the image into a banner type element that takes up 100% of the width, but with a fixed height. By default it is 100px tall. There is also an offset value that shifts the image up so that it doesn't start at the top of the image. This can be changed or set to zero based on the type of images you have. 

![[test.jpg|+hr ]]

The "+hr" element is similar to the banner, but with a smaller height (10px by default) so that it can act as a divider.

---



# Modifier Flags

These flags can be used to modify/change values of a core flag. They can be used together, but can conflict in certain circumstance. Using both a "-left" and a "-right" flag for instance will result in only one being applied. Generally you should be ok to use one from each category. 


## Size Flags: 
By default the image will take up the entire width of the screen. If you want the image to be a different size, use the appropriate size flags:
### Thumbnail: 
"-thumb"  will create a thumbnail size (10% wide by default) 
![[test.jpg|-thumb]]

---
### Small:
"-sm"  will call the small size (25% by default)
![[test.jpg|-sm]]

---
### Medium:
"-med" will call the medium size (45% by default)
	![[test.jpg|-med]]
	
---
### Large: 
"-lg" will call the large size (65% by default)
	![[test.jpg|-lg]]

---




## Orientation and Position Flags

---

### Left and Right
"-left" will float the image to the left
"-right" will float the image to the right

---

### Fixed and Abolute
"-fixed" will cause the image to become fixed so that it will not move as the page undernieth scrolls
"-abs" will cause the image to be positioned the same place regardless of where it is put in the edit mode. 

---
## Borders and Shadow



### Border1 and Border2

![[test.jpg|+tape-border1-med]]
the "-border" flag will add a border to the image. These can also be expanded to multiple user presets and can be modified to suit the users preferences. 

By default, the border will be a solid, 2 pixel wide line that is a light blue color. "-border2" by default is the same, but black in color. 

![[test.jpg|+tape-border2-med]]The border will go around the image as opposed to the container (the Div) and will thus go undernieth other effects like the tape effect as pictured. 

These can be customized to default to other colors. They can also be further modified as detailed in the following sections. 

<br>

---

### DivBorder1 and DivBorder2 (Work In Progress)
![[test.jpg|+side -sm -divborder1 -right]]

![[test.jpg|+side -sm -border1 -right]]

#WiP

Sometime you want the border around the container Div instead of the image. Use the "-divborder1" instead. Compare Border1 (left) to DivBorder1 on the right when used with the "+side tag" 

The default values are the same as Border1 and Border2 respectivly except they go around the containing div instead of the image. Divborders are generally useful with the full image is not displayed (like the header or HR elements) 

---

### Rounded Corners

![[test.jpg|-sm -right -border1 -bradius2]]

![[test.jpg|-sm -right -border1 -bradius1]]

The border can be set to have rounded corners with the "-bradius1" and "-bradius2" flags. The first will set a slight roundedness, while the second will create a larger roundedness. 

---

### Rounded Corners 2: Electric Boogaloo

![[test.jpg|-sm -right -border1 -bradiustl -bradiusbr]]

![[test.jpg|-sm -right -border1 -bradiustr -bradiusbl]]

I had to have a little extra fun with border radii. These will set a rounded corner on a single corner. These can be used individually or in pairs. As always feel free to modify the values to fit your needs.

---

### Other Border Settings
Border settings can be modified in the default values in the CSS, or they can be overridden by an aditional flag. The following can be used to overide the default settings.
Note: if you are using a "divborder" place a "d" in front of these to impact the div border settings. (this is still in progress) #WiP 

"-bsizethin" - Sets the border size to 1px
"-bsizethick" - Sets the border size to 5px
"-bdotted" - Sets the border to a dotted line #WiP 
"-bdouble" - Sets the border to a bouble line #WiP 
"-bcolor1" - Sets the border to a preset color (default: White) #WiP 
"-bcolor2" - Sets the border to a preset color (default: Red) #WiP 
""


---
# FAQ and Other items: 

## What about Color Flags?
Color Flags are limited due to how CSS is rendered. The non-technical version is that color selection is limited outside a few use cases. Changing the colors of other objects is better done by editing the CSS. 

## Do These Work with Other Themes
The short answer is Yes
While some themes may cause behaviour that is "interesting" with snippets, most should be overcome with some basic settings tweaking. I've currently tested the snippets with a few themes without any issue an no need to change settings. 

## How Do I get Help? 
You can message me on github or through discord (Lithou#7447). I'm active on the obsidian forums and discord as well if you have a question you think others could benifit from. 


---
# Advanced Flags and Customization
This section contains some of flags that are set up for those who want to further customize their snippet. These are optional and are not included in the main list due to the requirement of tweaking and the need for some CSS understanding. While the normal flags can be used "out of the box" or with some minor setting changes, these are a bit more involved. 

## Custom1

![[test.jpg|+custom1]]

This flag is designed to allow a user defined set of defaults. Usually a user will have one or two set of flags that are used consistently for 80% of use cases. 

By default, this flag it will be the same as the "side" flag until the user changes/adds values. 

There is also a "-Custom2" flag that is identical to the "-Custom1" flag. These can hold different presets and be called independantly. The user can create as many of these as needed ore desired. 

*Note: Using the custom value flag is optional. *








# Quick Reference

#WiP 

|tag|type|description|
|---|---|---|
|[[#Side\|+side]]|core|default flag, floats to right|
|+tape|core|image taped to background effect|
|+pin|core|image pinned to background effect