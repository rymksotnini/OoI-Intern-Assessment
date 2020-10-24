export async function editWallet(id,data) {
    const response = await fetch(`/api/wallets/`+id, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({wallet: data})
    });
    return await response.json();
}
