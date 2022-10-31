const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`;

const HttpService = {
  getITBlog: baseURL + "users/getITBlog",
  getCarousel: baseURL + "users/getCarousel",
};

export default HttpService;
