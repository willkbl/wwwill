module.exports = config => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/images/');
  //use addPassthroughCopy for any other directories you want
  //hint, hint: music???
    return {
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'dist',
      },
    };
};