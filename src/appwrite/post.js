import { conf } from "../config/conf";
import { Client, Database, Bucket, Storage, ID, Query } from "appwrite";

export class PostService {
client = new Client();
db;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.db = new Database(this.client);
        this.bucket = new Bucket(this.client);
    }

    async createPost({ title, content, featuredImage, slug, userId, status }) {
        try {
            return await this.db.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status,
                }
            );
        } catch (error) {
            console.log("APPWRITE :: CREATEPOST :: ERROR", error);
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.db.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (error) {
            console.log("APPWRITE :: UPDATEPOST :: ERROR", error);
        }
    }

    async deletePost(slug) {
        try {
            this.db.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (error) {
            console.log("APPWRITE :: DELETEPOST :: ERROR", error);
        }
    }

    async getPost(slug) {
        try {
            return await this.db.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("APPWRITE :: GETPOST :: ERROR", error);
            return false;
        }
    }

    async getAllPosts() {
        try {
            const query = Query.equal("status", "active");
            return await this.db.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query
            );
        } catch (error) {
            console.log("APPWRITE :: GETALLPOSTS :: ERROR", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("APPWRITE :: UPLOAD FILE :: ERROR", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.log("APPWRITE :: DELETE FILE :: ERROR", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.log("APPWRITE :: GET FILE PREVIEW :: ERROR", error);
            return false;
        }
    }
}

export const post = new PostService();

export default post;