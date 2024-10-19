import React, { Suspense } from 'react';

import TimerParams from '@components/TimerParams';
const TimerPage = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TimerParams />
        </Suspense>
    )
};

export default TimerPage;