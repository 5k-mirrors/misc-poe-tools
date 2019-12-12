# Filter sound generator

Create google project, enable TTS, get key, save it in the folder as `credentials.json`.

```sh
npm run start
cp output/*.mp3 ...
```

The generated sounds are low volume compared to the maximum setting (300) of the default sounds. The maximum is often used. Lower these sounds in the filter by e.g. search & replacing them in VSCode:
- `PlayAlertSound ([0-9]*) 300` -> `PlayAlertSound $1 100`
- `PlayAlertSoundPositional ([0-9]*) 300` -> `PlayAlertSoundPositional $1 100`

And don't forget to compensate for this in the sound settings.

The code to be added to the filter will be printed on screen. E.g.

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

## TODO

- Add chrome stuff for early on
- Limit colors to 1h caster stuff and non-body armour armours (4-links can be armours)
