import { describe, it, expect } from "vitest";
import { mount} from '@vue/test-utils';

describe('Test the promotion view', () => {
    it('should render the promotion view', async () => {
        const PromotionView = await import('../PromotionView.vue');
        const wrapper = mount(PromotionView.default);
        expect(wrapper.html()).toContain('promotion');
    });    
});
