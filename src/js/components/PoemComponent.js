/**
 * Created by code-for-coffee on 1/10/17.
 */
import PoemService from '../helpers/PoemService';

console.log('Loaded PoemComponent.js');

class PoemComponent {
  constructor(el, content) {
    console.log(PoemService);
    this.props = {};
    this.props.content = content;
    this.el = el;
    PoemService.fetchPoem(this.render);
  }
  set poem(poem) {
    this.props.content = poem;
  }
  render(data) {
    let id = '.note';
    let el = document.querySelector(id);
    el.innerHTML = data || this.props.content;
  }
}

export default PoemComponent;