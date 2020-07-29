import React from 'react';
import '@testing-library/jest-dom';
import { axe } from 'jest-axe';
import { render, RenderResult } from '@testing-library/react';
import SidePage from './SidePage';

const createContainer = (): RenderResult => {
    return render(<SidePage />);
};

describe('Side Page Component', () => {
    it('should not have a11y violations', async () => {
        const container = createContainer();
        const results = await axe(container.baseElement);
        expect(results).toHaveNoViolations();
    });
});
