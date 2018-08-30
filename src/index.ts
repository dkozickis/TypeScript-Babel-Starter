interface TestInterface<S, P> {
    [key: string]: (payload: P) => S;
}

type TestReturner<S, P> = () => TestInterface<S, P>;

const TEST_TYPE = 'aaaa';
const TEST_TYPE_SEC = 'OOO';

const testConst: TestReturner<string, {batch: string; year: number}> = () => ({
    [TEST_TYPE](payload) {
        return payload.batch;
    },
    [TEST_TYPE_SEC](payload) {
        return `${payload.year}`;
    },
});
