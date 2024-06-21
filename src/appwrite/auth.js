import { Client, Account, ID } from "appwrite";
import { conf } from "../config/conf.js";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        (this.client)
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
        
            return await this.login(userAccount);
        } catch (error) {
            console.log("APPWRITE :: CreateAcccount :: error ", error);
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            return false;
        }
    }

    async login({ email, password }) {
        try {
            const loggedUser =  await this.account.createEmailPasswordSession(
                email,
                password
            );
            return loggedUser;
        } catch (error) {
            console.log("APPWRITE :: login :: error ", error);
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("APPWRITE :: logout :: error ", error);
        }
    }
}

export const auth = new AuthService();

export default auth;
