# Imagemagick

<img src=".pix/imagemagick_wizard.avif" style="width:410px; height: auto;">

## Remove Whitespace

convert -trim

# Flip images

To flip vertically

`convert input.jpg -flip output.jpg`

To flip horizontally

`convert input.jpg -flop output.jpg`

# Dithering

`convert gnu_tux.webp -resize 384 -dither FloydSteinberg -remap pattern:gray50 gnu_tux.webp`

`convert invader.webp -colorspace gray -ordered-dither o8x8 invader2.webp`

# Rotate

## Anti-clockwise

`convert dumbbell.jpg -rotate -90 dumbbell1.jpg`

## Clockwise

Same command as before but! omit the `-` before `90`
