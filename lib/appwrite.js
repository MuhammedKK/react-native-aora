import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.videora",
  projectId: "66b8301a001fe8d74691",
  databaseId: "66c3bc400025b886dd48",
  userCollectionId: "66c3bc7c000f43eebc89",
  videoCollectionId: "66c3bca7003720515b81",
  storageId: "66c3bf320004c386cac9",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAcc = await account.create(ID.unique(), email, password, username);
    if (!newAcc) throw new Error();
    const avatarId = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await database.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAcc.$id,
        username: username,
        avatar: avatarId,
        email: email,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async  (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export const getUser = async () => {
    try {
        const currentAccount = await account.get();
        if(!currentAccount) throw new Error();
        const currentUser = await database.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if(!currentUser) throw new Error();
        return currentUser.documents[0];
    } catch(error) {
        throw new Error(error)
    }
}
