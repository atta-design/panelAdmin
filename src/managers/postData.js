import axios from "axios";

const baseURL = "https://api-portal.saeedsafaee.ir/Account/Login";


async function axiosPost(url, postData, contenttype) {
  const retval = { status: 0, content: null };

  const { data } = await axios.post(baseURL, postData).catch( (error)=> {
    console.log(error);
  });
  console.log(data);
  retval.status = data.status;
  if (data.status === 1) {
    retval.content = data.content;
  }

  return retval;
}

export { baseURL, axiosPost };
