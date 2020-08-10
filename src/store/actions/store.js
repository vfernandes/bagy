export function resetForm() {
    return { type: 'RESET_STORE_INFO' }
}

export function toggleStore(store) {
    return { type: 'TOGGLE_STORE_INFO', store }
}