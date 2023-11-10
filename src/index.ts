function init(modules: { typescript: typeof import("typescript/lib/tsserverlibrary") }) {
    const ts = modules.typescript;
  
    function create(info: ts.server.PluginCreateInfo) {
      // Get a list of things to remove from the completion list from the config object.
      // If nothing was specified, we'll just remove 'caller'
      const whatToRemove: string[] = info.config.remove || ["caller"];

      // Diagnostic logging
      info.project.projectService.logger.info(
        "I'm getting set up now! Check the log for this message."
      );
  
      // Set up decorator object
      const proxy: ts.LanguageService = Object.create(info.languageService);
  
      // Remove specified entries from completion list
      proxy.getCompletionsAtPosition = (fileName, position, options) => {
        // This is just to let you hook into something to
        // see the debugger working
        debugger        

        const prior = info.languageService.getCompletionsAtPosition(fileName, position, options);
        if (!prior) return

        const oldLength = prior.entries.length;
        prior.entries = prior.entries.filter(e => whatToRemove.indexOf(e.name) < 0);
  
        // Sample logging for diagnostic purposes
        if (oldLength !== prior.entries.length) {
          const entriesRemoved = oldLength - prior.entries.length;
          info.project.projectService.logger.info(
            `Removed ${entriesRemoved} entries from the completion list`
          );
        }
  
        return prior;
      };
  
      return proxy;
    }
  
    return { create };
  }
  
  export = init;
  
