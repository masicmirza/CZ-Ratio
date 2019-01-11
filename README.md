# CZ-Ratio jQuery Plugin

Simple and tiny jQuery plugin for keeping/setting ratio of an element.

## Description
This simple plugin is easy to use (only two options) and with it you can set the ratio (whichever you want) to any element you chose. There are two options for adjusting the results according to your needs. The plugin is tiny - just **369 bytes** gzipped or **586 bytes** without gzip (minified version).

## Demo
* For live demo see [JSFiddle](https://jsfiddle.net/mirzamasic/60vsbLkt/)

## Requirements
* jQuery 1.9.1+

## Installation
* Include necessary JS files

```
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="path-to-file/CZ-Ratio_jQuery-min.js"></script>
```

## Options

### ratio
* **Description**: The ratio you want your element to be in.
* **Data type**: string
* **Default value**: none
* **Required**: yes
* **Example value**: '16-9' | '4-3' | '1-1'

### keep
* **Description**: The element's side you want to keep, and to calculate ratio according to it. Also, you can choose to keep longer or shorter side as well.
* **Data type**: string
* **Default value**: 'w'
* **Required**: no
* **Possible values**:
  * 'w' | 'W' for width
  * 'h' | 'H' for height
  * 'l' | 'L' for longer
  * 's' | 'S' for shorter

## Usage
Example code:

```
    // Minimum setup with only required options, calculating 16-9 ratio
    $('#some-element').CZRatio({
        ratio: '16-9'
    });

    // Setup with both options set, calculating 16-9 ratio while keeping longer side
    $('#some-element').CZParallax({
        ratio: '16-9',
        keep: 'l'
    });
```

## License

The expandable plugin is licensed under the MIT License.

Copyright (c) 2019 Mirza Mašić