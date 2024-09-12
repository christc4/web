# XorgRaiseWindow

[The original author](https://www.linuxquestions.org/questions/linux-general-1/how-to-bring-up-application-window-to-front-from-shell-script-83545/)

In some xorg window managers, users have reported wmctrl not working out of the box. Since we are already using the x11/xlib library for our respective window managers, we can write a c++ program (see above for
original author), to raise windows. We then call this with a simple shell script and map this to a keypress.

<object data=".txt/totop.txt" width="432px" height="360px"></object>

When done run,

	c++ totop.cpp -L/usr/X11R6/lib -lX11 -o totop

We have named this program 'totop' as in to the top of the window stack

The shell script,

	id=$(xwininfo -name "st" | grep id: | awk "{ print \$4 }")
	totop $id

Alternatively you can ommit the second line, and only use the third with the id if you know it
