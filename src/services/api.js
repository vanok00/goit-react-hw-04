import axios from 'axios';

export const fetchArticles = async () => {
    const YOUR_ACCESS_KEY = "WLG1_Cin7ua-cm4zH-zz4qkuzJxaK3v3FFYnbm7tQcg";
  const { data } = await axios.get(`https://api.unsplash.com/photos/?client_id=${YOUR_ACCESS_KEY}`);
  return data();
};

