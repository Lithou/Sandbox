# 0.1 - Getting "Specific" about CSS
One of the biggest struggles that I see people have when they first get started with CSS is they write some CSS or copy/paste some from someone else, but it doesn't work they way they expected it to if at all. 

Related to this is the often brought up topic of using the dreaded "!important" tag or rather discussing the dangers or using it and why you shouldn't. 

But what is a budding CSS writer to do when their rules don't work and they want to follow the advice of not using the "!important" tag? 

Sure posting of forums or discord would help in that specific case, but at the heart of these situations sits one thing...

An understanding of CSS specificity.


## A Donkey Falls into a pit. 
To illustrate CSS specificity let's go back to the 1st or 2nd century BCE where we will look at interpreting the Law.  

The ancient sages all agreed that the laws of Torah could not always be kept in their entirety. There would inevitably arise situations where one or more laws would come into conflict with each other. 

An often cited example is that the law says to "love your neighbor as yourself" which means that if your neighbor's donkey falls into a pit, in order to fulfill the law, you would help your neighbor get the donkey out of the pit. 

This is straightforward, unless of course, your neighbor's donkey falls into a pit on the sabbath. The laws says to "do no work on the Sabbath" so if you are to fulfill the law, you shouldn't work to get the donkey out, but also if you are to fulfill the law, you should work to get the donkey out.  

In these situations a person would have to choose to break the first law and follow the second or break the second law and follow the first. The sages thus debated which law should be chosen over the other. They sought to determine which of the two laws was the weightier one. 

CSS rules work in much the same way. Whenever two rules conflict, the computer must determine which rule is the weightier of the two. The primary way it does this is specificity. The more specific a rule, the more weight it has. The rule with the higher weight will be used in each given situation. 

---
## Specificity in Concept: 
Now you might be tracking so far. You might be thinking "Ok, Lithou, I get the idea of specificity, but how do I apply it to my code? 

Well, in typical tradition, I will asnwer that question with another question.

Look at these example rules that style the paragraph element.
Can you rank them in order from least specific to most specific?

``` CSS
p { color: red}

p.body {color: blue} 

p#body {color: yellow}

div.body p::nthchild(1) {color: green}

p[ID="body"]{color: white}

```

Got it? 
No? 
Yeah, me either.

If you are like me you might have an idea as to which is more or less specific. You might even be able to guess that the first one is the least specific since it just targets any paragraph element. The rest of them, however? 

You might even be thinking that I brought up the ancient sages for more than just an illustration; that we will have to discuss and debate which of these rules is weightier. 

Fear not! For determining a given rule's specificity is not achieved through debate and discussion but is calculated with something much simpler. Math. 

## The Importance of Why

Before diving into the math, I want to take an aside to mention that this is where most guides on CSS stop. This, however, is where my guide begins. 

I wrote this as a resource because I noticed that many websites, books, or other CSS guides mention specificity but are vague on the application of it or don't go into any details. They mention it as a concept and an idea which is great, but often leave out the nuts and bolts. 

You could say that they are not terribly... *puts on sunglasses*...  specific.   

There of course are places where you can find the in depth details, but they are spread across many sites and resources. I have found the specificity mechanics incredibly helpful in my CSS work and I know they will be use to you as well. By understanding them you will be able to determine how Obsidian or any web browser will apply the rules. I have therefore compiled this guide for you. 

> ### Example for obsidian users:  
> Consider if you had the first rule from the above example in the native Obsidian app and the second or third one in a theme.
>  
> Then imagine you wanted to override both to color a certain paragraph. 
> 
> Which would you put in a snippet to override the color of Obsidian and the theme without having to resort to using the !important tag? 
>
> That is the type of question that this guide will teach you to answer



# 1.0 - The number of Simplicity
Instead of vague ideas about specificity, we need something concrete and measurable that is easily identified and compared. For that we turn to good old mathematics. 

## Math Test
Ok, time for a math test. 

I promise it won't be too bad.

It's also super short. Only one question


**Questions: **
1. Of the two numbers, 1033 and 0155, which is the larger number? 

**Answer**: 
- 1033 
- Easy. 
- it wasn't a trick question :) 
- See, I told you it wouldn't be too bad

**Congratulations you passed the test !**

## Comparing the Specificity Number
Ok. Now that I've had my fun.

Comparing two numbered values is something we can easily do in our heads as humans provided the number isn't terribly long. A three or four digit number will do nicely. 

