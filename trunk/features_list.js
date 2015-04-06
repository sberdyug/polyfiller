'use strict';

import fs from 'fs';

import config from './config';
import log from '../utils/log';

/**
 * Configuration file
 *
 * @returns {Object}
 */
export default () => {
    let result = [];

    try {
        config.db.forEach((path) => {
            result.push(...fs.readdirSync(path));
        });
    }
    catch (error) {
        log.fail('Failed to read the configuration file', error);
    }

    return result;
};
