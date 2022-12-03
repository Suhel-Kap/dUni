import {Blob, File, NFTStorage} from "nft.storage"

const useNftStorage = () => {
    const endpoint = "https://api.nft.storage" as any // the default
    const token = process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY as string

    const storage = new NFTStorage({ endpoint, token })

    const uploadImage = async (file: File) => {
        const blob = new Blob([file], { type: "image/*" })
        return await storage.storeBlob(blob)
    }

    const uploadJson = async (json: any) => {
        const blob = new Blob([JSON.stringify(json)], { type: "application/json" })
        return await storage.storeBlob(blob)
    }

    const uploadText = async (text: string) => {
        return await storage.storeBlob(new Blob([text]))
    }

    return { uploadImage, uploadText, uploadJson }
}

export default useNftStorage