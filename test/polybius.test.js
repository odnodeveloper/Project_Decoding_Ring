// Write your tests here!

const { expect } = require('chai');
const { polybius } = require('../src/polybius');

describe('polybius()', () => {
  describe('encoding', () => {
    it("should translate the letters 'i' and 'j' to '42'", () => {
      expect(polybius('ij')).to.equal('4242');
    });   
    
    it("should encode 'thinkful' to 4432423352125413", () => {
      expect(polybius('thinkful')).to.equal('4432423352125413');
    });    
    
    it("should maintain spaces", () => {
      expect(polybius('thinkful is awesome')).to.equal('4432423352125413 4234 11255134432351');
    });  
    
  });
  
  describe('decoding', () => {
    it('should translate 42 to (i/j)', () => {
      expect(polybius('42', false)).to.eql('(i/j)');
    });  
    
    it('should ignore capital letters', () => {
      expect(polybius('4242424211551155', false)).to.eql('(i/j)(i/j)(i/j)(i/j)azaz');
    });    
    
    it('should maintain spaces', () => {
      expect(polybius('4432423352125413 4432423352125413', false)).to.eql('th(i/j)nkful th(i/j)nkful');
    });    
    
    it('should return false if the length of all numbers is odd', () => {
      expect(polybius('245', false)).to.be.false;
    });
  });
});
