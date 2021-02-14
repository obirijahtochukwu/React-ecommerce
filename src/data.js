import { FaCreditCard, FaBook, FaAddressBook,FaUser } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'payment', icon: <FaCreditCard />, to: '/products' },
      { label: 'terminal', icon: <FaCreditCard />, to: '/products' },
      { label: 'connect', icon: <FaCreditCard />, to: '/products' },
    ],
  },
  {
    page: 'developers',
    links: [
      { label: 'plugins', icon: <FaBook />, to: '/products' },
      { label: 'libraries', icon: <FaBook />, to: '/products' },
      { label: 'help', icon: <FaBook />, to: '/cart' },
      { label: 'billing', icon: <FaBook />, to: '/cart' },
    ],
  },
  {
    page: 'login',
    links: [
      { label: 'sign in', icon: <FaUser />, to: '/products' },
      { label: 'create account', icon: <FaAddressBook />, to: '/produ' },
    ],
  },
];


export default sublinks;
