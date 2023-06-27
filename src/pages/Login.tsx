import { auth, provider} from "../config/firebase";
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export function Login() {

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    navigate("/")
  };

  return (
    <div>
      <p>Sign in with GOOGLE to continue</p>
      <button onClick={signInWithGoogle}>Sign in with GOOGLE</button>
    </div>
  )
}
