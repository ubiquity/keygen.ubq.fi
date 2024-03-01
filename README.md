# `@ubiquity/keygen.ubq.fi`

Generating a New evmPrivateKeyEncrypted for the ubiquibot-config.yaml

To generate a new encrypted EVM private key:

Visit the Key Generation Tool

Navigate to the permit key generation tool on the web.

Generate a Key

Click on the "Generate" button on the webpage to initiate the key generation process.

Input Your EVM Private Key

In the provided plain text field, paste your EVM Private Key. Ensure that it is 32 bytes in length.

Encrypt Your Private Key

Once you've pasted your private key, click on the "Encrypt" button. This action will encrypt your private key, enhancing its security.

Update GitHub Secrets

Copy the newly generated private key and update it on your GitHub Actions secret. Find the field labeled x25519_PRIVATE_KEY and replace its content with your generated x25519 private key.

Update Configuration File

Next, take the cipher text, which is the encrypted version of your private key, and paste it into your ubiquibot-config.yaml file. Look for the field labeled evmEncryptedPrivate and replace its content with the cipher text.

Double Check

Ensure that you've updated the GitHub Actions secret field x25519_PRIVATE_KEY with your already generated x25519 private key. This double check ensures that all components are aligned and your system remains secure.