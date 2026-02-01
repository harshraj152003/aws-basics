### 📦 Dependencies to Install

Run the following command to install the required libraries:

- `npm i @aws-sdk/client-s3 @aws-sdk/s3-request-presigner dotenv`
- `npm i @aws-sdk/s3-request-presigner`
- `npm i dotenv`

---

### 🛠️ Key Components Reference

- **`S3Client`**: The primary handler that establishes the connection to AWS using your account details.
  - **Params**: An object containing `region` and `credentials` (`accessKeyId` and `secretAccessKey`).
- **`GetObjectCommand`**: A specific request object used to signal that you want to "get" or "read" a file.
  - **Params**: An object requiring `Bucket` (the container name) and `Key` (the specific file path).
- **`key`**: The unique identifier or "filename" for the object stored inside your S3 bucket.
- **`getSignedUrl`**: A function that creates a temporary, secure URL for accessing private objects without publicizing the bucket.
  - **Params**: The `S3Client` instance, the `Command` to authorize, and an options object (e.g., `{ expiresIn }`).
- **`expiresIn`**: A parameter (in seconds) that determines how long the generated URL remains active before it expires.
- **`PutObjectCommand`**: A request object used to signal that you want to "put" or "upload" a file into your bucket.
  - **Params**: Requires Bucket and Key. It is highly recommended to include ContentType (e.g., image/png) to ensure the file is identified correctly.
- **`putObjectUrl (Presigned)`**: Created by passing a PutObjectCommand into the getSignedUrl function.
- **`ListObjectsV2Command`**: Yeh command aapke bucket ke andar maujood files (objects) ki list fetch karne ke liye use hoti hai. "V2" iska optimized aur recommended version hai.
  - **Params**: Requires Bucket. Aap Prefix (folder path) bhi de sakte hain taaki sirf specific folder ki files dikhayi dein.
  - **Contents**: Yeh command response mein ek array return karti hai jisme har file ki details hoti hain (jaise Key, Size, aur LastModified).
- **`DeleteObjectCommand`**: Used when you want to permanently remove a single specific file from your bucket.
  - **Params**: Requires Bucket and Key (the string path of the file).
  - **Note**: This command executes immediately; it does not return the deleted object, only a confirmation of the request.
- **`DeleteObjectsCommand`**: The "bulk" version of the delete command, allowing you to remove up to 1,000 objects in a single network request.
  - **Params**: Requires Bucket and a Delete object containing an Objects array.
  - **Structure**: Each item in the array must be an object: { Objects: [{ Key: "file1.jpg" }, { Key: "file2.jpg" }] }.
- **`dotenv`**: A utility that loads variables from a `.env` file into `process.env` to keep sensitive credentials secure.

---

### 💡 Purpose

This script acts as a secure intermediary that:

- **Protects Data:** Keeps your S3 bucket private.
- **Grants Access:** Generates a temporary link via `getSignedUrl`.
- **Self-Destructs:** The link automatically expires after 10 minutes.