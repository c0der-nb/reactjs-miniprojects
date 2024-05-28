import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CounterApp from './components/CounterApp/CounterApp';
import ReactCalculator from './components/ReactCalculator/ReactCalculator';
import Login from './components/Login/Login';
import SelectLocation from './components/SelectLocation/SelectLocation';
import Pagination from './components/Pagination/Pagination';
import WeatherApp from './components/WeatherApp/WeatherApp';
import SpellCheck from './components/SpellCheck/SpellCheck';
import DictionaryApp from './components/DictionaryApp/DictionaryApp';
import Table from './components/Table/Table';
import Homepage from './pages/Homepage/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />
      },
      {
        path: '/counter-app',
        element: <CounterApp />
      },
      {
        path: '/react-calculator',
        element: <ReactCalculator />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/select-location',
        element: <SelectLocation />
      },
      {
        path: '/weather-app',
        element: <WeatherApp />
      },
      {
        path: '/pagination',
        element: <Pagination />
      },
      {
        path: '/spell-check',
        element: <SpellCheck />
      },
      {
        path: '/dictionary-app',
        element: <DictionaryApp />
      },
      {
        path: 'table',
        element: <Table />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
