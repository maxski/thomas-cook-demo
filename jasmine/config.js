exports.config = {
  baseUrl: 'https://www.thomascook.com/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['home.page.search.js'],
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      args: [],
      extensions: []
	}  
  }
};