import { render, screen } from '@testing-library/react';
import ByRole from './index';

test('Test getByRole with hidden option', () => {
	render(<ByRole />);
	const element = screen.getByRole('button');
	expect(element).toHaveTextContent('Close dialog');
});

test('Test getByRole with selected option', () => {
	render(<ByRole />);

	const element = screen.getByRole('tab', { selected: true });
	expect(element).toHaveTextContent('Native');
});

test('Test getByRole with checked option', () => {
	render(<ByRole />);
	const element = screen.getByRole('checkbox', { checked: true });
	expect(element).toHaveTextContent('Sugar');
});

test('Test getByRole with current option', () => {
	render(<ByRole />);
	const element = screen.getByRole('link', { current: true });
	expect(element).toHaveTextContent('current');
});
