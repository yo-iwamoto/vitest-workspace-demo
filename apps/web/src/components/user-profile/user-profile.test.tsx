import { UserProfile } from './user-profile';
import { render } from '@testing-library/react';

describe('UserProfile', () => {
  it('ユーザー名を表示すること', () => {
    const { getByText } = render(<UserProfile userName='John Doe' />);

    expect(getByText('John Doe')).toBeDefined();
  });
});
