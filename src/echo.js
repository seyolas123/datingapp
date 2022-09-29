import Echo from 'laravel-echo';
import Larasocket from 'larasocket-js';

const Echo = new Echo({
    broadcaster: Larasocket,
    token: process.env.MIX_LARASOCKET_TOKEN,
});