function UserItem({ user }) {
  return (
    <div className="user_card w-full sm:w-full md:w-[48%] lg:w-[30%] xl:w-[23%] bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 overflow-hidden box-border">
      <div className="user_info flex flex-col text-center sm:text-left text-sm text-gray-800 dark:text-gray-300">
        <div className="fullname text-lg font-semibold text-gray-900 dark:text-white">
          {user?.name ?? user?.fullname}
        </div>
        <div className="phone font-medium break-all">{user?.phone}</div>
        <div className="address font-medium break-all">
          {[user?.address?.city, user?.address?.street]
            .filter(Boolean)
            .join(", ")}
        </div>

        <div className="website font-medium break-all">{user?.website}</div>
        <div className="company font-medium break-all">
          {user?.company?.name}
        </div>
        <div className="email text-blue-500 dark:text-blue-400 text-sm truncate">
          {user?.email}
        </div>
      </div>
    </div>
  );
}

export default UserItem;
