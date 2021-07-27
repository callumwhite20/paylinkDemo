import { MagicGetterSetter } from './magic-getter-setter';

describe('MagicGetterSetter', () => {
  it('should create an instance', () => {
    expect(new MagicGetterSetter()).toBeTruthy();
  });

  it('should set name as bob', () => {
    let magicGetterSetter = new MagicGetterSetter();

    magicGetterSetter.magicSet('name', 'Bob');
    expect(magicGetterSetter.magicGet('name')).toEqual('Bob');
  });

  it('should set age as 23', () => {
    let magicGetterSetter = new MagicGetterSetter();

    magicGetterSetter.magicSet('age', 23);
    expect(magicGetterSetter.magicGet('age')).toEqual(23);
  });

  it('should error getting wings', () => {
    let magicGetterSetter = new MagicGetterSetter();

    expect(() => {magicGetterSetter.magicGet('wings')}).toThrow(new Error('wings is not a valid get method'));
  });
});
