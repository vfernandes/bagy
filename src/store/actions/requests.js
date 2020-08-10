export function resetUser() {
    return { type: 'RESET_REQUESTS_INFO' }
}

export function toggleRequests(user) {
    return { type: 'SET_REQUESTS_INFO', user }
}