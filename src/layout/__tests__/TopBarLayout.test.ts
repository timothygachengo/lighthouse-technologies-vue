import { describe, it, expect } from "vitest";
import { mount} from '@vue/test-utils';

describe('Test the top bar layout', () => {
    it('should render the top bar layout', async () => {
        const TopBarLayout = await import('../TopBarLayout.vue');
        const wrapper = mount(TopBarLayout.default, {
            global: {
                stubs: ['router-link', 'router-view'],
                plugins: []
            }
        });

        // check for the nav img class
        expect(wrapper.find('.topbar').exists()).toBe(true);
    });    
});