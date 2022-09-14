import { describe, it, expect } from "vitest";
import { mount} from '@vue/test-utils';

describe('Test the profile view', () => {
    it('should render the profile view', async () => {
        const ProfileView = await import('../ProfileView.vue');
        const wrapper = mount(ProfileView.default);
        expect(wrapper.html()).toContain('Profile');
    });    
});
