import { useDispatch } from 'react-redux';
import { editProfile } from '../api/userApi';
import { addUser } from '../store/slices/userSlice';

const EditProfileHook = () => {
  const dispatch = useDispatch();

  const profileEdit = async (data) => {
    try {
      const res = await editProfile(data);
      dispatch(addUser(res.data.data));
      return {success : true}
    } catch (err) {
      console.error("Edit profile error:", err.response?.data || err.message);
      return {success : false}
    }
  };

  return profileEdit;
};

export default EditProfileHook;
