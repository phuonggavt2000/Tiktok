import Home from '../pages/Home';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import { HeaderOnly } from '../component/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoute = [];

export { publicRoutes, privateRoute };
