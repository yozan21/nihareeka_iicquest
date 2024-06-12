import { Client,Databases,ID } from "appwrite";

class UserDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.database=new Databases(this.client)
    }

    async createUser({accountId,accountType,userId}){
        try {
            const newUser=await this.database.createDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_user_id,
                ID.unique(),
                {
                    accountId,
                    accountType,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async getAllUsers(){
        try {
            const response=await this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_user_id
            )

            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const userDbService=new UserDbService()