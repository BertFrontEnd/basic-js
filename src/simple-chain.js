const CustomError = require('../extensions/custom-error');

const chainMaker = {
  str: [],

  getLength() {
    return this.str.length;
  },

  addLink(value) {
    this.str.push('( ' + value + ' )');
    return this;
  },

  removeLink(position) {
    if (!this.str[position - 1]) {
      this.str = [];
      throw new Error('error');
    }
    this.str.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.str.reverse().join('');
    return this;
  },

  finishChain() {
    let chain = this.str.join('~~');
    this.str = [];
    return chain;
  },
};

module.exports = chainMaker;
