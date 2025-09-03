import { useState } from "react";
import { createContext } from "react";
import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [credits, setCredits] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const [isCreditsLoading, setIsCreditsLoading] = useState(false);

  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const loadCredits = async () => {
    try {
      setIsCreditsLoading(true);
      const token = await getToken();
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/user/credits`,
        {
          headers: { token },
        }
      );

      if (data.success) {
        setCredits(data.credits);
        setIsCreditsLoading(false);
      }
      console.log(data.credits);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setIsCreditsLoading(false);
    }
  };

  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");
      const token = await getToken();
      const formData = new FormData();
      {
        image && formData.append("image", image);
      }
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/image/remove-bg`,
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        {
          data.creditBalance && setCredits(data.creditBalance);
        }
      } else {
        toast.error(data.message);
        {
          data.creditBalance && setCredits(data.creditBalance);
        }

        if (data.creditBalance === 0) {
          navigate("/buy");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const value = {
    getToken,
    credits,
    setCredits,
    loadCredits,
    isCreditsLoading,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
