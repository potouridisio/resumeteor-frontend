import { Global } from "@emotion/core";
import React from "react";

const Normalize = () => (
  <Global
    styles={{
      "::-webkit-file-upload-button": {
        WebkitAppearance: "button",
        font: "inherit"
      },
      "[hidden]": {
        display: "none"
      },
      '[type="button"]': {
        ":-moz-focusring": {
          outline: "1px dotted ButtonText"
        },
        "::-moz-focus-inner": {
          borderStyle: "none",
          padding: 0
        },
        WebkitAppearance: "none"
      },
      '[type="checkbox"]': {
        boxSizing: "border-box",
        padding: 0
      },
      '[type="number"]': {
        "::-webkit-inner-spin-button": {
          height: "auto"
        },
        "::-webkit-outer-spin-button": {
          height: "auto"
        }
      },
      '[type="radio"]': {
        boxSizing: "border-box",
        padding: 0
      },
      '[type="reset"]': {
        ":-moz-focusring": {
          outline: "1px dotted ButtonText"
        },
        "::-moz-focus-inner": {
          borderStyle: "none",
          padding: 0
        },
        WebkitAppearance: "none"
      },
      '[type="search"]': {
        "::-webkit-search-decoration": {
          WebkitAppearance: "none"
        },
        WebkitAppearance: "textfield",
        outlineOffset: "-2px"
      },
      '[type="submit"]': {
        ":-moz-focusring": {
          outline: "1px dotted ButtonText"
        },
        "::-moz-focus-inner": {
          borderStyle: "none",
          padding: 0
        },
        WebkitAppearance: "none"
      },
      a: {
        backgroundColor: "transparent"
      },
      abbr: {
        "&[title]": {
          borderBottom: "none",
          textDecoration: ["underline", "underline dotted"]
        }
      },
      b: {
        fontWeight: "bolder"
      },
      body: {
        margin: 0
      },
      button: {
        ":-moz-focusring": {
          outline: "1px dotted ButtonText"
        },
        "::-moz-focus-inner": {
          borderStyle: "none",
          padding: 0
        },
        WebkitAppearance: "none",
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: 1.15,
        margin: 0,
        overflow: "visible",
        textTransform: "none"
      },
      code: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      },
      details: {
        display: "block"
      },
      fieldset: {
        padding: "0.35em 0.75em 0.625em"
      },
      h1: {
        fontSize: "2em",
        margin: "0.67em 0"
      },
      hr: {
        boxSizing: "content-box",
        height: 0,
        overflow: "visible"
      },
      html: {
        WebkitTextSizeAdjust: "100%",
        lineHeight: 1.15
      },
      img: {
        borderStyle: "none"
      },
      input: {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: 1.15,
        margin: 0,
        overflow: "visible"
      },
      kbd: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      },
      legend: {
        boxSizing: "border-box",
        color: "inherit",
        display: "table",
        maxWidth: "100%",
        padding: 0,
        whiteSpace: "normal"
      },
      main: {
        display: "block"
      },
      optgroup: {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: 1.15,
        margin: 0
      },
      pre: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      },
      progress: {
        verticalAlign: "baseline"
      },
      samp: {
        fontFamily: "monospace, monospace",
        fontSize: "1em"
      },
      select: {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: 1.15,
        margin: 0,
        textTransform: "none"
      },
      small: {
        fontSize: "80%"
      },
      strong: {
        fontWeight: "bolder"
      },
      sub: {
        bottom: "-0.25em",
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        verticalAlign: "baseline"
      },
      summary: {
        display: "list-item"
      },
      sup: {
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        top: "-0.5em",
        verticalAlign: "baseline"
      },
      template: {
        display: "none"
      },
      textarea: {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: 1.15,
        margin: 0,
        overflow: "auto"
      }
    }}
  />
);

export default Normalize;
