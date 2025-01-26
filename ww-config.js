export default {
  editor: {
    label: {
      en: "Draggable Container",
    },
    icon: 'move',
    bubble: {
      icon: 'move'
    },
    preventInteractions: false,
    navigateToContent: true,
    customSettingsProhibited: false
  },
  properties: {
    list: {
      label: {
        en: "List",
      },
      type: "Array",
      defaultValue: [],
      bindable: true,
      section: 'settings',
      hidden: false,
      item: {
        type: 'Object',
        defaultValue: {}
      }
    },
    tag: {
      label: {
        en: "Container Tag",
      }, 
      type: "TextSelect",
      defaultValue: "div",
      section: 'settings',
      options: {
        options: [
          { value: "div", label: { en: "div" }},
          { value: "ul", label: { en: "ul" }},
          { value: "ol", label: { en: "ol" }}
        ]
      }
    },
    direction: {
      label: {
        en: "Direction"
      },
      type: "TextSelect",
      defaultValue: "vertical",
      section: 'settings',
      options: {
        options: [
          { value: "vertical", label: { en: "Vertical" }},
          { value: "horizontal", label: { en: "Horizontal" }}
        ]
      }
    },
    editorActive: {
      hidden: true,
      defaultValue: false,
      type: 'Boolean'
    }
  },
  events: {
    'drag:start': {
      label: {
        en: 'On drag start'
      }
    },
    'drag:end': {
      label: {
        en: 'On drag end'
      }
    }
  },
  settingsOptions: {
    disableDrag: true,
    disableDrop: true
  }
}; 