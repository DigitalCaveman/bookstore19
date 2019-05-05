import { CartFactory } from './cart-factory';

describe('CartFactory', () => {
  it('should create an instance', () => {
    expect(new CartFactory()).toBeTruthy();
  });
});
