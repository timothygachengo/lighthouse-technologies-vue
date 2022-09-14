import { describe, it, expect } from "vitest";
import { mount} from '@vue/test-utils';

describe('Test the bottom navigation layout', () => {
    it('should render the bottom navigation layout', async () => {
        const BottomNavLayout = await import('../BottomNavLayout.vue');
        const wrapper = mount(BottomNavLayout.default, {
            global: {
                stubs: ['router-link', 'router-view'],
                plugins: []
            }
        });

        // check for the nav img class
        expect(wrapper.find('.bottom-nav').exists()).toBe(true);
    });    
});
