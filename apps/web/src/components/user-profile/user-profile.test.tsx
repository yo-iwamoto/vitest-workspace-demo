import { UserProfile } from './user-profile';
import { render } from '@testing-library/react';

describe('UserProfile', () => {
  it('snapshot unchanged', () => {
    const { asFragment } = render(<UserProfile userName='John Doe' />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('ユーザー名を表示すること', () => {
    const { getByText } = render(<UserProfile userName='John Doe' />);

    expect(getByText('John Doe')).toBeDefined();
  });
});
