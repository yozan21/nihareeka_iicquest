import { Client,Account,ID } from "appwrite";

class AuthService{
    constructor(){
        this.client=new Client().
            setEndpoint(import.meta.env.VITE_Appwrite_app_url).
            setProject(import.meta.env.VITE_Appwrite_project_id)
        this.account=new Account(this.client)
    }

    async signUp({email,password}){
        try {
            const accountDetails=await this.account.create(ID.unique(),email,password)
            return accountDetails?accountDetails:null
        } catch (error) {
            throw error
        }
    }

    async logIn({email,password}){
        try {
            const session=await this.account.createEmailPasswordSession(email,password)
            if(session){
                localStorage.setItem('sessionId',session.$id)
                const accountDetails=this.getCurrentUser()
                return accountDetails?accountDetails:null
            }
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            const accountDetails=await this.account.get()
            return accountDetails?accountDetails:null
        } catch (error) {
            if(error.response.code===401) return null
        }
    }

    async logOut(){
        try {
            await this.account.deleteSession(localStorage.getItem('sessionId'))
            console.log('logged out')
        } catch (error) {
            throw error
        }
    }
}

export const authService=new AuthService()