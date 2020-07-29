import React from 'react';
import { Stack } from '@fluentui/react';

const LandingPage = (): JSX.Element => {
    return (
        <Stack styles={{ root: { height: '100vh' } }} verticalAlign="center" horizontalAlign="center">
            <div data-testid="image-container">
                <img height="400px" width="800px" src="https://miro.medium.com/max/1500/1*TJI0gzy4rd7JYg5VoO_LIw.png" />
            </div>
            <div> Accessibility Automation</div>
            <a href="/side">Navigate Away</a>
        </Stack>
    );
};

export default LandingPage;
