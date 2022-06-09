import { randomId } from './randomId';

describe('@dana/hooks/randomId', () => {
    it('returns random id with dana- prefix', () => {
        expect(randomId().includes('dana-')).toBe(true);
        expect(randomId()).toHaveLength(17);
    });
});
