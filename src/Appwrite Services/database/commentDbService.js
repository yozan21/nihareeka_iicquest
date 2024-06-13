import { Client,Databases,ID } from "appwrite";

class CommentDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.database=new Databases(this.client)
    }

    async createComment({belongsTo,posterName,content}){
        try {
            const newCommit=this.database.createDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_comment_id,
                ID.unique(),
                {
                    belongsTo,
                    posterName,
                    content
                }
            )
            return newCommit?newCommit:null
        } catch (error) {
            throw error
        }
    }

    async getAllComments(){
        try {
            const response=await this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_comment_id,
            )
            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const commentDbService=new CommentDbService()