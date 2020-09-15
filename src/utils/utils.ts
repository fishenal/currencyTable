import { parse } from 'querystring';
// import { SettingFieldsType } from '@/pages/Settings';
import moment from 'moment';

/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export const isUrl = (path: string): boolean => reg.test(path);
export const getPageQuery = () => parse(window.location.href.split('?')[1]);

const last = 30;
export const pattern = 'YYYY-MM-DD';
export const getLastDays = () => {
    const ago = moment().subtract(last, 'days').format(pattern);
    return {
        'start_at': ago,
        'end_at': moment().format(pattern)
    }
}
