import SampleRendering from '../app/components/SampleRendering';
import SamplePlaceholders from '../app/components/SamplePlaceholders';
import SampleInteractivity from '../app/components/SampleInteractivity';
import MyComponent from '../app/components/MyComponent';

export const components = new Map();
components.set('SampleRendering', SampleRendering);
components.set('SamplePlaceholders', SamplePlaceholders);
components.set('SampleInteractivity', SampleInteractivity);
components.set('MyComponent', MyComponent);

const componentFactory = (componentName) => components.get(componentName);

export default componentFactory;
