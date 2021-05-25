import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }));

    const dispath = useDispatch();
    const onIncrease = () => dispath(increase());
    const onDecrease = () => dispath(decrease());
    const onSetDiff = diff => dispath(setDiff(diff));

    return (
        <Counter
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;