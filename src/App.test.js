import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /fighting hunger together/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /our services/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /our impact/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /how to get involved/i })).toBeInTheDocument();
});

test('every nav link points to a section on the page', () => {
  const { container } = render(<App />);
  const nav = screen.getByRole('navigation');
  within(nav).getAllByRole('link').forEach((link) => {
    const id = link.getAttribute('href').slice(1);
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  });
});

test('Donate Now opens the donation modal and the close button closes it', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /donate now/i }));
  expect(screen.getByRole('dialog', { name: /make a donation/i })).toBeInTheDocument();
  userEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('Escape closes the help modal', () => {
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /get help/i }));
  expect(screen.getByRole('dialog', { name: /request assistance/i })).toBeInTheDocument();
  userEvent.keyboard('{esc}');
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('submitting the volunteer form thanks the user and closes the modal', () => {
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  render(<App />);
  userEvent.click(screen.getByRole('button', { name: /volunteer/i }));
  const dialog = screen.getByRole('dialog', { name: /volunteer registration/i });
  userEvent.type(within(dialog).getByLabelText(/name/i), 'Sam');
  userEvent.type(within(dialog).getByLabelText(/email/i), 'sam@example.com');
  userEvent.selectOptions(within(dialog).getByLabelText(/availability/i), 'weekend');
  userEvent.click(within(dialog).getByRole('button', { name: /register/i }));
  expect(alertSpy).toHaveBeenCalledWith(expect.stringContaining('Sam'));
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  alertSpy.mockRestore();
});
