
var settableProperties = [
    "background_color",
    "foreground_color",
    "highlight_color",
    "border_color",
    "input_fontsize",
    "item_title_fontsize",
    "item_description_fontsize",
    "icon_size",
    "max_items",
    "font_name",
    "space",
    "settingsbutton_size",
    "window_width"
];

var presets = {
    "Bright": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#404040",
        "border_color": "#80808080"
    },
    "BrightOrange": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#E07000",
        "border_color": "#80FF8000"
    },
    "BrightMagenta": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#E00070",
        "border_color": "#80FF0080"
    },
    "BrightMint": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#00c060",
        "border_color": "#8000FF80"
    },
    "BrightGreen": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#60c000",
        "border_color": "#8080FF00"
    },
    "BrightBlue": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#80c0ff",
        "border_color": "#800080FF"
    },
    "BrightViolet": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#FFFFFF",
        "foreground_color": "#808080",
        "highlight_color": "#C080FF",
        "border_color": "#808000FF"
    },
    "Dark": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#E0E0E0",
        "border_color": "#80808080"
    },
    "DarkOrange": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#FF9020",
        "border_color": "#80FF8000"
    },
    "DarkMagenta": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#FF2090",
        "border_color": "#80FF0080"
    },
    "DarkMint": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#20FF90",
        "border_color": "#8000FF80"
    },
    "DarkGreen": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#90FF20",
        "border_color": "#8080FF00"
    },
    "DarkBlue": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#2090FF",
        "border_color": "#800080FF"
    },
    "DarkViolet": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#404040",
        "foreground_color": "#808080",
        "highlight_color": "#A040FF",
        "border_color": "#808000FF"
    },
    "SolarizedBrightYellow": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#b58900",
        "border_color": "#80b58900"
    },
    "SolarizedBrightOrange": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#cb4b16",
        "border_color": "#80cb4b16"
    },
    "SolarizedBrightRed": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#dc322f",
        "border_color": "#80dc322f"
    },
    "SolarizedBrightMagenta": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#d33682",
        "border_color": "#80d33682"
    },
    "SolarizedBrightViolet": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#6c71c4",
        "border_color": "#806c71c4"
    },
    "SolarizedBrightBlue": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#268bd2",
        "border_color": "#80268bd2"
    },
    "SolarizedBrightCyan": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#2aa198",
        "border_color": "#802aa198"
    },
    "SolarizedBrightGreen": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#fdf6e3",
        "foreground_color": "#839496",
        "highlight_color": "#859900",
        "border_color": "#80859900"
    },
    "SolarizedDarkYellow": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#b58900",
        "border_color": "#80b58900"
    },
    "SolarizedDarkOrange": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#cb4b16",
        "border_color": "#80cb4b16"
    },
    "SolarizedDarkRed": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#dc322f",
        "border_color": "#80dc322f"
    },
    "SolarizedDarkMagenta": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#d33682",
        "border_color": "#80d33682"
    },
    "SolarizedDarkViolet": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#6c71c4",
        "border_color": "#806c71c4"
    },
    "SolarizedDarkBlue": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#268bd2",
        "border_color": "#80268bd2"
    },
    "SolarizedDarkCyan": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#2aa198",
        "border_color": "#802aa198"
    },
    "SolarizedDarkGreen": {
        "input_fontsize": 36,
        "item_title_fontsize": 26,
        "item_description_fontsize": 12,
        "icon_size": 48,
        "max_items": 5,
        "space": 6,
        "settingsbutton_size": 15,
        "window_width": 640,
        "background_color": "#002b36",
        "foreground_color": "#839496",
        "highlight_color": "#859900",
        "border_color": "#80859900"
    }
}
