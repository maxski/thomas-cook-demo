exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['features/*/*.feature'],
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      args: [],
      extensions: [],
	}  
  },
  cucumberOpts: {
      require: ['steps/*/*.js'],
      tags: false,
      format: 'pretty',
      profile: false,
      'no-source': true
  }
};