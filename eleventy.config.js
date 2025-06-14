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
const Image = require("@11ty/eleventy-img");

async function shareImageShortcode(src) {
    // src might be small.png - taken from frontmatter

    const { url } = this.page;
    // url might be /blog/hello-world/
    const imageSrc = "./src/" + url + src;
    let metadata = await Image(imageSrc, {
        widths: [600],
        formats: ["jpeg"],
        urlPath: url,
        outputDir: `./build/${url}`,
    });

    const data = metadata.jpeg[0];
    // data.url might be /blog/hello-world/xfO_genLg4-600.jpeg
    // note the filename is a content hash-width combination
    return data.url;
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy({ "src/glitter": "/" });

    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        // which file extensions to process
        extensions: "html",

        // Add any other Image utility options here:

        // optional, output image formats
        formats: ["webp", "jpeg"],

        // optional, output image widths
        widths: [440, 880, "auto"],

        // optional, attributes assigned on <img> override these values.
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
            sizes: "440px",
        },
    });

    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addAsyncShortcode("shareImageUri", shareImageShortcode);

    eleventyConfig.setTemplateFormats([
        // Templates:
        "html",
        "md",
        "njk",
    ]);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "build",
        },
    };
};
