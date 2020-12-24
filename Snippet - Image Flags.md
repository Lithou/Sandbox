---


#todo
- add div borders 
- create glow effects
- shadow effects
- brainstorm other effects
- side by side images
- complete the quick reference table
- ToC?
- explain fixed vs variable values for width (400px vs 35%) 
- further sepperate the basic/complex functions into sepperate sections for different user types. 
- Spelling / Grammar check
- Overall Layout and asthetics. 
---


> ==Please Note that this is a work in progress and items are being added/modified as work progresses. Items left todo still are in the meta data. Please feel free to leave any feedback here on github or on discord (Lithou#7447)==
> *last updated: 12/24/2020*

# Overview: 
This File showcases the "Pub-Image Flags.CSS": 


## Contributions:
This is a collaboration with several people on the forums. If I missed your name and would like it included, please let me know. 

Thanks to Gabroel, Death_AU, and Klaas for helping make this snippet the best it can be.
Thanks to Silver and Licat for making Obsidian a great tool 

---
## How to install: 
1. Navigate to the CSS folder of this repository/vault (/.obsidian/snippets)
2. Grab the "Pub-Image-Flags.css" file
3. Copy/Paste this file into the snippets folder of the desired Obsidian Vault
4. Enable the snippet in Obsidian under the settings (appearance tab) 
5. Read the rest of the documentation and have fun! 

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

This is the example image we will be using for most examples and is shown without flags: 
![[testc.jpg]]

# Core Flags
Each of these core flags will call a flavour of decoration and some default values. Think of them as your starting template. These templates can then be further modified with additional flags (discussed below). 

*Note: if you are modifying/tinkering the CSS code, please be aware that the order of the code is important as the items further down will override those further up if both are enabled. Therefore, modifiers are listed later than the core items. *

---
## Side

![[testc.jpg|+side]]

This flag will set the object to float so that the text in the following elements will flow around it.  

By Default it will be floated to the right and have a width of 40% of the page.  

This is the most basic core flag and other modifiers are highly encouraged to be used. 


## Tape

![[testc.jpg|+tape]]

This flag will tilt the image and apply an effect so that the image appears to be attached to the background by a piece of scotch tape. 

By default it is floated to the right and is 400 pixels wide. The [[Snippet - Image Flags#Size Flags|Size]]and [[Snippet - Image Flags#Orientation and Position Flags|Orientation]] flags will override these values. 

You can also apply [[Snippet - Image Flags#Color Flags]] to the color of the tape, but will need to specify the "::before" element in order to do so. 

---
## Push Pin

![[testc.jpg|+pin]]

This flag is similar to the tape flag, but will apply an effect that looks like the image is instead held too the background by a push pin. 

It is also by default floated to the right and 400 pixels wide. The [[Snippet - Image Flags#Size Flags|Size]]and [[Snippet - Image Flags#Orientation and Position Flags|Orientation]] flags will override these values. 

You can also apply [[Snippet - Image Flags#Color Flags]] to the color of the tape, but will need to specify the "::before" element in order to do so. 

---

## Portrait

![[avatar.jpg|+portrait]]
The portrait flag will create an oval cutout around the image and float it to the right. This is most often used for pictures of real or fictional characters at the top of a biographical page, but ou can use it however you like. 

By default it will be floated right with a width of 200px (half of normal default width) and an elliptical cutout. It works best for images that are taller than they are wide or you will get some odd results with the clip path. For those, use Landscape instead. 

---
## Landscape

![[testc.jpg|+landscape-huge-divborder1]]
The landscape flag is similar to the portrait flag in that it will create an oval cutout around the image and float it to the right. The difference is the oval is shaped to match a landscape image and is thus wider than it is tall.

By default it will be floated right with a width of 400px and an elliptical cutout. It works best for images that are wider than they are tall or you will get some odd results with the clip path. For those, use Portrait instead. 

---
## Banner and HR

![[testc.jpg|+banner]]

The "+banner" attribute will put the image into a banner type element that takes up 100% of the width, but with a fixed height. By default it is 100px tall. There is also an offset value that shifts the image up so that it doesn't start at the top of the image. This can be changed or set to zero based on the type of images you have. 

![[testc.jpg|+hr ]]

The "+hr" element is similar to the banner, but with a smaller height (10px by default) so that it can act as a divider. (by default has rounded corners).

---



# Modifier Flags

These flags can be used to modify/change values of a core flag. They can be used together, but can conflict in certain circumstance. Using both a "-left" and a "-right" flag for instance will result in only one being applied. Generally you should be ok to use one from each category. 


## Size Flags: 
By default the image will take up the entire width of the screen. The size flags will resize an image. 
The image sizes are such that the images will fill the page width in increasing number. 
- Thumb: 8 images across
- Small:  4 across
- Medium: 3 across
- Large: 2 across 
### Thumbnail: 
"-thumb"  will create a thumbnail size (11.5% wide by default) 
![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]![[testc.jpg|+side-thumb]]


---
### Small:
"-sm"  will call the small size (24% by default)
![[testc.jpg|+side -sm]]![[testc.jpg|+side -sm]]![[testc.jpg|+side -sm]]![[testc.jpg|+side -sm -nofloat]]

---
### Medium:
"-med" will call the medium size (32.33% by default)
	![[testc.jpg|+side -med]]![[testc.jpg|+side -med]]![[testc.jpg|+side -med]]

---
### Large: 
"-lg" will call the large size (49% by default)
	![[testc.jpg|+side-lg]]	![[testc.jpg|+side-lg -nofloat]]

---

### Huge: 
"-huge" will call the huge size (66% by default)
	![[testc.jpg|-huge]]

---

## Left and Right

"-left" will float the image to the left
"-right" will float the image to the right

>Note: *These also add a 1% margin to the opposite side to create a scaling and symmetrical shape.*

---

## Borders and Shadow



### Border1 and Border2

![[testc.jpg|+tape-border1-thumb]]
the "-border" flag will add a border to the image. These can also be expanded to multiple user presets and can be modified to suit the users preferences. 

By default, the border will be a solid, 2 pixel wide line that is a light blue color. "-border2" by default is the same, but black in color. 

![[testc.jpg|+tape-border2-sm]]The border will go around the image as opposed to the container (the Div) and will thus go undernieth other effects like the tape effect as pictured. 

These can be customized to default to other colors. They can also be further modified as detailed in the following sections. 

<br>

---

### DivBorder1 and DivBorder2 (Work In Progress)
![[testc.jpg|+side -sm -divborder2 -right]]

![[testc.jpg|+side -sm -border2 -right]]

#WiP

Sometime you want the border around the container Div instead of the image. Use the "-divborder1" instead. Compare Border (left) to DivBorder (right) when used with the "+side tag" 

The default values are the same as Border1 and Border2 respectivly except they go around the containing div instead of the image. Divborders are generally useful with the full image is not displayed (like the header or HR elements) For Portrait and Landscape Borders see [[#Borders for Portrait Landscape|Advanced Topics]].

---

### Rounded Corners

![[testc.jpg|-sm -right -border2 -bradius2]]

![[testc.jpg|-sm -right -border2 -bradius1]]

The border can be set to have rounded corners with the "-bradius1" and "-bradius2" flags. The first will set a slight roundedness, while the second will create a larger roundedness. 

---

### Rounded Corners 2: Electric Boogaloo

![[testc.jpg|-sm -right -border2 -bradiustl -bradiusbr]]

![[testc.jpg|-sm -right -border2 -bradiustr -bradiusbl]]

I had to have a little extra fun with border radii. These will set a rounded corner on a single corner. These can be used individually or in pairs. As always feel free to modify the values to fit your needs.



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
This section contains some of flags that are set up for those who want to further customize their snippet. These are optional and are not included in the main list due to the requirement of tweaking and the need for some CSS understanding or for their complexity which can cause confusion or information overload. 

While the normal flags can be used "out of the box" or with some minor setting changes, these are a bit more involved.  


## Custom Presets

There are several places where custom settings can be employed along with the standard options. These fall into the same two categories as the normal flags: Core Flags and Modifier Flags.

### Custom Core Flags
- These start with a "+" and work just like other core flags. 
- Allow a user defined set of defaults as templates
- designed for settings that the are used the most often.
- Modifiers (both standard and custom) can be applied
- "+custom1" and "+custom2" included
- More can be made with copy/paste and increasing the number

### Custom Modifier Flags
- "c" added as prefix to standard modifiers
- Can be applied to both standard and custom Core Flags
- One Custom modifier included for each type.
- More can be made with copy/paste and increasing the number

![[testc.jpg|+hr-cwidth1 -divborder2 -cdivbradius1]]Here's an example of the standard "+hr" element with a standard modifier (-divborder2) and two custom modifiers (-cwidth1 and cdivbradius1) The custom width is set to 120% so that it extends out beyond the text and includes a negative 10% margin on the left so that the bar is centered. The custom border radius make a much more rounded end.

---
## Other Border Settings
Border settings can be modified in the default values in the CSS, or they can be overridden by an aditional flag. The following can be used to overide the default settings.
Note: if you are using a "divborder" place a "d" in front of these to impact the div border settings. (this is still in progress) #WiP 

"-bsizethin" - Sets the border size to 1px
"-bsizethick" - Sets the border size to 5px
"-bdotted" - Sets the border to a dotted line #WiP 
"-bdouble" - Sets the border to a bouble line #WiP 
"-bcolor1" - Sets the border to a preset color (default: White) #WiP 
"-bcolor2" - Sets the border to a preset color (default: Red) #WiP 
""
## Images side by side and other arrangments
![[testc.jpg|+side -med -right]]If you want two images side by side, you can place them one![[testc.jpg|+side -sm -right]]after another on the same line. If they are sized so that their combined width is less than that of the page, they will display inline. The text will still flow around the images since they are floated to the side. 
> if images are on the right hand side, the first image is the furthest right, while the last one will be furthest left. 

## Fixed and Abolute
"-fixed" will cause the image to become fixed so that it will not move as the page undernieth scrolls
"-abs" will cause the image to be positioned the same place regardless of where it is put in the edit mode. 

---

## No Float Tag

![[testc.jpg|+side -med -border1]]![[testc.jpg|+side -thumb -border1 -nofloat]]You may want two (or more) images side by side of differing sizes then wish the text to not flow around one or more of them. You might want other elements not to flow around an image. 

Enter the "-nofloat"  tag. The first image is floated right (larger image) allowing both the second image and the text to flow around it.  The second image (smaller image) is not floated causing the text to start on the next line.  

---
![[testc.jpg|+side -med -border1]]![[testc.jpg|+side -sm -border1]]![[testc.jpg|+side -med -border1-nofloat]]
You can use "-nofloat" on the last image in a line to end floating. Note that this will cause the last image to left align which can look odd depending on the size of image. (above is an example of this as it causes the middle image to appear too far to the right). If you had only two images, though, it would look OK) 

---

![[testc.jpg|+side -sm -border1]]

![[testc.jpg|+side -sm -border1]]

![[testc.jpg|+side -sm -border1]]

<br>
<br>
<br>
<br>

In many cases, it is better to use the "< br>" command to create line returns so that the text starts on the correct line. 



## Borders for Portrait/Landscape
Having a clip path with also clip any border. Putting a div border will create a square border around the box rather than an elliptical shaped one. 

The way to accomplish a border effect for these is to set the div background color to the desired color then apply the same clip path to the div but 1% larger than the clip path on the image. 
I have the divs already set up this way by default so setting a background color with a flag will do the trick, but you can alter the clip path if you want to customize the overall shape.



# Quick Reference

#WiP 

|tag|type|description|
|---|---|---|
|[[Snippet - Image Flags#Side\|+side]]|core|default flag, floats to right|
|+tape|core|image taped to background effect|
|+pin|core|image pinned to background effect