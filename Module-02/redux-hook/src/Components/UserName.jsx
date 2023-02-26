import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nameMethod } from '../redux/getName/actionCreator';
import Button from './Button';
import ShowCount from './ShowCount';

const UserName = () => {
  const ourName = useSelector((state) => state.users[0].name);
  const dispatch = useDispatch();

  const nameHandler = () => {
    return dispatch(nameMethod());
  }
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <ShowCount count={ourName} />
        <div className="flex space-x-3">
          <Button
            classes="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            onClick={nameHandler}
          >
            Change Name
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserName;