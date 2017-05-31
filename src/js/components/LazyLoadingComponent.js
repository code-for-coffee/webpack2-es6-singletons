/**
 * Created by code-for-coffee on 1/23/17.
 */
import PoemService from '../helpers/PoemService';

console.log('Loaded LazyLoadingComponent.js');

class LazyLoadingComponent {
  constructor(el) {
    this.props = {};
    this.el = el;
    console.log(PoemService);
  }
}

export default new LazyLoadingComponent();