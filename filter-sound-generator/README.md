# Filter sound generator

Create google project, enable TTS, get key.

`export GOOGLE_APPLICATION_CREDENTIALS=credentials.json`

To the filter add something like

```
Show
	SocketGroup BBB
	ItemLevel <= 12
	SetFontSize 45
	SetTextColor 255 0 0 255                # TEXTCOLOR:	 T0 Item
	SetBorderColor 255 0 0 255              # BORDERCOLOR:	 T0 Item
	SetBackgroundColor 255 255 255 255      # BACKGROUND:	 T0 Drop
	PlayEffect Red
	MinimapIcon 0 Red Star
CustomAlertSound "bbb.mp3"
```
