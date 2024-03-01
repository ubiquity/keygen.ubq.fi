# `@ubiquity/keygen.ubq.fi`

### Generate a New Encrypted EVM Private Key

1. **Visit the Key Generation Tool**
   - Navigate to the permit key generation tool on the web.

2. **Generate a Key**
   - Click on the "Generate" button on the webpage to initiate the key generation process.

3. **Input Your EVM Private Key**
   - In the provided plain text field, paste your EVM Private Key. Ensure that it is 32 bytes in length.

4. **Encrypt Your Private Key**
   - Once you've pasted your private key, click on the "Encrypt" button. This action will encrypt your private key, enhancing its security.

5. **Update GitHub Secrets**
   - Copy the newly generated private key and update it on your GitHub Actions secret. Find the field labeled `x25519_PRIVATE_KEY` and replace its content with your generated x25519 private key.

6. **Update Configuration File**
   - Next, take the cipher text, which is the encrypted version of your private key, and paste it into your `ubiquibot-config.yaml` file. Look for the field labeled `evmEncryptedPrivate` and replace its content with the cipher text.

7. **Double Check**
   - Ensure that you've updated the GitHub Actions secret field `x25519_PRIVATE_KEY` with your already generated x25519 private key. This double check ensures that all components are aligned and your system remains secure.
