---
archive: articles
archiveTitle: Functions & Mixins
---

# Color

### Defaults

| variable          | default                                 | options             | description                                               |
| ----------------- | --------------------------------------- | ------------------- | --------------------------------------------------------- |
| `$prefix`         | `""`                                    |                     | A prefix for all custom properties                        |
| `$color-type`     | `"hsla"`                                | `"hsla"` / `"rgba"` | type of colors to output                                  |
| `$color-shades`   | `false`                                 | `true` / `false`    | Output color shades                                       |
| `$color-props`    | `false`                                 | `true` / `false`    | Output all props for colors                               |
| `$color-text`     | `false`                                 | `true` / `false`    | Output all text variants for colors                       |
| `$colors`         | `()`                                    |                     | Set a $colors variable in the project to be used          |
| `$default-colors` | `( "dark": #000000, "light": #ffffff,)` |                     | Override the default colors, dark and light are necessary |

```scss
$prefix: "" !default;
$color-type: "hsla" !default;
$color-shades: false !default;
$color-props: false !default;
$color-text: false !default;
$colors: () !default;
$default-colors: (
  "dark": #000000,
  "light": #ffffff,
) !default;
```

## Usage Example

```scss
$colors: (
  "primary": red,
  "secondary": blue,
);

$color-type: "rgba";
$color-text: true;

@import "../index.scss";

$shades: ((25, 50, 75));

@media (prefers-color-scheme: dark) {
  :root {
    @include get-darkmode();
  }
}
@media (prefers-color-scheme: light) {
  :root {
    @include get-lightmode();
  }
}
```
