const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
  it('should add two numbers', ()=>{
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    // if(res !== 44){
    //   throw new Error(`Expected 44, but got ${res}`);
    // }
  });

  it('should async add two nubmers', (done) => {
    utils.asyncAdd(4,3, sum => {
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  });

  it('should async square a nubmer', (done) => {
    utils.asyncSquare(4, square => {
      expect(square).toBe(16).toBeA('number');
      done();
    })
  });

  it('should square a number', ()=>{
    var res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
  });

  it('should verify first and last name are set', ()=>{
    var user = {
      location: 'Shanghai',
      age: 30
    };
    var res = utils.setName(user, 'Alex Zhou');
    expect(res).toInclude({
      firstName: 'Alex',
      lastName: 'Zhou'
    });
  })

  it('should expect some values', ()=>{
    // expect(12).toNotBe(12);
    // expect({name:'Alex'}).toEqual({name:'Alex'});
    // expect([2,3,4]).toInclude(2);
    expect({
      name:'Alex',
      age:30,
      location:'Shanghai'
    }).toInclude({
      age:30
    });
  });
  
});
