const router = require("express").Router();
const { Logger } = require("node-core-utils");
const logger = new Logger("Wallet Routes");

router.get("/", async (req, res) => {
    const app = req.app.get("app");
    let wallets = [];

    try {
        await app.deleteWallet(0);
        wallets = await app.getWallets();
    } catch (e) {
        logger.error(e);
        return res.status(500).send();
    }
    res.json(wallets);
});

router.post("/", async (req, res) => {
        const app = req.app.get("app");
        try {
            await app.addWallet(req.body);
        } catch (e) {
            logger.error(e);
            return res.status(500).send();
        }
    }
);

router.put("/:id", async (req, res) => {
        const app = req.app.get("app");
        try {
            await app.editWallet(req.params.id,req.body);
        } catch (e) {
            logger.error(e);
            return res.status(500).send();
        }
    }
);

router.delete("/:id", async (req, res) => {
        const app = req.app.get("app");
        try {
            await app.deleteWallet(req.params.id);
        } catch (e) {
            logger.error(e);
            return res.status(500).send();
        }
    }
);

module.exports = router;

