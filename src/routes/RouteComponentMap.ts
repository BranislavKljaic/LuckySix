import { FC } from 'react';
import { COUNTER_PATH, HOME_PATH, POSTS_PATH } from './path-constants';
import CounterScreen from '../features/counter/CounterScreen';
import PostPage from '../pages/PostsPage/PostPage';
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

interface IPathComponent {
  path?: string;
  component: FC;
}

const pathComponentArray: IPathComponent[] = [];

pathComponentArray.push({ path: COUNTER_PATH, component: CounterScreen });
pathComponentArray.push({ path: POSTS_PATH, component: PostPage });
pathComponentArray.push({ path: HOME_PATH, component: HomePage });
pathComponentArray.push({ component: NotFoundPage });

export { pathComponentArray };
export default {};
