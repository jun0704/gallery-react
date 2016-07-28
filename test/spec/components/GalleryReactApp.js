'use strict';

describe('GalleryReactApp', () => {
  let React = require('react/addons');
  let GalleryReactApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    GalleryReactApp = require('components/GalleryReactApp.js');
    component = React.createElement(GalleryReactApp);
  });

  it('should create a new instance of GalleryReactApp', () => {
    expect(component).toBeDefined();
  });
});
