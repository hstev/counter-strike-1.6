import { reactive } from 'vue';
import { defaults } from '@/store/defaults';

export const store = reactive({
    ...defaults,
});

export const mutations = {
    setNewGameCfg(value) {
        store.newGameCfg = value;
    },
    setFindServersCfg(value) {
        store.findServersCfg = value;
    },
    setOptionsCfg(value) {
        store.optionsCfg = value;
    },
    setConsoleCfg(value) {
        store.consoleCfg = value;
    }
};

export const actions = {
    saveNewGameCfg(value) {
        mutations.setNewGameCfg(value);
    },
    saveFindServersCfg(value) {
        mutations.setFindServersCfg(value);
    },
    saveOptionsCfg(value) {
        mutations.setOptionsCfg(value);
    },
    saveConsoleCfg(value) {
        mutations.setConsoleCfg(value);
    }
};