const { getModule } = require('powercord/webpack');
const { Plugin } = require('powercord/entities');

const { selectVoiceChannel } = getModule(['selectVoiceChannel'], false);

module.exports = class LeaveVCOnClose extends Plugin {
   constructor() {
      super();

      this.unload = this.unload.bind(this);
   }

   startPlugin() {
      window.addEventListener('beforeunload', this.unload);
   }

   pluginWillUnload() {
      window.removeEventListener('beforeunload', this.unload);
   }

   unload() {
      selectVoiceChannel(null, null);
   }
};