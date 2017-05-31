import SampleComponent from './components/PoemComponent';
import PoemService from './helpers/PoemService';

window.onload = (event) => {

  console.log(PoemService);
  PoemService.fetchPoem();

  let myComponent = new SampleComponent('.note', 'Hey there! Webpack 2.x is working!');
  myComponent.render();

  System.import('./components/LazyLoadingComponent').then((Painter) => {
    console.log(typeof Painter)
  }).catch((error) => {
    console.log(error);
  });


};