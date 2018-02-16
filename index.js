import importAll from 'import-all';

class PluginManager {

  constructor() {
    this.loadAllPlugins();
  }

  loadAllPlugins() {
    this.plugins = importAll(__dirname + '/plugins').map(Plugin => new Plugin());
    this.plugins.forEach(plugin => console.log('Loaded', plugin.id));
  }

}

let manager = new PluginManager();
