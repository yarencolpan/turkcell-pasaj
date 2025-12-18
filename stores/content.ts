import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';

export const useContentStore = defineStore('content', {
    state: () => ({
        banners: [] as any[],
        campaigns: [] as any[],
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async fetchBanners() {
            try {
                const { $db } = useNuxtApp();
                const querySnapshot = await getDocs(collection($db, 'banners'));
                this.banners = querySnapshot.docs.map(doc => doc.data());
            } catch (err: any) {
                console.error("Error fetching banners:", err);
            }
        },
        async fetchCampaigns() {
            try {
                const { $db } = useNuxtApp();
                const querySnapshot = await getDocs(collection($db, 'campaigns'));
                this.campaigns = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            } catch (err: any) {
                console.error("Error fetching campaigns:", err);
            }
        },
        async fetchAllContent() {
            this.loading = true;
            await Promise.all([this.fetchBanners(), this.fetchCampaigns()]);
            this.loading = false;
        }
    }
});
