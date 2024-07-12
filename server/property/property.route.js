import { generateRoutes } from '../lib/route-generator.js';
import { createPropertyAction, sendOTPController, verifyOTPController,previewAction } from './property.controller.js';

const propertyRoute = generateRoutes([
    {
        path: '/submit',
        method: 'post',
        auth: false,
        controller: createPropertyAction,
    },
    {
        path: '/send-otp',
        method: 'get',
        auth: false,
        controller: sendOTPController,
    },
    {
        path: '/verify-otp',
        method: 'get',
        auth: false,
        controller: verifyOTPController,
    },
    {
        path:'/preview',
        method:'get',
        auth:false,
        controller:previewAction,
    }
]);

export default propertyRoute;
