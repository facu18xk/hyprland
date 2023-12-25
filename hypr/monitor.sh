#!/bin/bash
# This is a simple Bash script
monitor=$(wlr-randr | grep "HDMI")
if [[ -n "$monitor" ]]; then 
	wlr-randr --output eDP-1 --off
fi
