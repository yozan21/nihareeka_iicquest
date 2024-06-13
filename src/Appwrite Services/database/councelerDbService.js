import { Databases,Client,ID } from "appwrite";

class CouncelerDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)
        
        this.database=new Databases(this.client)
    }

    async createCounceler({email,password,name}){
        try {
            const newCounceler=await this.database.createDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_counceler_id,
                ID.unique(),
                {
                    email,
                    password,
                    events:[],
                    name,
                    isBlocked:false
                }
            )
            return newCounceler?newCounceler:null
        } catch (error) {
            throw error
        }
    }
    
    async updateCounceler({councelerId, email,password,name,events,isBlocked}){
        try {
            const updatedCounceler=await this.database.updateDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_counceler_id,
                councelerId,
                {
                    email,
                    password,
                    name,
                    events,
                    isBlocked
                }
            )
            return updatedCounceler?updatedCounceler:null
        } catch (error) {
            throw error
        }
    }

    async getAllCouncelers(){
        try {
            const response=await this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_counceler_id
            )
            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const councelerDbService=new CouncelerDbService()