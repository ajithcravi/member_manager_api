import { database } from './database';

describe('database', () => {
  it('should work', async () => {
    expect(await database.authenticate()).toBe(void 0);
  });
});
