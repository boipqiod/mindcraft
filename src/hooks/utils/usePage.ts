import {useNavigate} from "react-router-dom";

export const usePage = () => {
    const navigate = useNavigate()

    return {
        toBack() { navigate(-1) },
        toMain() { navigate("/") },
        toDetail(id?: number) { navigate(`/test/${id}`) },
        toPlaying(id?: number) { navigate(`/test/${id}/play`) },
        toSignIn() { navigate("/signin") },
        toRegister() { navigate("/register") },
        toUser() { navigate("/user") },
        toCreate() { navigate("/create") },
    }
}
