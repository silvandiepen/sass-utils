# Custom properties







### get-props

type: `Mixin`
sub: `get-props-hsla`, `get-props-rgba`

**usage:**

```scss
$color-type: "rgba";

@include get-props("primary", #ff9900);
```

**result:**

```css
--primary-r: 255;
--primary-g: 153;
--primary-b: 0;
--primary-a: 1;
```

### get-base

type: `Mixin`
sub: `get-props-hsla`, `get-props-rgba`

**usage:**

```scss
$color-type: "rgba";

@include get-base("primary", #ff9900);
```

**result:**

```css
--primary: rgba(
  var(--primary-r, 255),
  var(--primary-g, 153),
  var(--primary-b, 0),
  var(--primary-a, 1)
);
```

### get-text

type: `Mixin`

Returns with the dark or light color defined, which is furthest away from the requested color

**usage:**

```scss
$color-type: "rgba";

@include get-text("primary", #ff9900);
```

**result:**

```css
--primary-text-r: var(--light-r, 255);
--primary-text-g: var(--light-g, 255);
--primary-text-b: var(--light-b, 255);
--primary-text-a: var(--light-a, 255);
--primary-text: rgba(
  var(--primary-text-r, 255),
  var(--primary-text-g, 255),
  var(--primary-text-b, 255),
  var(--primary-text-a, 1)
);
```

### get-color

type: Function

### get-colors

type: Mixin

### get-color-shades

type: Mixin

### get-darkmode

type: Mixin

### get-lightmode

type: Mixin
