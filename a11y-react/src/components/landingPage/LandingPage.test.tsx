import React from 'react';
import '@testing-library/jest-dom';
import LandingPage from './LandingPage';
import { axe } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';

const createContainer = (): RenderResult => {
    return render(<LandingPage />);
};

describe('Landing Page Component', () => {
    it('should not have a11y violations', async () => {
        const container = createContainer();
        const results = await axe(container.baseElement);
        expect(results).toHaveNoViolations();
    });
});
