const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        value !== '' ? this.chain.push(`( ${value} )`) : this.chain.push(`(  )`)
        return this;
    },
    removeLink(position) {
        const rule = typeof position !== 'number' || !Number.isInteger(position) ||
                    position <= 0 || position > this.getLength();
        
        if ( rule ) {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        }

        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        const res = this.chain.join('~~');
        this.chain = [];
        return res;
    }
};

module.exports = {
  chainMaker
};