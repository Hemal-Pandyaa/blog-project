import { Client, Account, ID } from "appwrite";
import { conf } from "../config/conf.js";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
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
            if (userAccount) {
                return await this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log("APPWRITE :: CreateAcccount :: error ", error);
        }
    }

    async getUserAccount() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("APPWRITE :: getUserAccount :: error ", error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            );
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
