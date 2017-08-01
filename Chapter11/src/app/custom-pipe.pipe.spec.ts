import { CustomPipePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPipePipe();
    expect(pipe).toBeTruthy();
  });
});
