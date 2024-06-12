import { Client,Databases,ID } from "appwrite";

class AdminDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.database=new Databases(this.client)
    }

    async getAllAdmins(){
        try {
            const response=await this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_collection_admin_id
            )

            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const adminDbService=new AdminDbService()