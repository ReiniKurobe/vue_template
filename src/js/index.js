import Vue from 'vue';

import App from './components/App';

new Vue({
  el: '#app',
  components: { App },
  render: function (createElement) {
    return createElement(App);
  }
}); 
