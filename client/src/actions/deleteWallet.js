export async function deleteWallet(id) {
    const response = await fetch(`/api/wallets/`+id, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    return await response.json();
}
