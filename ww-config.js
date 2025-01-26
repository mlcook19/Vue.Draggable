export default {
  editor: {
    label: {
      en: "Draggable Container",
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
      hidden: true // Since we'll handle the list through drag & drop
    },
    tag: {
      label: {
        en: "Container Tag",
      }, 
      type: "Text",
      defaultValue: "div",
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
      options: {
        options: [
          { value: "vertical", label: { en: "Vertical" }},
          { value: "horizontal", label: { en: "Horizontal" }}
        ]
      }
    }
  }
}; 