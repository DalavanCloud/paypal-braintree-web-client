/* @flow */

import { COUNTRY, LANG, ENV } from 'paypal-sdk-constants/src';

declare var __HOST__ : string;
declare var __HOSTNAME__ : string;
declare var __PORT__ : number;
declare var __PATH__ : string;
declare var __STAGE_HOST__ : string;

declare var __TEST__ : boolean;
declare var __ENV__ : $Values<typeof ENV>;
declare var __LOCALE_COUNTRY__ : $Values<typeof COUNTRY>;
declare var __LOCALE_LANG__ : $Values<typeof LANG> | void;
declare var __DEFAULT_LANG__ : $Values<typeof LANG>;
declare var __DEBUG__ : boolean;
declare var __STAGE__ : boolean;

declare var __VERSION__ : string;
declare var __CORRELATION_ID__ : string;
