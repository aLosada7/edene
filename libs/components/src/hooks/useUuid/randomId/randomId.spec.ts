import { randomId } from './randomId';

describe('hooks/randomId', () => {
    it('returns random id with edene- prefix', () => {
        expect(randomId().includes('edene-')).toBe(true);
    });
});
