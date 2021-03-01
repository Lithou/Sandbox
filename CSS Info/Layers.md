10 - Sidedock
	- resize handles (generic)
	- workspace-ribbon
	- side-dock
15 - status-bar
	- Status-bar
	- Side bar resize handles 
		`
		.workspace-split.mod-left-split > .workspace-leaf-resize-handle
		.workspace-split.mod-right-split > .workspace-leaf-resize-handle
		'
	
``` CSS

body {
	--layer-sidedock: 10;
 	--layer-status-bar: 15;
 	--layer-dragged-item: 20;
	--layer-popover: 30;
	--layer-menu: 40;
	--layer-slides: 45;
	--layer-modal: 50;
	--layer-notice: 60;
	--layer-tooltip: 70;
}
```