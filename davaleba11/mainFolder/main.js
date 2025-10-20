
        const fs = require("fs/promises");
        const path = require("path");
        async function createSubFolderAndIndex() {
            const subDir = path.join(__dirname, "subFolder");
            const indexJsPath = path.join(subDir, "index.js");
            await fs.mkdir(subDir, { recursive: true });
            await fs.writeFile(indexJsPath, `
                const fs = require("fs/promises");
                const path = require("path");
                async function writeMessage() {
                    const messageTxtPath = path.join(__dirname, "..", "message.txt");
                    const message = "Hello, World!";
                    const reversedMessage = message.split("").reverse().join("");
                    await fs.writeFile(messageTxtPath, reversedMessage);
                }
                writeMessage().catch(console.error);
            `);
        }
        createSubFolderAndIndex().catch(console.error);
    