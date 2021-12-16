import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';
import { debug } from 'console';

afterEach(() => cleanup);

function testComponents() {
  expect(
    screen.getByRole('heading', {
      name: /temperature convertion service/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('spinbutton', {
      name: /celcium/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('spinbutton', {
      name: /farenheit/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('spinbutton', {
      name: /kelvin/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /statistic/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByText(/total convertions: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from celcium to another: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from farenheit to another: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from kelvin to another: 0/i)).toBeInTheDocument();
}

function testConvert(key, valueC, valueF, valueK) {
  const inputC = screen.getByRole('spinbutton', {
    name: /celcium/i,
  });
  const inputF = screen.getByRole('spinbutton', {
    name: /farenheit/i,
  });
  const inputK = screen.getByRole('spinbutton', {
    name: /kelvin/i,
  });
  let activeInput;
  let activeValue;
  switch (key) {
    case 'C':
      activeInput = inputC;
      activeValue = valueC;
      break;
    case 'F':
      activeInput = inputF;
      activeValue = valueF;
      break;
    case 'K':
      activeInput = inputK;
      activeValue = valueK;
      break;
  }
  fireEvent.change(activeInput, { target: { value: activeValue } });
  fireEvent.keyDown(activeInput, { key: 'Enter', code: 'Enter', charCode: 13 });
  expect(inputC.value).toBe(`${valueC}`);
  expect(inputF.value).toBe(`${valueF}`);
  expect(inputK.value).toBe(`${valueK}`);
}

test('renders main screen', () => {
  render(<App />);
  testComponents();
});

test('stats', () => {
  render(<App />);
  expect(screen.getByText(/total convertions: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from celcium to another: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from farenheit to another: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from kelvin to another: 0/i)).toBeInTheDocument();
  testConvert('C', '50', '122.000', '323.150');
  expect(screen.getByText(/total convertions: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/from celcium to another: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/from farenheit to another: 0/i)).toBeInTheDocument();
  expect(screen.getByText(/from kelvin to another: 0/i)).toBeInTheDocument();
  testConvert('F', '26.667', '80', '353.150');
  expect(screen.getByText(/total convertions: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/from celcium to another: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/from farenheit to another: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/from kelvin to another: 0/i)).toBeInTheDocument();
  testConvert('K', '28047.850', '50736.650', '28321');
  expect(screen.getByText(/total convertions: 3/i)).toBeInTheDocument();
  expect(screen.getByText(/from celcium to another: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/from farenheit to another: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/from kelvin to another: 1/i)).toBeInTheDocument();
});

test('convert from celcium', () => {
  render(<App />);
  testConvert('C', '0', '32.000', '273.150');
});

test('convert from farenheit', () => {
  render(<App />);
  testConvert('F', '-321.000', '-545.800', '-272.650');
});

test('convert from kelvin', () => {
  render(<App />);
  testConvert('K', '999999999725.850', '1799999999757.050', '999999999999');
});
