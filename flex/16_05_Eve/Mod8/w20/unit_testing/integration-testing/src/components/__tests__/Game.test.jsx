import React from 'react';
import {render, fireEvent, prettyDOM} from '@testing-library/react'
import Game from '../Game';

test('change cheat state when clicking on robot', () => {
    const { getByTestId, container, debug} = render(<Game />);
    // console.log(prettyDOM(container))
    debug()
    const robotIcon = getByTestId('robot-icon');

    fireEvent.click(robotIcon);
    expect(robotIcon).toHaveClass('cheating');

    fireEvent.click(robotIcon)
    expect(robotIcon).not.toHaveClass('cheating');

})

xit('playing with mock functions', () => {
    const mock = jest.fn();
    let result = mock('foo');

    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('foo');

    const mockTwo = jest.fn(() => 'cats');
    result = mockTwo('dino');

    expect(result).toBe('dogs');
})