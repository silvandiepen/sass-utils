# Breakpoints

default:

```scss
$grid-breakpoints: (
  small: (
    0px,
    max(75ch, 720px),
  ),
  medium: (
    max(75ch, 720px),
    1280px,
  ),
  large: (
    1280px,
    9999px,
  ),
) !default;
```

**usage**

```scss
@media #{bp(small,only)} {
  // content
}

// or

@include breakpoint(small, only) {
  // content;
}
```
