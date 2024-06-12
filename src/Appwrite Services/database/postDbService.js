import { Client,Databases,ID } from "appwrite";

class PostDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.database=new Databases(this.client)
    }

    async createPost({accountId,date,imgId,content,isAnonymous}){
        try {
            const newPost=await this.database.createDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_post_id,
                ID.unique(),
                {
                    accountId,
                    date,
                    imgId,
                    content,
                    likes:0,
                    comments:[],
                    isAnonymous
                }
            )
            return newPost?newPost:null
        } catch (error) {
            throw error
        }
    }

    async updatePost({postId,accountId,date,imgId,content,likes,comments,isAnonymous}){
        try {
            const updatedPost=await this.database.updateDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_post_id,
                postId,
                {
                    accountId,
                    date,
                    imgId,
                    content,
                    likes,
                    comments,
                    isAnonymous
                }
            )
            return updatedPost?updatedPost:null
        } catch (error) {
            throw error
        }
    }

    async getAllPosts(){
        try {
            const response=await this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_post_id,
            )
            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const postDbService=new PostDbService()