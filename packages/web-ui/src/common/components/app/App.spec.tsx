import { fireEvent, render, screen } from '@testing-library/react';
import { App } from './App';

describe(`UT: <${App.name} />`, () => {
  const enum should {
    haveExactTitle = 'Should contain an specific string as title.',
    incrementCounter = 'Should increment counter on click',
  }

  it(should.haveExactTitle, async () => {
    const expectedTitle = 'Vite + React';
    const { getByText } = render(<App />);

    expect(getByText(expectedTitle)).toBeTruthy();
    expect(screen.getByText(expectedTitle)).toBeTruthy();
  });

  it(should.incrementCounter, async () => {
    const initialText = 'count is 0';
    const expectedText = 'count is 1';

    render(<App />);

    fireEvent.click(screen.getByText(initialText));

    expect(screen.getByText(expectedText)).toBeTruthy();
  });
});