This is convenient since specificity numbers in CSS are like four digit numbers. They can be written like normal numbers as shown in the math test we just took, or they can also be written with the digits separated by commas such as (1,0,3,3) and (0,1,5,5). 

The thing to keep in mind is that regardless of formatting, the higher the number, the more specific the selector. Since the CSS that is more specific will be applied, that means that the one with the higher number will apply over a smaller number. 

That brings us to the next question that you may be asking. How doe we get these numbers? Does it involve lengthy tables or a slide rule perhaps? Well I'm glad you asked. No it doesn't involve a slide rule. Just some simple counting and addition. 

### Calculating the specificity number
Each type of selector in CSS will fall into one of four categories. The number of selectors used will contribute to a rule's specificity number. 

Don't worry, we'll go more into depth about categories and selectors later. For now a quick and simple summary: 
1. Count the number of inline styles used. This is the first digit.
2. Count the number of Element ID's used. This is the second digit.  
3. Count the number of Classes, Psuedo-Classes, and Attributes used. This is the third digit. 
4. Count the number of Elements and Pseudo Elements Used. This is the fourth digit.  

While there is a bit more to it and some specific exceptions we'll discuss later. This will get you the specificity of almost all rules you write. 

There is a problem, however. You most likely noticed that there were quite a few (makes sure that the pun police are not around) specific terms in those steps. You might be thinking, "Ok, this makes sense in concept, Lithou, but what's the difference between a class and an attribute and how would I tell the difference in my code? I'm confused." 

If you are thinking something like that, then have no fear. First that is a great question so kudos on asking good questions. Second, don't worry about being confused. A bit of practice and examples and I'm sure you'll get it just fine. Third, defining those terms is exactly where we are headed next. We'll talk about each one, how to identify them, and where you are most likely to see and use them. 

So with only a slight delay... Let's talk about In-line styling....

# 2.0 - Categories of CSS selectors
## Inline  (First Digit) 
Inline styling is the most specific of the rules. It is called directly from the HTML by using the "style" attribute inside an elements opening HTML tag. 

Example:
```html
<body> 
	<h1 style="color: #336699">This is a cool blue heading</h1>
	<p>This is a normal boring paragraph. It has 3 sentences. 
	I included the third one otherwise you might yell a me saying 
	that it isn't a proper paragraph without three sentences. 
	I lied. It actually has five sentences. </p>
</body>.
```

In this example the H1 element is styled inside it's tag with a color. As you can see, this is the most specific you can get. 

If we were to calculate the specificity of the rule "color: #336699" it would 1000 or (1,0,0,0). 

### For Obsidian CSS: 
In working with Obsidian, you will definatly see in-line styles. Here's what you want to keep in mind: 
- They are written directly into the Obsidian code
- You therefore cannot directly edit them. 
- In order to override these, you will need to use the !important tag. 

**Lets look at an example:**
Lets open the developer tools to inspect obsidian (Pressing ctrl + shift + I or cmd + shift + I on a mac while in Obsidian will open the dev tools window). 

Then lets look at the \<body\> element. You should see something similar to this: 
![[Pasted image 20210228235130.png]]

Now lets look at the top section under "styles". 

Notice the top section (red box), which is listed as  "element.style".  You should see some code listed that looks like this: 
```CSS
element.style {
	padding-top: 22px;
}
```

This is listed here as if it were written in a css file for visibility. If you look at the html source, you can see where this is called inside the body tag (underlined in red). 

When using the inspector, the listed CSS styles are ordered from top to bottom by specificity. Being at the top of the list, the inline style is the most specific selector, and therefore the rule inside of "padding-top:22px" will apply above any other padding rules in CSS files that try to change the padding of the top of the body. 


#### **A Word of Caution.** 
The Obsidian Devs usually have a good reason for any inline styling and overriding those could cause odd behaviour. That doesn't mean you shouldn't do it. It just means you should be careful when you do it and watch for any stability issues. 

In the case of the body padding, it is a set amount equal to the title bar so that nothing goes up underneath the title bar since you wouldn't be able to see or click on it. The height of the title bar is also an inline style rule. So you can change them, but you will want to try to understand why the devs made that rule un-changeable by normal CSS. 


