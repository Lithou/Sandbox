# How do I....

## Create links for all items in a paragraph

1. v, i, p - visually select paragraph
2. ctrl+v to enter visual block mode
3. shift+i to insert 
4. \[\[ - to enter opening brackets 
5. Enter common page or skip if links are pages
6. esc - go back to normal mode


## Add something to the end of each line
 step| command | function
 ---|---|---
1|v,i,p|visually select paragraph
2| $ | select to end of line
3| shift+a |append to line
4| \]\] |text to append
5|esc|back to normal mode


## Make alias out of headers
Go to first line of section containing a link with header 

step| command | function
 ---|---|---
 1|q , a|start recording macro named "a"
2| f, \# | find instance of "#"
3| l | move to the right one space
4| v, f, \]|selects visual mod
