// Providers.js
'use client';
import { Provider } from "react-redux";
import { store } from '../store/index'

export function Providers(props:any) {
  return <Provider store={store}>{props.children}</Provider>;
}