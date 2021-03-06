module.exports = {
    "extends": "stylelint-config-recommended-scss",
    "plugins": [
        "stylelint-scss",
        "stylelint-declaration-use-variable",
        "stylelint-order"
    ],
    "rules": {
        "indentation": 2,
        "max-empty-lines": 1,
        "no-eol-whitespace": true,
        "function-blacklist": ["calc"],
        "property-blacklist": ["float"],
        "declaration-block-no-shorthand-property-overrides": true,
        "declaration-block-no-redundant-longhand-properties": true,
        "shorthand-property-no-redundant-values": true,
        "font-family-no-duplicate-names": true,
        "string-no-newline": true,
        "unit-no-unknown": true,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-no-unknown": true,
        "selector-type-no-unknown": true,
        "comment-no-empty": true,
        "declaration-no-important": true,
        "no-duplicate-at-import-rules": true,
        "no-missing-end-of-source-newline": true,
        "no-duplicate-selectors": true,
        
        "block-opening-brace-space-before": "always",
        "block-closing-brace-newline-after": [
            "always", {
                "ignoreAtRules": [ "if", "else" ]
            }
        ],

        "at-rule-name-space-after": "always",
        "rule-empty-line-before": "always",
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "font-weight-notation": "named-where-possible",
        "sh-waqar/declaration-use-variable": [["/color/", "font-family"]],
        "scss/selector-no-redundant-nesting-selector": true,
        "declaration-empty-line-before": "never",
        "at-rule-empty-line-before": "never",
        "block-closing-brace-empty-line-before": "never",
        "order/order": [
			"custom-properties",
			"declarations"
		],
        "order/properties-order": [
            [
                "display",
                "position",
                "left",
                "right",
                "top",
                "bottom",
                "flex",
                "flex-basis",
                "flex-direction",
                "flex-flow",
                "flex-grow",
                "flex-shrink",
                "flex-wrap",
                "align-content",
                "align-items",
                "align-self",
                "justify-content",
                "height",
                "width",

                "margin",
                "margin-bottom",
                "margin-left",
                "margin-right",
                "margin-top",

                "padding",
                "padding-bottom",
                "padding-left",
                "padding-right",
                "padding-top",

                "border",
                "border-color",
                "border-style",
                "border-width",
                "border-radius",

                "border-bottom",
                "border-bottom-color",
                "border-bottom-left-radius",
                "border-bottom-right-radius",
                "border-bottom-style",
                "border-bottom-width",

                "border-top",
                "border-top-color",
                "border-top-left-radius",
                "border-top-right-radius",
                "border-top-style",
                "border-top-width",

                "border-left",
                "border-left-color",
                "border-left-style",
                "border-left-width",

                "border-right",
                "border-right-color",
                "border-right-style",
                "border-right-width",

                "text-align",

                "font",
                "font-family",
                "font-size",
                "font-style",
                "font-variant",
                "font-weight",

                "line-height",
                "box-shadow",

                "background",
                "background-attachment",
                "background-color",
                "background-image",
                "background-position",
                "background-repeat",

                "color", 
                "list-style", 
                "cursor", 
                "opacity", 
                "outline"
            ],
            { 
                unspecified: "bottomAlphabetical" 
            }
        ]
    }
}

