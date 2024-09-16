module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static");

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
