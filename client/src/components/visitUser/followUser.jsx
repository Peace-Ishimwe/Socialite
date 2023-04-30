import React , {useState , useEffect} from 'react'
import { Button } from '@mui/material'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FollowUser = () => {

    const [follow, setFollow] = useState(false);
    const [pending , setPending] = useState(false)
    const { userId } = useParams();

    const followUsers = async () => {
      try {
        setPending(true)
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/home/suggested/follow`,
          { id:userId },
          { withCredentials: true }
        );
        setPending(false)
        setFollow(true);
      } catch (err) {
        console.log(err);
      }
    };
    const unFollowUsers = async () => {
      try {
        setPending(true)
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/home/suggested/unfollow`,
            { id:userId },
            { withCredentials: true }
          )
          .then((response) => {
            setPending(false)
            setFollow(false);
          });
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      const checkIfFollowing = async () => {
        try {
          const response = await axios.post(
              `${import.meta.env.VITE_BACKEND_PORT}/v1/api/u/home/check/follow`,
              { id:userId },
              { withCredentials: true }
            )
            .then((response) => {
              if (response.data.isFollowing === true) {
                setFollow(true);
              }
            });
        } catch (err) {
          console.log(err);
        }
      };
      checkIfFollowing();
    }, []);

  return (
    <div className='w-3/12 mx-auto mt-10 text-center'>
       {follow === false && pending == false &&(<Button onClick={followUsers} size='large' variant='contained'>Follow +</Button>)}
       {follow === true && pending == false && (<Button onClick={unFollowUsers} size='large' variant='contained'>Following</Button>)}
       {pending && <Button size='large' variant='contained'>pending...</Button>}
    </div>
  )
}

export default FollowUser