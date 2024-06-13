import { Storage,Client,ID } from "appwrite";

class StorageService{
    constructor(){
        this.client=new Client().
        setEndpoint(import.meta.env.VITE_Appwrite_app_url).
        setProject(import.meta.env.VITE_Appwrite_project_id)

        this.storage=new Storage(this.client)
    }

    async uploadImage(file){
        try {
            const newFile=await this.storage.createFile(
                import.meta.env.VITE_Appwrite_app_imgs_bucket_id,
                ID.unique(),
                file
            )
            return newFile?newFile:null
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                import.meta.env.VITE_Appwrite_app_imgs_bucket_id,
                fileId
            )
        } catch (error) {
            throw error
        }
    }
}

export const storageService=new StorageService()