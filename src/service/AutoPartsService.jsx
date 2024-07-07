import { useHttp } from "../hooks/http.hooks";

const useAutoPartsService = () => {

    const {request} = useHttp()

    const getCities = async () => {
        return await request("http://localhost:3098/city");
    }

    return {getCities}

}

export default useAutoPartsService