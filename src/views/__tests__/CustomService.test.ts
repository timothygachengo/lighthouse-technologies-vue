import { describe, it, expect } from "vitest";
import { mount} from '@vue/test-utils';

describe('Test the custom service view', () => {
    it('should render the custom service view', async () => {
        const CustomServiceView = await import('../CustomServiceView.vue');
        const wrapper = mount(CustomServiceView.default);
        expect(wrapper.html()).toContain('Customer service');
    });    
});
