/**
 * Created by codeforcoffee on 5/30/17.
 */

console.log('Loaded PoemService.js');


class PoemService {

  constructor() {
    this.apiUrl = 'http://shakeitspeare.com/api/poem';
    this.poem = undefined;
    this.callCount = 0;
    console.log('Poem Service initialized.');
  }

  getInstance() {
    console.log('getInstance called');
    console.log(this.instance);
    if(this.instance == undefined) {
      this.instance = new PoemService();
    }
    return this.instance;
  }

  fetchPoem(callback) {

    // log instance when called
    this.callCount++;
    console.log(this.callCount);
    // end instance logging

    fetch(this.apiUrl)
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      console.log('Parsed JSON', json)
      if (callback) callback(json.poem);
    })
    .catch(function(ex) {
      console.log('Parsing JSON failed', ex)
      alert('Err! ' + ex);
    });
  }
}

export default new PoemService();