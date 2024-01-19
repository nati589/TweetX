import { Box, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function Users() {
  const [userList, setUserList] = useState([]);
  const userFetch = async () => {
    try {
      const q = query(collection(db, "user"));
      const querySnapshot = await getDocs(q);
      let list = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        list.push(doc.data());
        // console.log(doc.id, " => ", doc.data());
      });
      setUserList(list);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    userFetch();
  }, []);
  return (
    <Box sx={{ position: "relative", mx: "30%" }}>
      <Box sx={{ w: 1, pt: 1 }}>
      {userList?.map((user, index) => (
          <Box key={index}>
        <UserCard user={user}/>
        <Divider />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Users