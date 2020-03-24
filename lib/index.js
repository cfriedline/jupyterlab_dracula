"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import { IThemeManager } from "@jupyterlab/apputils";
/**
 * A plugin for the Dracula
 */
const plugin = {
    id: 'jupyterlab_dracula:plugin',
    requires: [IThemeManager],
    activate: function (app, manager) {
        const style = '@karosc/jupyterlab_dracula/index.css';
        manager.register({
            name: 'Dracula',
            isLight: false,
            load: () => manager.loadCSS(style),
            unload: () => Promise.resolve(undefined)
        });
    },
    autoStart: true
};
const _default = plugin;
export { _default as default };
