import { useHttp } from "../hooks/http.hooks";

const useAutoPartsService = () => {

    const {request} = useHttp()

    const getCities = async () => {
        return await request("http://localhost:3098/city");
    }

    const getCars = async () => {
        return await request("http://localhost:3098/cars")
    }

    return {getCities, getCars}

}

export default useAutoPartsService