import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = async () => {
    return await axios.get(url)
}

