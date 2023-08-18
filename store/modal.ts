import type { Component, DefineComponent } from 'vue';

export interface Modal<T = unknown> {
    show: boolean;
    onResolve?: (v: T) => void;
    onReject?: (v: T) => void;
    component: ReturnType<typeof defineAsyncComponent> | DefineComponent | Component | VNode | null;
}

export const useModalStore = definePiniaStore('modal-store', () => {
    const modal = reactive<Modal>({
        show: false,
        component: null,
    });
    function closeModal () {
        modal.show = false;
    }
    async function showModal<T, F = unknown> (resolveComp: Modal['component']) {
        return new Promise<T>((resolve, reject) => {
            function onResolve (v: T) {
                resolve(v);
                closeModal();
            }
            function onReject (v: F) {
                reject(v);
                closeModal();
            }
            Object.assign(modal, {
                show: true,
                onResolve,
                onReject, // @ts-ignore
                component: h(resolveComp, {
                    resolve: onResolve,
                    reject: onReject,
                }),
            });
        });
    }

    return {
        showModal,
        modal,
    };
});