### For VS Code:   
If you are editing CSS in VS Code, it will calculate and display the specificity number for the rules you are writing. (I'll cover how to do this in just a bit, but I want to touch on how it displays in-line elements or rather how it doesn't display them. Here's the logic:
- Since inline styling is written inside the HTML it is never found in a CSS file
- Any rule inside a CSS file will always have a zero for the first digit of the specificity number since it contains no in-line styling 
- Since it will always be zero, VS code drops the first digit and shows only the other 3 when displaying specificity numbers while working with CSS files. 

Note: I mention VSCode because that's what I use. Other calculators/programs may do this as well.  



## Element ID (Second Digit)
The second digit is for Element ID's. These are listed inside a tag for an element and serve as a unique identifier for that element. They appear with the following format in HTML: 
```html
<div ID="bob">
```

IDs are called in CSS by using the pound "\#" sign. They can be used by themselves or with an element such as ```Div#bob``` or ```#bob```

In Obsidian most identifiers are attributes or classes not IDs so you won't come across these much unless you are working with external HTML. As a result this digit will usually be zero when working with obsidian.

Since it drops the normal first digit of four, VScode shows the total number of ID's as the first of three digits. 

ID's are a good way to set specific items to override CSS when you write your own HTML

## Classes, Attributes, and Pseudo Classes (Third Digit)
Up until this point we have had a one to one ratio between each digit and the items we are counting. With the third digit we instead sum three different types of selectors. 

Also since Inline elements can't be edited and IDs aren't used when working with Obsidian, most of the CSS work starts here for working to resolve conflicts between themes and snippets. 

To get started, let's talk about attributes. 

### Attributes
Attributes are used by HTML to provide additional information. This information can take many forms, and any HTML element can have attributes. These are called in the opening tag with the following format: 
```HTML
<element attribute="Value"> 
```

Attributes are a very common selector that is used in CSS. They are called with use of brackets like in this example: 
```CSS 
element[attribute="value"]
``` 

There are quite a few different ways to use attributes in CSS. The most obvious would be to reference a specific value for a given attribute. There are many more ways like if a given attribute exists, or many regular expression type searches like if an attributes value begins with a numerical digit.  [This site](https://www.w3schools.com/css/css_attribute_selectors.asp) is a good starting point for all of the different ways.

Regardless of how they are referenced, each attribute reference contributes to the total of the third digit. 

### Classes
Classes are a specific type of attribute. In non-technical terms, they define a type of item. Classes are commonly used to group like items so that they can be styled together. 

For example, you might assign all paragraph elements in the main text of a blog to have a class of blog-body. Then you can target all of those together. 

An element can have more than one class. If an element has two classes, CSS can target one, the other, or both.

Let's use an example from Obsidian since it uses classes very extensively. This is the HTML for a span element that contains an embedded image :
```HTML
<span 
	alt="testc.jpg" 
	src="testc.jpg" 
	class="internal-embed image-embed is-loaded">
```

I've added some line returns to make it easier to read. Class names are the values of the class attribute. If there is more than one, they are all listed inside the double quotes and are separated by spaces. This particular element has three classes. 

1. The first class is "internal-embed" which it shares with all other embeded item containers on the page. 

2. The second class is "image-embed" which it shares with all other embeded image containers. 
3. The third class is "is-loaded" which it shares with all other items that the page has loaded currently. Obsidian will update this element to remove this class if the element isn't loaded. It will then add it back in once the element loads again. 

To call a class in CSS, we use a period followed by the name of the class. If we are also using an element we put the element before the period. You can thus identify a class in CSS due to this "element dot class" format. 

Without an element:  ```.internal-embed``` 
With an element:  ```span.image-embed```

If referencing a second class for the same element, add a dot followed by the second class: ```span.image-embed.internal-embed```


### Psuedo-Classes (Third Digit) 
Psuedo classes are similar to classes in that they provide a way of grouping elements by type. While they look much different in the HTML and are referenced differently in CSS, Pseudo classes function like classes. A good example of this would be the ":visited" pseudo class. 

On certain webpages you will notice that some links are a different colour based on if you have visited to destination page of that link before. This is a psuedo-class at work. By targeting the pseudo class of :visited the CSS can make visited links purple instead of blue. 

As you can see, they work just like classes to group elements into sets/groups that can be referenced by that set/group.

In CSS3 (current version), psuedo-class have 1 colon when they are called. This makes them fairly easy to identify. Some examples include:
	- :visited
	- :hover
	- :root (this is often used by itself for global settings)
	- :focus
	- :nthchild()
	
## Elements and Pseudo Elements (Fourth digit)

We have mentioned elements already and I have made the assumption that you are somewhat familiar with the term. If that isn't the case, this is for you. 

### Elements
Elements are the core of HTML. Anything in a set of angle brackets is an element. Note that this refers to the element itself and not the attributes of the element. Some examples include: 
	- \<H1\>
	- \<Div\>
	- \<P\>
	- \<Body\>

Elements are called in CSS by using their names: 
```CSS
P { color: red}
Body {color: blue}
Div {color: green}
```


### Pseudo-Elements
Just like Classes and Pseudo Classes, Elements and their Pseudo counterpart function the same way, but appear in HTML and are called by CSS in sepperate ways. 

The main difference is that Pseudo-Elements are added by the CSS instead of the HTML. Common Pseudo-Elements include:
	- ::before
	- ::after
	- ::first-line
	- ::first-letter
	- ::marker
	- ::selection
	- most webkit items such as ::webkit-scrollbar

Pseudo-Elements are more common in Obsidian where you cannot directly edit the HTML. If you want to add an item, you can't simply add it to the HTML. Instead you can use the ::before or ::after Pseudo-Elements to add what you need. 

In CSS1 and CSS2, both pseudo elements and pseudo classes used only one colon. In CSS3 this was updated so that Pseudo elements use two colons. This was to make it easier to distiguish between the two since they differ in specificity. 

CSS3, however, does maintain backwards compatibility in this regard so you see pseudo-elements with only one colon. You can use them that way of course, but be aware it is the old standard and could cause confusion. It is allowed, but understand: This is not the way. 

# 3.0 - Putting it all Together
Now that we understand the selectors we can sum up each category and put them together to figure out a specificity. There are two other considerations, that we must look at. 

## Tie-breakers 
In our opening analogy of interpreting the commandments of Torah, there was an assumption made regarding the two conflicting laws. The assumption was that one of the laws was greater or weightier than the other. 

As you may have realized in our calculations, it is not only possible, but actually quite likely to end up with two rules that have the exact same specificity. What do we do then? Which applies and which doesn't? Do we resort to flipping a coin? 

While I do look for excuses to pull a cool coin for a good old coin toss, CSS has us covered so we are not subjecgated to stochastic whims of fate. Although you may not like its solution.

### The last shall be first
To break the tie, CSS decides which rule to apply based on the first come, last serve basis. The rule that is further toward the end of a CSS file takes precedence. 

Lets look at an example: 
```CSS
p.main {
	color=red
}

p[blog-post="yes"] {
	color=blue
}
```

In this case, both have one element. The first has a class and the second has an attribute. Both then are (0,0,1,1). Since the second element comes later it is applied if a conflict occurs. 

Therefore if a paragraph has a class of "main" but doesn't have an attribute "blog-post" with a value of "yes" then it will be red.

Likewise if a paragraph has that attribute and value, but doesn't have the class of main, it will be blue. 

If the paragraph has both the class and the attribute, a conflict occurs and the latter rule applies making the paragraph blue. 

### The rule is coming from inside the selector
This also applies to items within the same selector. Consider the following: 
```CSS
H1{
	height: 22px;
	Color: red;
	float: left;
	height: 25px
}
```

If this is the selector that is most specific the rules inside will apply. In this case, however, there are two rules for the same attribute. Both rules have the specificity of the selector therefore the second one will apply and the H1 will be 25 pixels high. 

Note that this is the same as listing the same selector twice: 
``` CSS
H1{
	height: 22px;
	Color: red;
	float: left;
}

H1{
	height: 25px;
}
```

### Establishing a Call Order
What happens if rules are called from multiple CSS sources? This occurs in Obsidian quite frequently and can happen in normal HTML as well. If multiple sources of CSS exist conflicts are resolved by the order in which each file is called. 

Note that this can be CSS from an external file or CSS inside the HTML provided it isn't an inline style. 

The HTML is run from top to bottom. When it gets to a CSS reference it executes all of the referenced file. Then it moves onto the next one. With Obsidian, it calls the internal CSS first, then the applied Theme if it exists, then any enabled snippets. The snippets are run in alphabetical order so renaming a snippets file name would be the way to change a conflicting set of rules if it proves impossible to change the specificity of either rule. 

## Changing Specificity
The tie breaker of CSS may not apply the rule you want. Or it may work initially, but then break if a file is renamed and thus called in a different order. 

To change this, you can increase the specificity of one selector or decrease the specificity of another. Usually it's easier to increase, but not always. 

Likewise if a rule you cannot edit is higher in specificity and thus overrides a selector you wrote, you will want to increase the specificity of your selector until it meets or exceed the other one 

The first step is to determine how much you need to raise it by. In the case of a tie, you need only 1. In this case, you can increase the number of elements by 1. This is quite easy since most selectors don't include all elements possible. Here are some examples. Each selector is increased by adding an element: 
```CSS
p {color:blue}
body p{color:blue}

.class-name{color:blue}
div.class-name{color:blue}
```

Sometimes you will need more than one. Especially if a class or attribute is called. While you can try to add 10 elements and this may be a strategy in cases where you have no other options, finding a way to add a class or attribute is preferred.  

## Epilogue: The Important Selector
last but not least, lets mention how the !important flag works to increase specificity and why you may or may not want to use it. 

The tag can be added to any rule within a selector. This will increase the specificity of that rule dramatically while other rules within the same selector stay the same. You would need to add the tag to every rule you wanted to increase. 

A good way to visualize it is to add another digit to the specificity number on the left end (in the ten thousands place). Without the Important tag, that digit is zero. With the tag, it becomes 1. 

So lets say I have a rule inside a selector with specificity of 0121 or 121. Now with the extra digit that becomes 00121. The value doesn't change by adding the digit. If we add the tag, however, it becomes 10121 which is significantly larger.

The reason I suggest this visualization instead of just saying "it makes it super, duper specific and always applies" is because of what happens when you use the !important tag more than once. 

Let's say I have two selectors. The first has a specificity of 0121 like before. The second has a specificity of 0122. The second selector's rules will apply by default. 

Now if I add the !important tag to the first selector, then that changes. The first becomes 10121 while the second is still 00122 and so the first rule applies. 

The problem occurs if I need to change the second selector and add the important tag. Now the two rules become 10121 and 10122 making the second rule become higher again. This results in a rule that has a high specificity not apply. This can cause complications and is the main reason why changing the specificity through other means is preferred if possible. 


# 4.0 - Opening the Toolbox
With an understanding of the selector categories, how to sum them, and how to put those sums together into a specificity number, you now have the skills to be more precise with your CSS. 

There are some more nuanced points of course and the conversation doesn't stop here. I will cover some exceptions as well as other things to be aware. And of course. We'll have some examples of putting it all together. 

Before we get into all that, however, I think it is very important to mention some of the tools at your disposal when it comes to CSS and specificity rules. 

## VS Code  
First up is VS Code. It is a free program designed for code of all sorts. On of its many great features for working with CSS is that in contains an automatic specificity calculator. 

When editing CSS in VS code, you can hover over a selector and it will automatically calculate the number of each category of items used. It also does a breakdown of the hierarchy of the selector which is incredibly handy to ensure you have the syntax correct.


Here is an example of a selector from one of my CSS files: 
 ``` CSS
.nav-folder.mod-root>.nav-folder-children>.nav-folder>.nav-folder-title{
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     font-size: 18px;
     color: var(\--FoldText);
     padding-left: 3px;
     margin-top: 7px; 
     border-radius: 20px 20px 0px 0px;
}
```

Hovering the mouse over this selector will bring up the following: 
![[Pasted image 20210228221418.png]]
  
- In this example the specificity is 0050, 50, or (0, 0, 5, 0)
	- These are just different ways of writing the same value   
	- Notice that VS code drops leading zero
	- A total of five classes are called
- The upper portion is a visual representation of the selector which if we work from the target at the bottom going upwards:  
	- targets any element with the class "nav-folder-title" 
	- that is the immediate child of any element with a class of "nav-folder" 
	- that is the immediate child of any element with a class of "nav-folder-children"
	-  that is the immediate child of any element that has both a class of "nav-folder" and a class of "mod-root" 
-  Making it more specific  
	- If I instead used the format of "div.nav-folder" instead of ".navfolder" for each
	- The selector would call four total elements and 5 classes  
	- This would make it more specific resulting in a specificity  54 or (0,0,5,4)



> Note: There is no current way to display the specificity number inside the developer tools for Obsidian. If you are looking at a webpage in chrome, there is a chrome extension called "CSS dig" you can get but it has some bugs. I'd suggest using VScode for any numerical calculation verification. 
## Online Calculators 
You can also use online calculators that will compare selectors and provide similar calculations to VS code.

Using the same example, If I put in the two selectors mentioned above into one such [calculator](https://specificity.keegan.st/) It will provide the same information, but in a bit more visual way:
![[Pasted image 20210301003600.png]]

## W3 Schools
W3 Schools has a wealth of specific information on [their website](https://www.w3schools.com/default.asp). If you wanted to look up to see if something is a pseudo element or a pseduo-class for example, you could search for that page and it would tell you all the details. 

They also have a ton of HTML and CSS information as well as interactive tutorials to use. 


# 5.0 - Forward to the Future
Now that you have your tools and an understanding of how specificity works and how it is calculated, you have everything you need to start diving in and working with CSS. 

While that is all there is to the core of understanding CSS specificity, I do, however, have more of this guide. I have 3 appendices to this guide, the first one which is a quick reference guide for all of the content we just covered. I highly recommend you grabbing some images and using them as a sort of cheat sheet. 

The second appendix is a list of some odd and interesting situations or occurrences with CSS and HTML interplay. This is optional and not necessary for understanding CSS. If you find it interesting, great. If you don't, you aren't missing much. 
Last but not least are some examples and frequently asked questions that I will expand and update as I get questions coming in. This is great for helping grok the content if you are a learner from examples.

I hope this guide has helped make you confident in your ability to work with rules and modifying them to have the desired effect. Knowing where to look and what the specificity number means can go a long way in helping you troubleshoot even the most enigmatic and stubborn CSS situations. 

# Appendix A: Quick Reference
Here is a quick reference to the categories and their associated references.

![[CSSspecificityreference.jpg]]
# Appendix B: Further Considerations
Many of these cases can be discovered using VS Code or other calculators or looking it up on W3, but I wanted to touch on a few nuanced items. These aren't necessary, and you honestly don't need to read them. I find it fascinating and put it here in case you do as well. Think of these things like the Simirillion. You don't need it to understand or enjoy the Lord of the Rings or the Hobbit. But if you want to go deeper... and don't mind some dryer content. Well go right ahead. 

Lets start by talking about attributes

## Attribute Clarifications
When looking at the format for how attributes are called in the HTML, you might have noticed that it looked familiar to something else. Consider the following example: 
```HTML
<div id="mainheader" class="header" layer="top">
```

How many attributes does this have? 
You might say that based on what we covered so far that this has 1 attribute, 1 class, and 1 ID. You may have noticed that I referred to classes as a specific type of attribute. You might also then wonder if IDs are also a certain kind of attribute. In all of these cases, you'd be correct. 

You might ask at this point "How can they all be attributes and differ in specificity at the same time. Don't those two contradict each other? The short answer is "Well yes, but actually no" 

The fully answer this, consider that up until this point we've been talking primarily about CSS specificity. HTML has been mentioned, but only how to find each type of selector. So lets look at how HTML attributes work.

### HTML Attributes 
HTML and CSS handle attributes differently. As far as HTML is concerned, the example above has three attributes. Remember we defined attributes as providing additional information about an element. Well, what is an ID or a class but additional information. As far as HTML syntax is concerned they are all attributes. They are, however, quite different in how they are used. 

First are IDs. These are attributes that are used as unique identifiers. If you have an element with the ID of "Heading" that attribute value is unique to that div. If you have multiple div's that you want to have the value of "Heading" thus grouping/linking them together, then you use the class attribute, not the ID attribute.  

### CSS Attributes
CSS is designed around these use cases. Specificity works differently for ID's and Attributes because of the different uses. 

The ID attribute has higher specificity in CSS because of how it is used as a unique identifier in HTML. You can, however, call the ID attribute as just an attribute with CSS thus lowering its specificity to match other attributes. 

Say we have a DIV element with the ID of "Bob". This div also has an attribute of "input" with the value of "text". Then let's say  and we call that div with the following CSS: 
```CSS
Div#bob{
	color: blue
	}

Div[ID="Bob"]{
	color:green
	}
	
Div[input="text"]{
	color:red
	}
```

The first rule will have a specificity of 0101 since it uses 1 ID and 1 element. 

The second will only have a specificity of 0011 since it called the ID as an attribute. 

The third likewise has a specificity of 0011 due to 1 attribute and 1 element. 

If all three of these are present, the color of the div will be blue. However, if the first rule was deleted, the other two would have the same specificity. Therefore, the most recent one (the third one) would take precedence and the div would be red, not green. 

This type of situation is where a solid understanding of the CSS will save you much frustration when you go to figure out why the div is red and not green.  


## Select All the Things
In CSS you can target very specific items. You can also select everything. Using an asterisk "\*" you can apply a rule to everything. As you may have guessed that selecting everything is not very specific. That guess is of course correct. As a result, the specificity number of the universal selector is zero. 

## Don't Select the things
One interesting mechanic is the ":not()" selector. This selector is a psuedo class that will reverse any selector or selectors inside.

For example, using ```:not(H1){color:red}``` will color red everything that is not an H1 element.

The specificity of the :not() pseudo class selector itself is zero and therefore doesn't add to the specificity. The overall specificity is then equal only to the selector(s) inside. 

In the above example, the H1 selector is one element and thus 0001. The :not() doesn't add anything so the total specificity for that rule is 0001. 


## Select Some of the things
Two interesting cases I found fascinating are the :is() and :where() selectors. Each will take whatever selectors you put inside and select any that are valid. The difference is that :where() always has a specificity of 0 while :is() has a specificity of the most specific of the valid selectors inside. This of course has some interesting ramifications, but is outside the scope of this guide so I won't go super into detail. If you are interested, however, you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)

You can deep dive into the inner workings of these type of things if you find it interesting, but it isn't required to use CSS. By using VS code or other calculators, you can easily check a given selector and use a bit of trial and error to get the result you want. 

# Appendix C: Examples 
OK, lets do a few examples. I find these help solidify the concepts and illustrate common behaviors of CSS/HTML that may not be intuitive at first. There are a few more nuances to discuss about CSS, but these will be easier to explain and understand while dealing with some real examples. 


## Example 1: Padding off the top
For a good example, lets look at what would happen if you wrote some CSS into a snippet for Obsidian that looked like this: 
```CSS 
body{
	 padding-top: 25px;
	 padding-right: 25px;
	 padding-left: 25px;
	 padding-bottom: 25px
}

body.theme-dark{
	padding: 40px
}
	
```

There are a few things going on here, so let's think about what will happen in each case. 

First off lets calculate the specificity for each selector: 
- The first selector targets just the body which is an element (digit 4). With no other items, we end up with (0,0,0,1)
- The second selector targets the body (same as above) but also includes the class (digit 3) theme-dark. Putting these together we get (0,0,1,1) which is higher than the first selector. 
- Third, we know from a previous example that the body has an inline style of "padding-top: 22px". Since it is an inline element (digit 1) the rule will have a specificity of (1,0,0,0) or so that will have a higher specificity (1000) than the rule of "padding-top: 25px" from the first selector (0001) since we aren't using any !important tags. 

Next let's look at the rules applied. You'll notice that on the second rule we are using a generic "padding: 30px" rule instead of "padding-top". You might think that using "padding-top" is more specific, however, this is a great illistration for how rules themselves behave. 

Specificity in CSS is determined not by the rules themselves. It is only determined by the selector(s). Each rule then will have the specificity of the selector in which they reside. (the one exception is the !important tag which only changes a rule heightening its specificity.)   

So how are these commands resolved? That is done by understanding shorthand rules. Some sets of rules can be called individually or in a group as part of a single rule. Here is an example of some commands for a border: 
```CSS
H1{
	border-style: solid;
	border-color: #000033;
	border-width: 3px;
}
```

Here we have three rules. Each one adjusts a specific attribute of the border. These can be combined using just "border:" as follows:
```CSS
H1{
	Border: solid 3px #000033;
	}
```

These will work the exact same. Both will have the same effect and specificity. 

The attribute of "padding: 10px" is likewise a short hand. It can be used to shorten the commands of  "padding-top", "padding-left", "padding-right", and padding-bottom" into one command. Here are some examples: 
```CSS
padding: 2px 3px 2px 3px;

padding: 2px 3px;

padding: 3px
```

If four values are used, such as the first example, the padding will be set to the coorosponding values in the following order: Top, Right, Bottom, Left. 

If only two values are used, the first value applies to top/bottom and the second applies to left/right

If only one value is used, that value applies to all four. 

