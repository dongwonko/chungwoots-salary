import asyncComponent from '../lib/asyncComponent';

export const Home = asyncComponent(() => import('./Home'));
export const Post = asyncComponent(() => import('./Post'));