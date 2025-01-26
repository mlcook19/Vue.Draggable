export default {
  editor: {
    label: {
      en: "Draggable Container",
    },
    icon: 'move',
    bubble: {
      icon: 'move'
    }
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
      hidden: true // Since we'll handle the list through drag & drop
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
    }
  }
}; 