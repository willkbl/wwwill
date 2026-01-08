module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("./src/music");
    eleventyConfig.addPassthroughCopy("./src/documents");

    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};