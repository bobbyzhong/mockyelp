import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization:
            "Bearer I5gFGe9Q6NwIIvlQE3LfwEVSyaDnO_w8AGFuvAx-gCz9LW0lXSYwGja94FHY1wk170uJT9cTLmP4yzptx-Nrvtvl8-5NxH27_UbeJ7Srb9rqXgWZkJDiu_9zp-g0Y3Yx",
    },
});
