var IE_STATUS = [
    {
        "name": "<datalist> Element",
        "category": "User input",
        "link": "http://www.w3.org/html/wg/drafts/html/master/forms.html#the-list-attribute",
        "summary": "Shows a list of pre-defined options to suggest to the user when entering an input element.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "6090950820495360"
    },
    {
        "name": "<details>/<summary>",
        "category": "Misc",
        "link": "http://whatwg.org/html#the-details-element",
        "summary": "Interactive widget to show/hide content.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5348024557502464"
    },
    {
        "name": "<img srcset>",
        "category": "Misc",
        "link": "http://whatwg.org/html#attr-img-srcset",
        "summary": "Enable a responsive images solution by providing the browser multiple resources in varying resolutions for a single image.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4644337115725824"
    },
    {
        "name": "<picture> Element",
        "category": "Misc",
        "link": "http://picture.responsiveimages.org/",
        "summary": "Enable a responsive images solution by declaring multiple resources for an image using CSS media queries.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5910974510923776"
    },
    {
        "name": "<template> Element",
        "category": "Web Components",
        "link": "http://www.whatwg.org/specs/web-apps/current-work/multipage/scripting-1.html#the-template-element",
        "summary": "HTML template element to allow creating fragment of inert HTML as a prototype for stamping out DOM.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5207287069147136"
    },
    {
        "name": "a[download] attribute",
        "category": "File APIs",
        "link": "http://whatwg.org/html#downloading-resources",
        "summary": "When used on an <a>, this attribute signifies that the resource it points to should be downloaded by the browser rather than navigating to it.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6473924464345088"
    },
    {
        "name": "Animated WebP",
        "category": "Graphics",
        "link": "https://developers.google.com/speed/webp/docs/riff_container",
        "summary": "Support for animated WebP images",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4785074604081152"
    },
    {
        "name": "Application Cache",
        "category": "Graphics",
        "link": "http://whatwg.org/html/#applicationcache",
        "summary": "Enables web pages to work without the user being connected to the internet",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "6192449487634432"
    },
    {
        "name": "Audio and video tracks",
        "category": "Multimedia",
        "link": "http://www.w3.org/html/wg/drafts/html/CR/",
        "summary": "This adds the ability to get information about multiple audio and video tracks, and switch between them using the AudioTrack.enabled and VideoTrack.selected attributes.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh772592",
        "wpd": "",
        "id": "5748496434987008"
    },
    {
        "name": "Blending of background images",
        "category": "CSS",
        "link": "http://www.w3.org/TR/compositing-1/#background-blend-mode",
        "summary": "Offers more ways to blend between background images and background color.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5768037999312896"
    },
    {
        "name": "Blob",
        "category": "File APIs",
        "link": "http://dev.w3.org/2006/webapi/FileAPI/#dfn-Blob",
        "summary": "Allows you to construct Blobs directly (var blob = new Blob([\"1234\"], {type: 'text/plain'})). Blob() constructor also can take ArrayBufferView directly rather than constructing a blob with ArrayBuffer.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "5328783104016384"
    },
    {
        "name": "Block bindings (let, const, function)",
        "category": "JavaScript",
        "link": "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts",
        "summary": "Allows developers to explicitly qualify access to variables within a block.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn263046",
        "wpd": "",
        "id": "5891733057437696"
    },
    {
        "name": "Canvas",
        "category": "Graphics",
        "link": "http://whatwg.org/html#2dcontext",
        "summary": "Provides an API to draw 2D graphics",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "",
        "wpd": "",
        "id": "5100084685438976"
    },
    {
        "name": "Canvas context \"alpha\" attribute",
        "category": "Graphics",
        "link": "http://wiki.whatwg.org/wiki/CanvasOpaque",
        "summary": "Allow the specification of a 2D canvas with an opaque backing store (alpha: false). Speeds up compositing. Enables LCD text anti-aliasing.",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6454683010859008"
    },
    {
        "name": "Canvas focus ring",
        "category": "Graphics",
        "link": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#dom-context-2d-drawsystemfocusring",
        "summary": "Adds APIs to the canvas 2D context that make it possible to draw a focus ring around a canvas path and notify the operating system of the bounding box of the focused object for accessibility.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Under consideration",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6413769152397312"
    },
    {
        "name": "Canvas rendering from workers",
        "category": "Graphics",
        "link": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html#proxying-canvases-to-workers",
        "summary": "Render a Canvas object (2D or WebGL) from a web worker.",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5610258080727040"
    },
    {
        "name": "Compositing and Blending in Canvas 2D",
        "category": "Graphics",
        "link": "http://dev.w3.org/fxtf/compositing-1/#canvascompositingandblending",
        "summary": "The canvas 2d context has the globalCompositeOperation attribute that is used to set the current compositing and blending operator.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6119881720201216"
    },
    {
        "name": "Content Security Policy",
        "category": "Security",
        "link": "https://dvcs.w3.org/hg/content-security-policy/raw-file/tip/csp-specification.dev.html",
        "summary": "Allows you to create a whitelist of sources of trusted content, and instructs the browser to only execute or render resources from those sourcesA.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Under consideration",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5205088045891584"
    },
    {
        "name": "CSS calc()",
        "category": "CSS",
        "link": "http://www.w3.org/TR/css3-values",
        "summary": "Method of allowing calculated values for length units, i.e. width: calc(100% - 3em)",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "http://msdn.microsoft.com/library/ms537660#calc",
        "wpd": "",
        "id": "5765241438732288"
    },
    {
        "name": "CSS Device Adaptation",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css-device-adapt/",
        "summary": "The @viewport rule, in combination with media queries, enabled web developers to optimize the layout of sites and apps for different devices with minimal effort. It generalizes the viewport meta tag to CSS, while being much simpler to understand and without the quirks that exists with the meta tag.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "10",
            "ieUnprefixed": ""
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh708740",
        "wpd": "",
        "id": "4737164243894272"
    },
    {
        "name": "CSS touch-action",
        "category": "User input",
        "link": "https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html#the-touch-action-css-property",
        "summary": "New CSS property to enable websites to declaratively state how touches should be handled for purposes of scrolling and zooming.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "10",
            "ieUnprefixed": "11"
        },
        "msdn": "",
        "wpd": "",
        "id": "5912074022551552"
    },
    {
        "name": "CSS Variables",
        "category": "CSS",
        "link": "http://www.w3.org/TR/css-variables/",
        "summary": "Introduces cascading variables as a new primitive value type that is accepted by all CSS properties, and custom properties for defining them.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6401356696911872"
    },
    {
        "name": "CSS Will Change",
        "category": "CSS",
        "link": "http://tabatkins.github.io/specs/css-will-change/",
        "summary": "Adds a will-change CSS property, that can be used to signal that a particular property is likely to be changed in the future, or that an elementÃ¯Â¿Â½s content is likely to change.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5954199330226176"
    },
    {
        "name": "CSSOM View smooth scroll API",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/cssom-view",
        "summary": "Adds an optional argument to existing scroll APIs that specifies whether scrolling should be smooth. Also adds a CSS property for this.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5812155903377408"
    },
    {
        "name": "Custom Elements",
        "category": "Web Components",
        "link": "http://www.w3.org/TR/custom-elements/",
        "summary": "Method for registering (creating) custom elements in script.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4642138092470272"
    },
    {
        "name": "Dart VM",
        "category": "Misc",
        "link": "http://www.dartlang.org/docs/spec/latest/dart-language-specification.html",
        "summary": "Dart is a new web programming language with libraries, a virtual machine, and tools. It's designed to help developers build fast, structured modern web apps. Dart compiles to JavaScript to run across the entire modern web. The VM is a Chrome feature to optimize Dart's performance.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6682831673622528"
    },
    {
        "name": "Device Motion",
        "category": "Device",
        "link": "http://dev.w3.org/geo/api/spec-source-orientation.html#devicemotion",
        "summary": "Provides access to device's physical motion.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "",
        "wpd": "",
        "id": "5556931766779904"
    },
    {
        "name": "Device Orientation",
        "category": "Device",
        "link": "http://dev.w3.org/geo/api/spec-source-orientation.html",
        "summary": "Provides access to device's physical orientation",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn433240",
        "wpd": "",
        "id": "5874690627207168"
    },
    {
        "name": "devicePixelRatio on zoom",
        "category": "Device",
        "link": "http://dev.w3.org/csswg/cssom-view/#dom-window-devicepixelratio",
        "summary": "Update window.devicePixelRatio on full page zoom so that it accurately portraitists the ratio between css and device pixels.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "",
        "wpd": "",
        "id": "5269993591668736"
    },
    {
        "name": "DirectWrite on Windows",
        "category": "Graphics",
        "link": "",
        "summary": "Use DirectWrite instead of GDI for text on Windows.",
        "standardStatus": "De-facto standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "",
        "wpd": "",
        "id": "4725550652325888"
    },
    {
        "name": "DOM3 Keyboard Events",
        "category": "Graphics",
        "link": "http://www.w3.org/TR/DOM-Level-3-Events/",
        "summary": "KeyboardEvent: keydown, keyup",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "",
        "wpd": "",
        "id": "4748790720364544"
    },
    {
        "name": "DOM3 mouseenter & mouseleave Events",
        "category": "User input",
        "link": "https://dvcs.w3.org/hg/pointerevents/raw-file/tip/pointerEvents.html#the-touch-action-css-property",
        "summary": "New CSS property to enable websites to declaratively state how touches should be handled for purposes of scrolling and zooming.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "8"
        },
        "msdn": "",
        "wpd": "",
        "id": "4889528208719872"
    },
    {
        "name": "DOM3 Wheel Events",
        "category": "DOM",
        "link": "https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3-Events.html#events-wheelevents",
        "summary": "Implementation of the standard DOM Level 3 WheelEvent. Currently Blink implements a non standard mousewheel event with a very similar but incompatible API.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/ff974352",
        "wpd": "",
        "id": "5388191091654656"
    },
    {
        "name": "Drag and Drop Directories",
        "category": "File APIs",
        "link": "http://wiki.whatwg.org/wiki/DragAndDropEntries",
        "summary": "Allows dragging and dropping entire folders using HTML5 Drag and Drop. Extends the DataTransferItem with a method to get a FileEntry/DirectoryEntry.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Under consideration",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5733953138851840"
    },
    {
        "name": "Encoding API",
        "category": "Misc",
        "link": "http://encoding.spec.whatwg.org/",
        "summary": "Script API to allow encoding/decoding of strings from binary data. Common scenario: decoding a binary data file fetched via XHR into an ArrayBuffer that contains strings encoded as UTF-8.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5714368087982080"
    },
    {
        "name": "Encrypted Media Extensions",
        "category": "Multimedia",
        "link": "https://dvcs.w3.org/hg/html-media/raw-file/default/encrypted-media/encrypted-media.html",
        "summary": "Defines a common API that may be used to discover, select and interact with such systems as well as with simpler content encryption systems.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "11",
            "ieUnprefixed": ""
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/bg182646#eme",
        "wpd": "",
        "id": "6578378068983808"
    },
    {
        "name": "Exclusions",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css-exclusions/",
        "summary": "Define areas inline content should avoid, and how inline content should wrap around them.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "10",
            "ieUnprefixed": ""
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh772711",
        "wpd": "",
        "id": "6296903092273152"
    },
    {
        "name": "Filters",
        "category": "CSS",
        "link": "https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html",
        "summary": "Apply (SVG-like) filter effects to arbitrary DOM elements.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5822463824887808"
    },
    {
        "name": "Flexbox",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css-flexbox/",
        "summary": "A CSS box model optimized for user interface design. In the flex layout model, the children of a flex container can be laid out in any direction, and can \"flex\" their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "10",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/bg124109",
        "wpd": "",
        "id": "4837301406400512"
    },
    {
        "name": "Fullscreen API",
        "category": "Misc",
        "link": "https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html",
        "summary": "Programmatically instruct content on the page to be presented in the browser's full screen (kiosk) mode.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn265028",
        "wpd": "",
        "id": "5259513871466496"
    },
    {
        "name": "GamePad API",
        "category": "Device",
        "link": "https://dvcs.w3.org/hg/gamepad/raw-file/default/gamepad.html",
        "summary": "Gives JS access to a game controller via USB.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5118776383111168"
    },
    {
        "name": "Generated Content for Paged Media Module",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css3-gcpm/",
        "summary": "CSS properties helpful for printed publication. We only implement paged-x / paged-y from the whole spec.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5400251359821824"
    },
    {
        "name": "Geolocation",
        "category": "Device",
        "link": "http://www.w3.org/TR/geolocation-API/",
        "summary": "Provides access to device's physical location",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "http://msdn.microsoft.com/en-in/ie/hh410106#_HTML5_geolocation",
        "wpd": "",
        "id": "6348855016685568"
    },
    {
        "name": "getUserMedia",
        "category": "Multimedia",
        "link": "http://dev.w3.org/2011/webrtc/editor/getusermedia.html",
        "summary": "Local component of WebRTC",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Under consideration",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6067380039974912"
    },
    {
        "name": "Gradients",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css3-images/",
        "summary": "Gradients provide a method to, over a customizable amount of space, transition from one color to another.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh673532",
        "wpd": "",
        "id": "5785905063264256"
    },
    {
        "name": "Grid",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css3-grid-layout/",
        "summary": "A two-dimensional grid-based layout system, optimized for user interface design.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "10",
            "ieUnprefixed": ""
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh673533",
        "wpd": "",
        "id": "4589636412243968"
    },
    {
        "name": "HTML Imports",
        "category": "Web Components",
        "link": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/imports/index.html",
        "summary": "Import HTML documents into other HTML documents.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5144752345317376"
    },
    {
        "name": "HTTP Client Hints",
        "category": "Network / Connectivity",
        "link": "https://github.com/igrigorik/http-client-hints/blob/master/draft-grigorik-http-client-hints-00.txt",
        "summary": "Header for proactive content negotiation; just as the Accept header allowed clients to indicate what formats they prefer, Client Hints allow clients to indicate a list of device and agent specific preferences.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5504430086553600"
    },
    {
        "name": "HTTP Strict Transport Security (HSTS)",
        "category": "Network / Connectivity",
        "link": "http://tools.ietf.org/html/rfc6797",
        "summary": "Header to inform the browser to always request a given domain over SSL, reducing MITM attack surface area.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Under consideration",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4941480133132288"
    },
    {
        "name": "HTTP/2 (SPDY)",
        "category": "Network / Connectivity",
        "link": "http://http2.github.io/http2-spec",
        "summary": "A fast, open protocol for transporting web content.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "",
        "wpd": "",
        "id": "5152586365665280"
    },
    {
        "name": "iframe[sandbox] attribute",
        "category": "Misc",
        "link": "http://whatwg.org/html#attr-iframe-sandbox",
        "summary": "Method of running external site pages with reduced privileges (i.e. no JavaScript) in iframes (<iframe sandbox=\"allow-same-origin allow-forms\" src=\"...\"></iframe>)",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh673561",
        "wpd": "",
        "id": "5715536319086592"
    },
    {
        "name": "iframe[seamless] attribute",
        "category": "Misc",
        "link": "http://whatwg.org/html#attr-iframe-seamless",
        "summary": "The seamless attribute is used to embed and <iframe> in the calling page without scrollbars or borders (e.g. seamlessly)",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6630329993396224"
    },
    {
        "name": "iframe[srcdoc] attribute",
        "category": "Misc",
        "link": "http://whatwg.org/html#attr-iframe-srcdoc",
        "summary": "Gives the content of an iframe as a src context to embed (e.g. <iframe seamless srcdoc=\"<b>Hello World</b>\"></iframe>).",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5222955109842944"
    },
    {
        "name": "IME API",
        "category": "User input",
        "link": "https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3-Events.html#events-mouseevents",
        "summary": "MouseEvents dispatched when a pointing device is moved onto or off of an Element or one of its descendents. Similar to mouseover and mouseout respectively, but are not cancelable and are not dispatched more than one \"round-trip\" into an Element's boundary.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "11",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6366722080636928"
    },
    {
        "name": "IndexedDB",
        "category": "Misc",
        "link": "https://dvcs.w3.org/hg/IndexedDB/raw-file/tip/Overview.html",
        "summary": "An asynchronous client-side storage API offering fast access to large amounts of structured data",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh673548",
        "wpd": "",
        "id": "6507459568992256"
    },
    {
        "name": "Map",
        "category": "JavaScript",
        "link": "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts",
        "summary": "Map objects are simple key/value maps.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn263029",
        "wpd": "",
        "id": "4818609708728320"
    },
    {
        "name": "Masks",
        "category": "CSS",
        "link": "https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html",
        "summary": "Allows hiding of portions of a visible elements.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5381559662149632"
    },
    {
        "name": "matchMedia",
        "category": "DOM",
        "link": "http://dev.w3.org/csswg/cssom-view/#widl-Window-matchMedia-MediaQueryList-DOMString-query",
        "summary": "API for testing if a given media query will apply.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh772743",
        "wpd": "",
        "id": "4677872220372992"
    },
    {
        "name": "MathML",
        "category": "Misc",
        "link": "http://www.w3.org/TR/MathML3/",
        "summary": "An application of XML for describing mathematical notations and capturing both its structure and content.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5240822173794304"
    },
    {
        "name": "Media Queries: resolution feature",
        "category": "CSS",
        "link": "http://www.w3.org/TR/css3-mediaqueries/#resolution",
        "summary": "Allows to query the device pixel count per CSS unit",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "http://msdn.microsoft.com/en-in/ie/hh393506#_CSS3_Media_Queries",
        "wpd": "",
        "id": "5944509615570944"
    },
    {
        "name": "Media Source Extensions",
        "category": "Multimedia",
        "link": "https://dvcs.w3.org/hg/html-media/raw-file/tip/media-source/media-source.html",
        "summary": "Allows appending data to an <audio>/<video> element.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/bg182646#mse",
        "wpd": "",
        "id": "4563797888991232"
    },
    {
        "name": "MediaRecorder",
        "category": "Multimedia",
        "link": "http://www.w3.org/TR/mediastream-recording/",
        "summary": "Encode audio and video streams in the browser.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5929649028726784"
    },
    {
        "name": "Microdata",
        "category": "Misc",
        "link": "http://whatwg.org/html#microdata-dom-api",
        "summary": "Microdata is used to nest semantics within existing content on web pages.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "No plans to support",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6428569609699328"
    },
    {
        "name": "mix-blend-mode",
        "category": "CSS",
        "link": "http://dev.w3.org/fxtf/compositing-1/",
        "summary": "Provides a way to blend an HTML or SVG element with its backdrop",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6362616360337408"
    },
    {
        "name": "Multi-column (full support)",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css-multicol/",
        "summary": "Bring Blink's multicol support to a level that matches other engines' (Presto and Trident)",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh673534",
        "wpd": "",
        "id": "6526151266664448"
    },
    {
        "name": "Mutation Observers",
        "category": "DOM",
        "link": "http://dom.spec.whatwg.org/#mutation-observers",
        "summary": "Provides notifications when DOM nodes are rearranged or modified.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn265034",
        "wpd": "",
        "id": "5021194726146048"
    },
    {
        "name": "Navigation Timing API",
        "category": "Performance",
        "link": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/NavigationTiming/Overview.html",
        "summary": "Allows web applications to access timing information related to navigation and elements.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh673552",
        "wpd": "",
        "id": "5584144679567360"
    },
    {
        "name": "NPAPI plug-in support",
        "category": "Misc",
        "link": "",
        "summary": "NPAPIÃ¯Â¿Â½s 90s-era architecture has become a leading cause of hangs, crashes, security incidents, and code complexity in Chrome. Because of this, Chrome will be phasing out NPAPI support in 2013.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "No plans to support",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5316559090221056"
    },
    {
        "name": "Opus in MSE and <video>",
        "category": "Multimedia",
        "link": "http://wiki.xiph.org/MatroskaOpus",
        "summary": "Ability to play the open source WebRTC preferred audio codec - Opus in MSE and <video> tags on the for the webM and matroska containers. Please note that we have had Opus support in chromium since M25. This change enables Opus playback on MSE and <video> tags.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4891189287321600"
    },
    {
        "name": "Page Visibility API",
        "category": "DOM",
        "link": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/PageVisibility/Overview.html",
        "summary": "Provides an API to ask whether the current tab is visible or not. If you, you might want to throttle back action or set an idle state.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/library/ie/hh673553",
        "wpd": "",
        "id": "5689697795833856"
    },
    {
        "name": "Parse SVG as HTML",
        "category": "Multimedia",
        "link": "http://www.w3.org/TR/SVG/implnote.html#ErrorProcessing",
        "summary": "Switch all SVG parsing to use the HTML parser.",
        "standardStatus": "No public standards discussion",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5630599045840896"
    },
    {
        "name": "Pointer Events",
        "category": "User input",
        "link": "http://www.w3.org/html/wg/drafts/html/master/forms.html#attr-fe-inputmode",
        "summary": "The inputmode content attribute is an enumerated attribute that specifies what kind of input mechanism would be most helpful for users entering content into the form control.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "10",
            "ieUnprefixed": "11"
        },
        "msdn": "",
        "wpd": "",
        "id": "4504699138998272"
    },
    {
        "name": "Pointer Lock (Mouse Lock)",
        "category": "Misc",
        "link": "https://dvcs.w3.org/hg/pointerlock/raw-file/default/index.html",
        "summary": "Gives access to raw mouse movement, locks the target of mouse events to a single element, eliminates limits of how far mouse movement can go in a single direction, and removes the cursor from view. Obvious use cases are for first person or real time strategy games.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6753200417800192"
    },
    {
        "name": "Portable Native Client (PNaCl)",
        "category": "Multimedia",
        "link": "",
        "summary": "Run C/C++ code compiled to LLVM bitcode on any web page. The code runs inside the Native Client sandbox and has access to the same capabilities as JavaScript via the Pepper APIs.",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "No plans to support",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6193548999262208"
    },
    {
        "name": "position: sticky",
        "category": "CSS",
        "link": "http://lists.w3.org/Archives/Public/www-style/2012Jun/0627.html",
        "summary": "position: sticky is a new way to position elements and is conceptually similar to position: fixed. The difference is that a stickily positioned element behaves like position: relative within its parent, until a given offset threshold is met.",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6190250464378880"
    },
    {
        "name": "postMessage",
        "category": "Multimedia",
        "link": "http://whatwg.org/html#dom-window-postmessage",
        "summary": "Safely enables cross-origin communication.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "8"
        },
        "msdn": "",
        "wpd": "",
        "id": "4786174115708928"
    },
    {
        "name": "QUIC",
        "category": "Network / Connectivity",
        "link": "https://docs.google.com/a/chromium.org/document/d/1RNHkx_VvKWyWg6Lr8SZ-saqsQx7rFV-ev2jRFUoVD34/edit",
        "summary": "An experimental, UDP-based QUIC transport protocol",
        "standardStatus": "No public standards discussion",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5338403830759424"
    },
    {
        "name": "Quota Management API",
        "category": "Multimedia",
        "link": "http://www.w3.org/TR/quota-api/",
        "summary": "This API can be used to check how much quota an app/origin is using.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6218562888794112"
    },
    {
        "name": "Regions",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css3-regions/",
        "summary": "Magazine-like content flow into specified regions.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "10",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5655612935372800"
    },
    {
        "name": "requestAnimationFrame()",
        "category": "Graphics",
        "link": "https://dvcs.w3.org/hg/webperf/raw-file/default/specs/RequestAnimationFrame/Overview.html",
        "summary": "Offload animation repainting to browser for optimized performance. You should call this method whenever you're ready to update your animation onscreen. This will request that your animation function be called before the browser performs the next repaint.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/hh920765",
        "wpd": "",
        "id": "5233400470306816"
    },
    {
        "name": "requestAutocomplete()",
        "category": "Misc",
        "link": "http://lists.whatwg.org/htdig.cgi/whatwg-whatwg.org/2012-October/037711.html",
        "summary": "Allows a form to be filled out on demand by the browser's autofill. Particularly for mobile applications, this solves the problem of working with long or even multi-page forms. For merchants, this results in improved conversion rates, sorely needed in mobile purchase scenarios.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5092662981951488"
    },
    {
        "name": "Resource Timing API",
        "category": "Performance",
        "link": "http://www.w3c-test.org/webperf/specs/ResourceTiming/",
        "summary": "Allows web applications to access timing information related to HTML elements.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5796350423728128"
    },
    {
        "name": "Sending Messages to Extensions",
        "category": "Misc",
        "link": "",
        "summary": "Expose a Chrome-specific API to allow websites to send messages to extensions. Only exposed to websites whitelisted by an installed extension.",
        "standardStatus": "No public standards discussion",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4670450516885504"
    },
    {
        "name": "Service Worker",
        "category": "Offline / Storage",
        "link": "https://github.com/slightlyoff/ServiceWorker/",
        "summary": "ServiceWorkers (formerly Navigation Controllers) are a new system that provides event-driven scripts that run independent of web pages. They are similar to SharedWorkers except that their lifetime is different and they have access to domain-wide events such as network fetches.",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6561526227927040"
    },
    {
        "name": "Set",
        "category": "JavaScript",
        "link": "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts",
        "summary": "Set objects let you store unique values of any type, whether primitive values or object references.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn263029",
        "wpd": "",
        "id": "4916191365693440"
    },
    {
        "name": "Shadow DOM",
        "category": "Web Components",
        "link": "https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/shadow/index.html",
        "summary": "Enables DOM tree encapsulation. Without it, widgets may inadvertently break pages by using conflicting CSS selectors, class or id names, or JavaScript variables.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5479141319114752"
    },
    {
        "name": "SrcN",
        "category": "Misc",
        "link": "http://tabatkins.github.io/specs/respimg/Overview.html",
        "summary": "SrcN is a responsive images solution which addresses all 3 major use-cases within a single syntax. It addresses DPR switching (like srcset), art-direction (like picture) and viewport dimensions based switching.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4582090154704896"
    },
    {
        "name": "Streams API",
        "category": "File APIs",
        "link": "https://dvcs.w3.org/hg/streams-api/raw-file/tip/Overview.htm",
        "summary": "An API for representing binary data in web applications as a Stream object.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "10",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6605041225957376"
    },
    {
        "name": "Subpixel font scaling",
        "category": "Graphics",
        "link": "",
        "summary": "Allow sub-css-pixel font-sizes and thus smooth font scaling.",
        "standardStatus": "De-facto standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "",
        "wpd": "",
        "id": "6259163214643200"
    },
    {
        "name": "SVG2",
        "category": "Graphics",
        "link": "https://svgwg.org/svg2-draft/single-page.html",
        "summary": "Implement the new SVG2 features.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5760616295825408"
    },
    {
        "name": "TLS 1.2",
        "category": "Network / Connectivity",
        "link": "http://tools.ietf.org/html/rfc5246",
        "summary": "The latest version of the Transport Layer Security (TLS) protocol. Uses asymmetric cryptography to assure who is communicating, and to exchange a symmetric key. This session key is then used to encrypt data flowing between the parties. This allows for data/message confidentiality, and message authentication codes for message integrity and as a by-product message authentication.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5197666342404096"
    },
    {
        "name": "Track element",
        "category": "Multimedia",
        "link": "http://whatwg.org/html#the-track-element",
        "summary": "Add subtitles, captions, screen reader descriptions, chapters and other types of timed metadata to video and audio. Chrome currently supports the WebVTT format for track data.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/bg123962",
        "wpd": "",
        "id": "6719115557339136"
    },
    {
        "name": "Transforms",
        "category": "CSS",
        "link": "http://dev.w3.org/csswg/css3-transforms/",
        "summary": "Enables changing the position of content in 3D space without disrupting the normal flow.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "9"
        },
        "msdn": "",
        "wpd": "",
        "id": "6437640580628480"
    },
    {
        "name": "Typed Arrays",
        "category": "Performance",
        "link": "http://www.khronos.org/registry/typedarray/specs/latest/",
        "summary": "Buffers for holding binary data and working with WebGL & Audio API: ArrayBuffer, Float32Array , Int16Array, Uint8Array, etc.)",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "5135818813341696"
    },
    {
        "name": "UIEvents (DOM4) Keyboard Events",
        "category": "Multimedia",
        "link": "https://dvcs.w3.org/hg/d4e/raw-file/tip/source_respec.htm",
        "summary": "Identify the physical key being pressed; Query key from layout.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5593215650496512"
    },
    {
        "name": "URL",
        "category": "DOM",
        "link": "http://url.spec.whatwg.org/",
        "summary": "Expose constructible URL objects that can be manipulated and combined.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5675829346435072"
    },
    {
        "name": "User Timing API",
        "category": "Performance",
        "link": "https://dvcs.w3.org/hg/webperf/raw-file/tip/specs/UserTiming/Overview.html",
        "summary": "Helps web developers measure the performance of their applications by giving them access to high precision timestamps.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "5066549580791808"
    },
    {
        "name": "Vibration API",
        "category": "Device",
        "link": "http://dev.w3.org/2009/dap/vibration/",
        "summary": "This specification defines an API that provides access to the vibration mechanism of the hosting device. Vibration is a form of tactile feedback. Note this feature is only available on Android.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5698768766763008"
    },
    {
        "name": "VP9",
        "category": "Multimedia",
        "link": "http://tools.ietf.org/html/draft-grange-vp9-bitstream",
        "summary": "VP9 is an open and royalty free video compression standard.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6362186595172352"
    },
    {
        "name": "WeakMap",
        "category": "JavaScript",
        "link": "http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts",
        "summary": "WeakMaps are key/value maps in which keys are objects.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/dn251546",
        "wpd": "",
        "id": "4572868859920384"
    },
    {
        "name": "Web Animations JavaScript API",
        "category": "Graphics",
        "link": "http://www.w3.org/TR/web-animations/",
        "summary": "A unified model for supporting animation and synchronization on the Web platform.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4854343836631040"
    },
    {
        "name": "Web Crypto API",
        "category": "Security",
        "link": "https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html",
        "summary": "JavaScript bindings for cryptographic operations",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Prefixed",
            "iePrefixed": "11",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5030265697075200"
    },
    {
        "name": "Web MIDI API",
        "category": "Multimedia",
        "link": "http://webaudio.github.com/web-midi-api/",
        "summary": "Defines an API supporting the MIDI protocol, enabling web applications to enumerate and select MIDI input and output devices on the client system and send and receive MIDI messages.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4923613069180928"
    },
    {
        "name": "Web Notifications",
        "category": "Multimedia",
        "link": "http://www.w3.org/TR/notifications/",
        "summary": "An API for displaying simple notifications to the user.",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5064350557536256"
    },
    {
        "name": "Web Speech API (input)",
        "category": "Multimedia",
        "link": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html",
        "summary": "Enables web developers to incorporate speech recognition into their web pages.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "5908775487668224"
    },
    {
        "name": "Web Speech API (synthesis)",
        "category": "Multimedia",
        "link": "https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html",
        "summary": "Enables web developers to incorporate speech synthesis into their web pages. Uses whatever the platform provides for synthesis.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "4782875580825600"
    },
    {
        "name": "Web SQL Database",
        "category": "Multimedia",
        "link": "http://www.w3.org/TR/webdatabase/",
        "summary": "API exposing an SQLite database",
        "standardStatus": "No public standards discussion",
        "ieStatus": {
            "text": "No plans to support",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6330987952734208"
    },
    {
        "name": "Web Storage",
        "category": "Multimedia",
        "link": "http://whatwg.org/html#webstorage",
        "summary": "Refers to both localStorage and sessionStorage",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "8"
        },
        "msdn": "",
        "wpd": "",
        "id": "5345825534246912"
    },
    {
        "name": "WebGL  (Canvas 3D)",
        "category": "Graphics",
        "link": "http://www.khronos.org/registry/webgl/specs/latest/",
        "summary": "3D rendering via the <canvas> element. ",
        "standardStatus": "Established standard",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "11"
        },
        "msdn": "http://msdn.microsoft.com/en-us/library/ie/bg182648",
        "wpd": "",
        "id": "6049512976023552"
    },
    {
        "name": "WebP image format support",
        "category": "Graphics",
        "link": "https://developers.google.com/speed/webp/docs/riff_container",
        "summary": "WebP is an image format that provides lossless and lossy compression for images on the web. WebP lossless images are 26% smaller in size compared to PNGs; lossy is 35% smaller than JPEG.",
        "standardStatus": "Public discussion",
        "ieStatus": {
            "text": "Not currently planned",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6471725441089536"
    },
    {
        "name": "WebRTC",
        "category": "Multimedia",
        "link": "http://dev.w3.org/2011/webrtc/editor/webrtc.html",
        "summary": "Real-time communication in the browser.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6612462929444864"
    },
    {
        "name": "WebSocket",
        "category": "Network / Connectivity",
        "link": "http://dev.w3.org/html5/websockets/",
        "summary": "The WebSocket JavaScript API provides a simple API for bi-directional communication with web servers. The WebSocket network protocol enables low overhead bi-directional communication with web servers over a persistent TCP connection.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "6555138000945152"
    },
    {
        "name": "WOFF 2.0 (improved font compression)",
        "category": "Misc",
        "link": "https://code.google.com/p/font-compression-reference/source/browse/brotli/brotlispec.txt",
        "summary": "WOFF 2.0 significantly improves font compression. We are seeing average gains of 24% with peaks above 50% in particular for the larger fonts such as those typically used by CJK languages (analysis ran on the whole Google Fonts corpus). M33: switching to Brotli Compression Algorithm (instead of LZMA). M35: sent web facing change PSA prior to enabling by default.",
        "standardStatus": "Editor's draft",
        "ieStatus": {
            "text": "Researching",
            "iePrefixed": "",
            "ieUnprefixed": ""
        },
        "msdn": "",
        "wpd": "",
        "id": "6718644721549312"
    },
    {
        "name": "XMLHttpRequest timeout",
        "category": "Network / Connectivity",
        "link": "https://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html",
        "summary": "Exposing the XHR timeout property and sending corresponding events such as ontimeout.",
        "standardStatus": "Working draft or equivalent",
        "ieStatus": {
            "text": "Shipped",
            "iePrefixed": "",
            "ieUnprefixed": "10"
        },
        "msdn": "",
        "wpd": "",
        "id": "6290890138058752"
    }
]