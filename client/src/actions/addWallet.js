export async function addWallet(data) {
    const response = await fetch(`/api/wallets`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}
