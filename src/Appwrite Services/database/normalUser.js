import { Client,Databases,ID } from "appwrite";

class NormalUserDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.database=new Databases(this.client)
    }

    async createNormalUser({email,password,name}){
        try {
            const newNormalUser=await this.database.createDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_normal_user_id,
                ID.unique(),
                {
                    email,
                    password,
                    posts:[],
                    name
                }
            )
            return newNormalUser?newNormalUser:null
        } catch (error) {
            throw error
        }
    }

    async getAllNormalUsers(){
        try {
            const response=this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_normal_user_id
            )

            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const normalUserDbService=new NormalUserDbService()