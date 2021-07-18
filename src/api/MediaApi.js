import axios from 'axios';

export const getMedia = () => {
  return axios.get('http://localhost:9000/files').then(res => res.data);
};

export const uploadSingleFile = async file => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'fjpeswry');

  let dataDb = await axios
    .post('https://api.Cloudinary.com/v1_1/hassaneb/image/upload', formData)
    .then(({ data }) => {
      // The data will be stored in the db.json
      return {
        id: data.asset_id,
        url: data.secure_url,
        thumbnail: data.secure_url,
        name: data.original_filename,
      };
    });

  // store file info in db.json
  return axios
    .post('http://localhost:9000/files', dataDb)
    .then(res => res.data);
};

export const deleteFiles = async ids => {
  const requests = ids.map(id =>
    axios.delete(`http://localhost:9000/files/${id}`)
  );

  return Promise.all(requests);
};
