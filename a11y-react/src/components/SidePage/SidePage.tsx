import React from 'react';
import { Stack } from '@fluentui/react';

const SidePage = (): JSX.Element => {
    return (
        <Stack styles={{ root: { height: '100vh' } }} verticalAlign="center" horizontalAlign="center">
            <li>First Element</li>
            <li>Second Element</li>
            <li>Third Element</li>
            <a href="/">Back</a>
        </Stack>
    );
};

export default SidePage;
