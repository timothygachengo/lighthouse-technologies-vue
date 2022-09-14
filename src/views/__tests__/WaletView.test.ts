import { describe, it, expect } from "vitest";
import { mount} from '@vue/test-utils';

describe('Test the wallet view', () => {
    it('should render the wallet view', async () => {
        const WalletView = await import('../WalletView.vue');
        const wrapper = mount(WalletView.default);
        expect(wrapper.html()).toContain('wallet');
    });    
});
