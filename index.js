exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor: '#f7f7f7',
    backgroundColor: '#2e353e',
    borderColor: 'transparent',
    cursorColor: '#68b6f3',
    colors: {
      black: '#000000',
      red: '#e77777',
      green: '#99c794',
      yellow: '#ffba51',
      blue: '#367bea',
      magenta: '#d8a2d8',
      cyan: '#57b1c7',
      white: '#f7f7f7',
      lightBlack: '#808080',
      lightRed: '#ff5653',
      lightGreen: '#76c56d',
      lightYellow: '#e8e651',
      lightBlue: '#1b87e8',
      lightMagenta: '#e871e8',
      lightCyan: '#51c0e4',
      lightWhite: '#ffffff'
    },

    termCSS: `
      ${config.termCSS || ''}
      @keyframes blink-animation {
        to {
          background-color: transparent;
        }
      }
      .terminal.focus .terminal-cursor {
        animation: blink-animation .84s ease-in-out infinite;
        box-sizing: content-box !important;
        mix-blend-mode: difference;
      }
    `,
    css: `
      ${config.css || ''}
      .header_header {
        background: #2e353e !important;
      }
      .hyperterm_main, .tab_tab, .tab_text {
        border: none !important;
        padding: 0 !important;
      }
      .tab {
        color: red !important;
      }
      .tab_tab::before {
        position: absolute;
        content: "";
        display: block;
        left: 0px;
        right: 0px;
        bottom: 0px;
        transition: border-color .3s ease-in-out;
        border-bottom: 2px solid transparent;
      }
      .tab_active::before {
        border-bottom: 2px solid #ffba51;
      }
    `
  })
}
