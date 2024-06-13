import { Client,Databases,ID } from "appwrite";

class EventDbService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.database=new Databases(this.client)
    }

    async createEvent({organizer,address,imgId}){
        try {
            const newEvent=await this.database.createDocument(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_event_id,
                ID.unique(),
                {
                    organizer,
                    address,
                    imgId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async getAllEvents(){
        try {
            const response=await this.database.listDocuments(
                import.meta.env.VITE_Appwrite_app_database_id,
                import.meta.env.VITE_Appwrite_app_collection_event_id,
            )
            return response?response.documents:null
        } catch (error) {
            throw error
        }
    }
}

export const eventDbService=new EventDbService()