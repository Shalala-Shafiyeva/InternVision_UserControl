import { useState } from "react";
import UserItem from "./UserItem";
import CreateModal from "./CreateModal";
function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className="users w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-8/12 mx-auto my-10 bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 transition-all duration-300">
      {isModalOpen && <CreateModal handleOpenModal={handleOpenModal} />}
      <div className="head w-full flex items-center justify-between flex-wrap gap-3 border-b border-gray-200 dark:border-gray-700 pb-5">
        <h2 className="sm:text-3xl text-xl font-bold text-gray-800 dark:text-white tracking-tight">
          Users
        </h2>
        <div className="add_btn">
          <button
            onClick={handleOpenModal}
            className="create_btn sm:w-[55px] sm:h-[55px] w-[35px] h-[35px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm sm:text-3xl shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>

      <div className="users_list w-full flex justify-center lg:justify-start flex-wrap gap-5 mt-10">
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </div>
    </section>
  );
}

export default Users;
