// markdown jazz hands
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItOptions = {
    html: true,
    breaks: true,
};
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

// image fancying
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy({ "src/glitter": "/" });

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // which file extensions to process
        extensions: "html",

        // Add any other Image utility options here:

        // optional, output image formats
        formats: ["webp", "jpeg"],
        // formats: ["auto"],

        // optional, output image widths
        widths: [440, 880, "auto"],
        //widths: [500, "auto"],

        // optional, attributes assigned on <img> override these values.
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
            sizes: "100vw",
        },
    });

    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.setTemplateFormats([
        // Templates:
        "html",
        "md",
    ]);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "build",
        },
    };
};
