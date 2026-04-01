// SPDX-FileCopyrightText: 2025 Florian Müllner <fmuellner@gnome.org>
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later

import {defineConfig} from '@eslint/config-helpers';

export default defineConfig([
    {
        rules: {
            camelcase: ['error', {
                properties: 'never',
            }],
            'consistent-return': 'error',
            'eqeqeq': ['error', 'smart'],
            'key-spacing': ['error', {
                mode: 'minimum',
                beforeColon: false,
                afterColon: true,
            }],
            'prefer-arrow-callback': 'error',
            'prefer-const': ['error', {
                destructuring: 'all',
            }],
        },
        languageOptions: {
            globals: {
                global: 'readonly',
            },
        },
    },
    {
        // 忽略第三方库和编译文件
        ignores: [
            'node_modules/',
            'build/',
            'solarterm_fix/',
            '*.schema.compiled',
        ],
    },
]);
