function onLoad() {
  registerPluginActions({
    openBackgroundPicker: function () {
      simpleChat.api.showModal({
        title: 'Select Background',
        options: [
          { label: 'Galaxy', value: 'galaxy' },
          { label: 'Ocean', value: 'ocean' },
          { label: 'Forest', value: 'forest' },
          { label: 'Desert', value: 'desert' },
          { label: 'City', value: 'city' },
          { label: 'Mountain', value: 'mountain' },
          { label: 'River', value: 'river' },
        ],
        callback: 'setBackground',
      });
    },
    setBackground: function (background) {
      simpleChat.api.updateBackground(background);
    },
  });

  return {
    name: 'Background Plugin',
    version: '1.0',
    ui: {
      toolbarButtons: [
        {
          id: 'backgroundButton',
          label: 'Background',
          icon: 'palette',
          action: 'openBackgroundPicker',
        },
      ],
    },
  };
}