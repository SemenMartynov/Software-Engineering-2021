/* eslint-disable no-native-reassign */
import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import App from '../App';
import { mockDataHanoi } from './mockData';
import { act } from 'react-dom/test-utils';

beforeAll(() => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn(),
  };
});

beforeEach(() => {
  localStorage.clear();
});

async function waitLoading() {
  const loading = screen.queryByLabelText(/loading/i);
  if (loading.length > 0) {
    await waitForElementToBeRemoved(() => screen.getAllByLabelText(/loading/i));
  }
}

fetch = async (link) => {
  return {
    ok: true,
    json: () => mockDataHanoi,
  };
};

async function testMainScreen() {
  await waitFor(() => {
    expect(
      screen.getByRole('searchbox', {
        name: /search/i,
      })
    ).toBeInTheDocument();
  });
}

async function testNotMainScreen() {
  await waitFor(() => {
    expect(
      screen.queryByRole('searchbox', {
        name: /search/i,
      })
    ).not.toBeInTheDocument();
  });
}

function testMainComponentsDisplay() {
  expect(
    screen.getByRole('heading', {
      name: /watch temperature in location service/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', {
      name: /main/i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /tracking 0/i })).toBeInTheDocument();
}

function testWeatherInfoDisplay() {
  expect(
    screen.getByRole('heading', {
      name: `${mockDataHanoi.location.country} - ${mockDataHanoi.location.name}`,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Last update: ${mockDataHanoi.current.last_updated}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Temperature: ${mockDataHanoi.current.temp_c}℃`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      `Temperature feels like: ${mockDataHanoi.current.feelslike_c}℃`
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Condition: ${mockDataHanoi.current.condition.text}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Wind speed: ${mockDataHanoi.current.wind_kph}kph`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Wind direction: ${mockDataHanoi.current.wind_dir}`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(`Percentage of cloud: ${mockDataHanoi.current.cloud}%`)
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      `Percentage of humidity: ${mockDataHanoi.current.humidity}%`
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      `Pressure in millibars: ${mockDataHanoi.current.pressure_mb}mb`
    )
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      `Precipitation amount in millimeters: ${mockDataHanoi.current.precip_mm}mm`
    )
  ).toBeInTheDocument();
}

function testWeatherInfoNotDisplay() {
  expect(
    screen.queryByRole('heading', {
      name: `${mockDataHanoi.location.country} - ${mockDataHanoi.location.name}`,
    })
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(`Last update: ${mockDataHanoi.current.last_updated}`)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(`Temperature: ${mockDataHanoi.current.temp_c}℃`)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(
      `Temperature feels like: ${mockDataHanoi.current.feelslike_c}℃`
    )
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(`Condition: ${mockDataHanoi.current.condition.text}`)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(`Wind speed: ${mockDataHanoi.current.wind_kph}kph`)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(`Wind direction: ${mockDataHanoi.current.wind_dir}`)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(`Percentage of cloud: ${mockDataHanoi.current.cloud}%`)
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(
      `Percentage of humidity: ${mockDataHanoi.current.humidity}%`
    )
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(
      `Pressure in millibars: ${mockDataHanoi.current.pressure_mb}mb`
    )
  ).not.toBeInTheDocument();
  expect(
    screen.queryByText(
      `Precipitation amount in millimeters: ${mockDataHanoi.current.precip_mm}mm`
    )
  ).not.toBeInTheDocument();
}

test('correct render main screen', async () => {
  const route = 'main';
  window.history.pushState({}, 'Test page', route);
  act(() => {
    render(<App />);
  });
  await waitLoading();
  await testMainScreen();
  await testMainComponentsDisplay();
  testWeatherInfoDisplay();
});

test('add tracking indicator', async () => {
  const route = 'main';
  window.history.pushState({}, 'Test page', route);
  act(() => {
    render(<App />);
  });
  await waitLoading();
  await testMainScreen();
  expect(screen.getByRole('link', { name: /tracking 0/i })).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('track this city'));
  expect(screen.getByRole('link', { name: /tracking 1/i })).toBeInTheDocument();
});

test('switch to tracking screen', async () => {
  const route = 'main';
  window.history.pushState({}, 'Test page', route);
  act(() => {
    render(<App />);
  });
  await waitLoading();
  await testMainScreen();
  testWeatherInfoDisplay();
  fireEvent.click(screen.getByRole('link', { name: /tracking 0/i }));
  await testNotMainScreen();
  testWeatherInfoNotDisplay();
});

test('add to tracking', async () => {
  const route = 'main';
  window.history.pushState({}, 'Test page', route);
  act(() => {
    render(<App />);
  });
  await waitLoading();
  await testMainScreen();
  expect(screen.getByRole('link', { name: /tracking 0/i })).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('track this city'));
  expect(screen.getByRole('link', { name: /tracking 1/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: /tracking 1/i }));
  await testNotMainScreen();
  testWeatherInfoDisplay();
});

test('remove from tracking', async () => {
  const route = 'main';
  window.history.pushState({}, 'Test page', route);
  act(() => {
    render(<App />);
  });
  await waitLoading();
  await testMainScreen();
  expect(screen.getByRole('link', { name: /tracking 0/i })).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText('track this city'));
  expect(screen.getByRole('link', { name: /tracking 1/i })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: /tracking 1/i }));
  await testNotMainScreen();
  testWeatherInfoDisplay();
  fireEvent.click(screen.getByLabelText('stop tracking this city'));
  testWeatherInfoNotDisplay();
  expect(screen.getByRole('link', { name: /tracking 0/i })).toBeInTheDocument();
});
