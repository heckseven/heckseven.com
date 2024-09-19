const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const markdownItOptions = {
    html: true,
    breaks: true,
};
const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy({ "src/glitter": "/" });

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
