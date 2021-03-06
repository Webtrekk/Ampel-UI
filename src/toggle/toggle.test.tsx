import * as React from 'react';

import { cleanup, render } from '../../config/testing';

import { Toggle } from './index';

describe('Toggle', () => {
    afterEach(cleanup);

    it('should be rendered with id', () => {
        const id = 'my-toggle';
        const value = true;
        const onChange = jest.fn();
        const { getByDataQa } = render(<Toggle id={id} value={value} onChange={onChange} />);

        const toggle = getByDataQa(`toggle-${id}`);

        expect(toggle).toBeTruthy();
    });

    it('should invoke onChange handler', () => {
        const id = 'my-toggle';
        const value = true;
        const onChange = jest.fn();
        const { getByDataQa } = render(<Toggle id={id} value={value} onChange={onChange} />);

        const toggle = getByDataQa(`toggle-${id}`);
        toggle.click();

        expect(onChange).toHaveBeenCalledWith(false);
    });

    it('should set toggle state to on', () => {
        const id = 'my-toggle';
        const value = true;
        const onChange = jest.fn();
        const { getByDataQa } = render(<Toggle id={id} value={value} onChange={onChange} />);

        const toggle = getByDataQa(`toggle-${id}`) as HTMLInputElement;

        expect(toggle.checked).toBeTruthy();
    });

    it('should set toggle state to off', () => {
        const id = 'my-toggle';
        const value = false;
        const onChange = jest.fn();
        const { getByDataQa } = render(<Toggle id={id} value={value} onChange={onChange} />);

        const toggle = getByDataQa(`toggle-${id}`) as HTMLInputElement;

        expect(toggle.checked).toBeFalsy();
    });

    it('should render toggle with disabled state', () => {
        const id = 'my-toggle';
        const value = true;
        const onChange = jest.fn();
        const disabled = true;
        const { getByDataQa } = render(<Toggle id={id} value={value} onChange={onChange} disabled={disabled} />);

        const toggle = getByDataQa(`toggle-${id}`) as HTMLButtonElement;

        expect(toggle.disabled).toBeTruthy();
    });

    it('should render toggle with description', () => {
        const id = 'my-toggle';
        const value = true;
        const onChange = jest.fn();
        const description = 'description';
        const { getByDataQa } = render(<Toggle id={id} value={value} onChange={onChange} description={description} />);

        const descriptionNode = getByDataQa(`toggle-${id}--description`);

        expect(descriptionNode).toBeTruthy();
    });
});
