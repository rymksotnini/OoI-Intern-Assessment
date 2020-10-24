const App = require("../");
const expect = require("chai").expect;

describe("App", async (accounts) => {
  let app;

  beforeEach(async () => {
    app = new App();
  });

  describe("getWallets", () => {
    it("has two default wallets", async () => {
      const wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(2);
    });
  });

  describe("addWallet", () => {
    it("creates a new wallet", async () => {
      const newWallet = {
        "name": "wallet 2",
        "address": "0x0000000000000000000000000000000000000002",
        "currency": "Ethereum",
        "balance": 10000000
      };
      await app.addWallet(newWallet);
      const wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(3);
    });
  });

  describe("editWallet", () => {
    const newName = "New Wallet Name";
    it("edits a wallet", async () => {
      const wallets = await app.getWallets();
      const body = {
        "name": newName,
        "address": wallets[0].address,
        "currency": wallets[0].currency,
        "balance": wallets[0].balance
      };
      await app.editWallet(0,body);
      expect((await app.getWallets())[0].name).to.be.equal(newName);
    });
  });

  describe("deleteWallet", () => {
    it("deletes a wallet", async () => {
      await app.deleteWallet(0);
      const wallets = await app.getWallets();
      expect(wallets.length).to.be.equal(1);
    });
  });
});

